import { Code, Palette, Brain, Cpu, FileCode, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/devi-profile-real.jpg';

const Hero = () => {
  const skills = [
    { icon: Code, label: 'Python' },
    { icon: Terminal, label: 'C' },
    { icon: FileCode, label: 'HTML' },
    { icon: FileCode, label: 'CSS' },
    { icon: Sparkles, label: 'Creative Coding' },
    { icon: Brain, label: 'Neurotechnology & BCI' },
    { icon: Cpu, label: 'AI-Powered Development' },
    { icon: Palette, label: 'UI/UX Design' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender/20 rounded-full blur-3xl pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-soft-blue/15 rounded-full blur-3xl pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-skill-gradient bg-clip-text text-transparent">
                Devi Chandran
              </span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="btn-glow bg-skill-gradient hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 rounded-2xl shadow-soft transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 rounded-2xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Skills Preview */}
            <div className="pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-4">Key Skills</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="skill-card flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card shadow-card border border-border/30 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-card-foreground">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="pt-4">
              <p className="text-sm font-medium text-muted-foreground mb-4">Developer Tools</p>
              <div className="flex flex-wrap gap-3">
                {['Git & GitHub', 'VS Code', 'Figma', 'Chrome DevTools'].map((tool, index) => (
                  <div 
                    key={tool}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/30 cursor-default hover:bg-muted transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-muted-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-2xl opacity-40 float scale-110" />
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              <img
                src={profileImage}
                alt="Devi Chandran"
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-glow z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
