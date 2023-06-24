import { createContext, useContext, useState } from 'react';
import YoutubePlayer from '../../components/YoutubePlayer/YoutubePlayer';

export interface DetailPageState {
  player: unknown | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export interface DetailPageAction {
  register: (YT: unknown) => void;
  play: () => void;
  pause: () => void;
  handleCurrentTime: (currentTime: number) => void;
  handleDuration: (duration: number) => void;
}

interface DetailPageProviderProps {
  children: React.ReactNode;
}

const DetailPageStateContext = createContext<DetailPageState | null>(null);
const DetailPageActionContext = createContext<DetailPageAction | null>(null);

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const action = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register(YT: any) {
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
  return (
    <DetailPageProvider>
      <div>
        <YoutubePlayer />
      </div>
    </DetailPageProvider>
  );
};

export default Detail;
