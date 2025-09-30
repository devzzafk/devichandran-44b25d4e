import { Code, Palette, BarChart3, Sparkles, Globe, Smartphone, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/devi-profile-real.jpg';

const Hero = () => {
  const skills = [
    { icon: Code, label: 'Python & JavaScript' },
    { icon: Palette, label: 'Designing' },
    { icon: Globe, label: 'Web Development' },
    { icon: Smartphone, label: 'App Development' },
    { icon: Edit, label: 'Content Creating' },
    { icon: BarChart3, label: 'Data Science' },
    { icon: Sparkles, label: 'Creative Coding' },
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
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6 fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-white">
                Devi Chandran
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              An aspiring engineer passionate about{' '}
              <span className="font-semibold text-primary">coding</span>,{' '}
              <span className="font-semibold text-primary">designing interactive websites</span>, and{' '}
              <span className="font-semibold text-primary">exploring data science</span>.
            </p>

            <p className="text-lg text-muted-foreground">
              Where creativity meets technology to build meaningful projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Skills Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="skill-card p-4 rounded-xl bg-card-gradient border border-border/50 text-center group cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-medium text-card-foreground">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-skill-gradient rounded-full blur-2xl opacity-30 float"></div>
              <img
                src={profileImage}
                alt="Devi Chandran - Aspiring Engineer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-glow"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center bounce-in">
                <Sparkles className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;