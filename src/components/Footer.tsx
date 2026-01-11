const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-semibold text-foreground">Devi Chandran</span>
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
