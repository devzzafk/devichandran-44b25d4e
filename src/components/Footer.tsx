import { Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold bg-skill-gradient bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Devi Chandran
            </button>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Aspiring engineer passionate about creating meaningful digital experiences through code and design.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 py-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Code className="w-4 h-4" />
              <span className="text-sm">Built with React</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Designed with passion</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm flex items-center justify-center space-x-2">
              <span>&copy; {currentYear} Devi Chandran. Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;