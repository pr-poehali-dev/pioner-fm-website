import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { useAudio } from '@/context/AudioContext';

export default function RadioPlayer() {
  const { isPlaying, volume, togglePlay, setVolume } = useAudio();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary border-t-4 border-primary z-50 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Button
              onClick={togglePlay}
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary rounded-full w-14 h-14 p-0 hover:scale-110 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <Icon name="Pause" size={28} />
              ) : (
                <Icon name="Play" size={28} className="ml-1" />
              )}
            </Button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse-slow"></div>
                <h3 className="font-bold text-lg text-white">PIONER FM</h3>
              </div>
              <p className="text-sm text-white/90">
                {isPlaying ? 'В эфире: Хиты 90-х, 2000-х, 2010-х' : 'Нажмите Play для начала трансляции'}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 w-48">
            <Icon name="Volume2" size={20} className="text-white" />
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