import { Sparkles, Heart } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

const Footer = () => {
  const { playClick } = useSoundEffects();

  return (
    <footer className="bg-card border-t border-border/40 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-skill-gradient">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold font-display bg-skill-gradient bg-clip-text text-transparent">Devi Chandran</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              onClick={() => playClick()}
              className="cute-underline text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={() => playClick()}
              className="cute-underline text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => playClick()}
              className="cute-underline text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-baby-pink fill-baby-pink" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
