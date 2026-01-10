import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-soft border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-skill-gradient">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-skill-gradient bg-clip-text text-transparent">Devi</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-xl hover:bg-primary/5">
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('#contact')} className="btn-glow bg-skill-gradient hover:opacity-90 text-primary-foreground font-medium px-6 rounded-xl">Let's Talk</Button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-xl hover:bg-primary/5">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
          <nav className="container mx-auto px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors">{item.label}</button>
            ))}
            <Button onClick={() => scrollToSection('#contact')} className="w-full mt-4 btn-glow bg-skill-gradient hover:opacity-90 text-primary-foreground font-medium py-6 rounded-xl">Let's Talk</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
