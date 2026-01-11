import { Code, Palette, Brain, Cpu, FileCode, Terminal, Sparkles, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import profileImage from '@/assets/devi-profile-real.jpg';

const Hero = () => {
  const { playPop, playWhoosh } = useSoundEffects();
  
  const skills = [
    { icon: Code, label: 'Python', color: 'from-lavender to-lilac' },
    { icon: Terminal, label: 'C', color: 'from-soft-blue to-mint' },
    { icon: FileCode, label: 'HTML', color: 'from-peach to-baby-pink' },
    { icon: FileCode, label: 'CSS', color: 'from-mint to-soft-blue' },
    { icon: Sparkles, label: 'Creative Coding', color: 'from-baby-pink to-lavender' },
    { icon: Brain, label: 'Neurotechnology & BCI', color: 'from-lilac to-soft-blue' },
    { icon: Cpu, label: 'AI-Powered Development', color: 'from-lavender to-mint' },
    { icon: Palette, label: 'UI/UX Design', color: 'from-baby-pink to-peach' },
  ];

  const scrollToContact = () => {
    playPop();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    playWhoosh();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient pt-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-baby-pink/25 rounded-full blur-3xl pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-mint/15 rounded-full blur-3xl float-delayed" />
      
      {/* Floating decorative particles */}
      <div className="particle w-3 h-3 bg-baby-pink/60 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
      <div className="particle w-2 h-2 bg-lavender/70 top-1/3 right-1/3" style={{ animationDelay: '1s' }} />
      <div className="particle w-4 h-4 bg-mint/50 bottom-1/3 left-1/3" style={{ animationDelay: '2s' }} />
      <div className="particle w-2 h-2 bg-peach/60 top-1/2 right-1/4" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/40 wiggle">
              <Heart className="w-4 h-4 text-baby-pink fill-baby-pink" />
              <span className="text-sm font-semibold text-muted-foreground">Welcome to my little corner</span>
              <Star className="w-4 h-4 text-peach fill-peach" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold font-display leading-tight">
              Hi, I'm{' '}
              <span className="rainbow-text">
                Devi Chandran
              </span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="btn-cute bg-skill-gradient hover:opacity-90 text-primary-foreground font-bold px-8 py-6 rounded-2xl shadow-cute transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="btn-cute border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary font-bold px-8 py-6 rounded-2xl transition-all duration-300"
              >
                <Heart className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Skills Preview */}
            <div className="pt-6">
              <p className="text-sm font-bold text-muted-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Key Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="skill-card flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card shadow-card border border-border/30 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-1.5 rounded-xl bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-card-foreground">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="pt-2">
              <p className="text-sm font-bold text-muted-foreground mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-mint" />
                Developer Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {['Git & GitHub', 'VS Code', 'Figma', 'Chrome DevTools'].map((tool, index) => (
                  <div 
                    key={tool}
                    className="skill-card flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-muted/60 border border-border/30 cursor-default hover:bg-muted transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-semibold text-muted-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute inset-0 bg-fun-gradient rounded-full blur-3xl opacity-40 float scale-110" />
              <div className="absolute -inset-6 border-3 border-dashed border-primary/25 rounded-full" style={{ animation: 'rotate 20s linear infinite' }} />
              
              <img
                src={profileImage}
                alt="Devi Chandran"
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-cute z-10"
              />
              
              {/* Floating icons around image */}
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-card rounded-2xl shadow-cute flex items-center justify-center bounce-in border border-border/40 float">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-card rounded-2xl shadow-cute flex items-center justify-center bounce-in border border-border/40 float-delayed" style={{ animationDelay: '0.2s' }}>
                <Palette className="w-5 h-5 text-baby-pink" />
              </div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-card rounded-xl shadow-cute flex items-center justify-center bounce-in border border-border/40 wiggle" style={{ animationDelay: '0.4s' }}>
                <Heart className="w-4 h-4 text-baby-pink fill-baby-pink" />
              </div>
              <div className="absolute top-1/4 -left-4 w-10 h-10 bg-card rounded-xl shadow-cute flex items-center justify-center bounce-in border border-border/40 float" style={{ animationDelay: '0.6s' }}>
                <Star className="w-4 h-4 text-peach fill-peach" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
