import { Code, Palette, BarChart3, Sparkles, FileCode, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/devi-profile-real.jpg';

const Hero = () => {
  const skills = [
    { icon: Code, label: 'Python', color: 'from-lavender to-soft-blue' },
    { icon: FileCode, label: 'JavaScript', color: 'from-peach to-baby-pink' },
    { icon: Layers, label: 'HTML/CSS', color: 'from-mint to-lavender' },
    { icon: BarChart3, label: 'Data Science', color: 'from-soft-blue to-mint' },
    { icon: Palette, label: 'UI/UX Design', color: 'from-baby-pink to-lavender' },
    { icon: Sparkles, label: 'Creative Coding', color: 'from-lavender to-peach' },
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
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-baby-pink/15 rounded-full blur-3xl pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-skill-gradient bg-clip-text text-transparent">
                Devi Chandran
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              An aspiring engineer passionate about{' '}
              <span className="font-semibold text-primary">coding</span>,{' '}
              <span className="font-semibold text-primary">designing interactive websites</span>, and{' '}
              <span className="font-semibold text-primary">exploring data science</span>.
            </p>

            <p className="text-lg text-muted-foreground italic">
              ✨ Where creativity meets technology to build meaningful projects.
            </p>

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
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground">{skill.label}</span>
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
                alt="Devi Chandran - Aspiring Engineer"
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background shadow-glow z-10"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-2xl shadow-soft flex items-center justify-center bounce-in border border-border/50">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-6 w-14 h-14 bg-card rounded-2xl shadow-soft flex items-center justify-center bounce-in border border-border/50" style={{ animationDelay: '0.2s' }}>
                <Palette className="w-6 h-6 text-baby-pink" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-card rounded-xl shadow-soft flex items-center justify-center bounce-in border border-border/50" style={{ animationDelay: '0.4s' }}>
                <BarChart3 className="w-5 h-5 text-mint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
