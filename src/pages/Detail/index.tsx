/* eslint no-unused-vars: 1 */
import React, { createContext, useContext, useState } from 'react';
import YoutubePlayer from '../../components/YoutubePlayer/YoutubePlayer';
import RecipeCourse from '../../components/RecipeCourse';
import { styled } from 'styled-components';
import { useRecipe } from '../../hooks/react-query/useRecipe';
import { useParams } from 'react-router-dom';
import { YouTubePlayer } from 'react-youtube';
import Header from '../../components/Detail/Header';

export interface DetailPageState {
  player: YouTubePlayer | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export interface DetailPageAction {
  register: (YT: YouTubePlayer) => void;
  play: () => void;
  pause: () => void;
  handleCurrentTime: (currentTime: number) => void;
  handleDuration: (duration: number) => void;
}

interface DetailPageProviderProps {
  children: React.ReactNode;
}

const DetailPageStateContext = createContext<DetailPageState>({
  player: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
});
const DetailPageActionContext = createContext<DetailPageAction>({
  register: (YT: YouTubePlayer) => {},
  play: () => {},
  pause: () => {},
  handleCurrentTime: (currentTime: number) => {},
  handleDuration: (duration: number) => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useDetailPageState() {
  const state = useContext(DetailPageStateContext);
  if (state === undefined) {
    console.error(
      'useDetailPageState는 DetailPageProvider 안에 위치해야 합니다'
    );
  }
  return state;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDetailPageAction() {
  const action = useContext(DetailPageActionContext);
  if (action === undefined) {
    console.error(
      'useDetailPageAction은 DetailPageProvider 안에 위치해야 합니다'
    );
  }
  return action;
}

function DetailPageProvider({ children }: DetailPageProviderProps) {
  const [player, setPlayer] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const state = {
    player,
    isPlaying,
    currentTime,
    duration,
  };

  const action: DetailPageAction = {
    register(YT: YouTubePlayer) {
      setPlayer(YT);
    },
    play() {
      player.playVideo();
      setIsPlaying(true);
    },
    pause() {
      player.pauseVideo();
      setIsPlaying(false);
    },
    handleCurrentTime(time: number) {
      setCurrentTime(time);
    },
    handleDuration(duration: number) {
      setDuration(duration);
    },
  };

  return (
    <DetailPageStateContext.Provider value={state}>
      <DetailPageActionContext.Provider value={action}>
        {children}
      </DetailPageActionContext.Provider>
    </DetailPageStateContext.Provider>
  );
}

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const { useGetAllRecipeList } = useRecipe();
  const { data: allRecipe, isLoading } = useGetAllRecipeList();

  const targetRecipe = allRecipe?.find((recipe) => recipe.id === Number(id));

  return (
    <DetailPageProvider>
      {!isLoading && targetRecipe && targetRecipe.youtube_video_id && (
        <>
          <Header title={targetRecipe?.recipe_name ?? ''} />
          <Wrapper>
            <>
              <YoutubePlayer videoId={targetRecipe.youtube_video_id} />
              <RecipeCourse recipe={targetRecipe} />
            </>
          </Wrapper>
        </>
      )}
    </DetailPageProvider>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto;
  flex-direction: column;
`;
