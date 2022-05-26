import React from 'react';
import PlayerProvider from './provider';
import FilePicker from './filePicker';
import Player from './player';

const AudioPlayer = () => {
  return (
    <PlayerProvider>
      <FilePicker />
      <Player />
    </PlayerProvider>
  );
};

export default AudioPlayer;
