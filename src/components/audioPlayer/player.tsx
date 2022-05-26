import React, { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import PlayerContext from './provider/context';
import AudioDriver from './drive';
import { useDebouncedCallback } from 'use-debounce';

const Player = () => {
  const {audioFile} = useContext<any>(PlayerContext);
  const [driver, setDriver] = useState<AudioDriver>();
  const [duretion,setDuration] = useState<any>()
  useEffect(() => {
    if (!audioFile) {
      return;
    }

    const init = async () => {
      const audioDriver = new AudioDriver(audioFile);
      audioDriver.init()
        .then(() => {
          setDriver(audioDriver)
        })
       
    };

    init();
  }, [audioFile]);

  useEffect(()=>{
    setDuration(driver?.getDuretion())
  },[driver])

  

  const play = useCallback(() => {
    console.log()
    driver?.play();
  }, [driver]);

  const pause = useCallback(() => {
    driver?.pause();
  }, [driver]);

  const stop = useCallback(() => {
    driver?.pause(true);
  }, [driver]);

  const onVolumeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    driver?.changeVolume(Number(event.target.value));
  }, [driver]);

  const onChengeSoubndTime = useDebouncedCallback((e:any)=>{
    driver?.ChengeSoubndTime(e.target.value)
  },150)

  if (!audioFile) {
    return null;
  }

  if (!driver) {
    return <div>Loading</div>
  }

  
  return (
    <div className={'player'}>
      <button onClick={play}>
        Play
      </button>

      <button onClick={pause}>
        Pause
      </button>

      <button onClick={stop}>
        Stop
      </button>

      <input
        type="range"
        onChange={onVolumeChange}
        defaultValue={1}
        min={-1}
        max={1}
        step={0.01}
      />

        <input
        type="range"
        onChange={onChengeSoubndTime}
        defaultValue={1}
        min={0}
        max={duretion}
        step={0.01}
      />
    </div>
  );
};

export default Player;
