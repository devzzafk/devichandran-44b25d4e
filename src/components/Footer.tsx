import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-skill-gradient">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-skill-gradient bg-clip-text text-transparent">Devi Chandran</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-baby-pink fill-current" />
            <span>by Devi</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
