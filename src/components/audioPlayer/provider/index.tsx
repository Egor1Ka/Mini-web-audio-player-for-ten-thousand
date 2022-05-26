import React, {ReactElement, useState} from 'react';
import PlayerContext from './context';

const PlayerProvider = ({children}: {children: ReactElement | ReactElement[]}) => {
  const [audioFile, setAudioFile] = useState<AudioBuffer>();

  const contextValue = {
    audioFile,
    setAudioFile,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
