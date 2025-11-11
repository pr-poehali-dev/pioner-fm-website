import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

const STREAM_URL = 'https://myradio24.org/40350';

let globalAudio: HTMLAudioElement | null = null;

const getAudio = () => {
  if (!globalAudio) {
    globalAudio = new Audio(STREAM_URL);
    globalAudio.preload = 'none';
  }
  return globalAudio;
};

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(70);

  useEffect(() => {
    const audio = getAudio();
    audio.volume = volume / 100;
  }, [volume]);

  const togglePlay = () => {
    const audio = getAudio();

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.error('Playback error:', error);
      });
      setIsPlaying(true);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, volume, togglePlay, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
}
