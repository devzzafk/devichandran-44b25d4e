import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playPop: () => void;
  playClick: () => void;
  playWhoosh: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Create sounds using Web Audio API
const createAudioContext = () => {
  if (typeof window !== 'undefined') {
    return new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return null;
};

const playTone = (
  ctx: AudioContext,
  frequency: number,
  duration: number,
  type: OscillatorType = 'sine',
  volume: number = 0.15
) => {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
};

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContext) {
      const ctx = createAudioContext();
      setAudioContext(ctx);
      return ctx;
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return audioContext;
  }, [audioContext]);

  const playPop = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Cute pop sound - higher pitched, quick
    playTone(ctx, 880, 0.08, 'sine', 0.12);
    setTimeout(() => playTone(ctx, 1200, 0.05, 'sine', 0.08), 30);
  }, [soundEnabled, getAudioContext]);

  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Soft click sound
    playTone(ctx, 600, 0.06, 'triangle', 0.1);
  }, [soundEnabled, getAudioContext]);

  const playWhoosh = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Quick whoosh
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  }, [soundEnabled, getAudioContext]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playPop, playClick, playWhoosh }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundEffects = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundEffects must be used within a SoundProvider');
  }
  return context;
};
