import { Volume2, VolumeX } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

const SoundToggle = () => {
  const { soundEnabled, toggleSound, playClick } = useSoundEffects();

  const handleToggle = () => {
    playClick();
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card-gradient shadow-cute border border-border/30 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default SoundToggle;
