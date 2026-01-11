import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundEffects } from '@/hooks/useSoundEffects';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { playPop, playClick } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tutorials', href: '#tutorials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    playClick();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/85 backdrop-blur-2xl shadow-soft border-b border-border/40' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); playPop(); scrollToSection('#home'); }} 
            className="flex items-center gap-2 group"
          >
            <div className="p-2 rounded-2xl bg-skill-gradient group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display bg-skill-gradient bg-clip-text text-transparent">Devi</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.href)} 
                className="cute-underline px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors rounded-2xl hover:bg-primary/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button 
              onClick={() => { playPop(); scrollToSection('#contact'); }} 
              className="btn-cute bg-skill-gradient hover:opacity-90 text-primary-foreground font-semibold px-6 rounded-2xl shadow-soft"
            >
              Say Hello
            </Button>
          </div>
          <button 
            onClick={() => { playClick(); setIsMenuOpen(!isMenuOpen); }} 
            className="md:hidden p-2.5 text-foreground hover:text-primary transition-colors rounded-2xl hover:bg-primary/5 active:scale-95"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/40 fade-in">
          <nav className="container mx-auto px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.href)} 
                className="block w-full text-left px-4 py-3.5 text-base font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all active:scale-98"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => { playPop(); scrollToSection('#contact'); }} 
              className="w-full mt-4 btn-cute bg-skill-gradient hover:opacity-90 text-primary-foreground font-semibold py-6 rounded-2xl"
            >
              Say Hello
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
