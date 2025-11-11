import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

const STREAM_URL = 'https://myradio24.org/40350';

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(STREAM_URL);
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Button
              onClick={togglePlay}
              size="lg"
              className="gradient-pioneer rounded-full w-14 h-14 p-0 hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Icon name="Pause" size={28} className="text-white" />
              ) : (
                <Icon name="Play" size={28} className="text-white ml-1" />
              )}
            </Button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></div>
                <h3 className="font-bold text-lg">PIONER FM</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {isPlaying ? 'В эфире: Хиты 90-х, 2000-х, 2010-х' : 'Нажмите Play для начала трансляции'}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 w-48">
            <Icon name="Volume2" size={20} className="text-muted-foreground" />
            <Slider
              value={[volume]}
              onValueChange={(val) => setVolume(val[0])}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
