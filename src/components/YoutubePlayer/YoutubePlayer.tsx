import React from 'react';
import Player, { YouTubeProps } from 'react-youtube';
import { useDetailPageAction, useDetailPageState } from '../../pages/Detail';
import useInterval from '../../hooks/useInterval';

const width = '360';
const height = (Number(width) / 16) * 9;

const opts: YouTubeProps['opts'] = {
  width,
  height: String(height),
};

const embed = 'BZEjXGZMxrE';

const YoutubePlayer: React.FunctionComponent = () => {
  const { player } = useDetailPageState();
  const { register, handleCurrentTime, handleDuration } = useDetailPageAction();

  const intervalCallback = () => {
    if (player.getPlayerState() === 1) {
      const currentTime = Math.round(player.getCurrentTime() * 10) / 10;
      handleCurrentTime(currentTime);
    }
  };

  useInterval({ callback: intervalCallback, delay: 1000 });

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    const YT = event.target;
    register(YT);
    handleDuration(YT.getDuration());
  };

  return <Player videoId={embed} opts={opts} onReady={onPlayerReady} />;
};

export default YoutubePlayer;
