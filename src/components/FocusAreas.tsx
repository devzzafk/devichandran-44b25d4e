import { Brain, Rocket, Code, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FocusAreas = () => {
  const focusAreas = [
    {
      emoji: '🧬',
      title: 'Brain–Computer Interfaces (BCI)',
      description: 'I explore how Brain–Computer Interfaces enable communication between the human brain and external devices. My interest lies in understanding neural signal acquisition, decoding methods, and real-world applications such as assistive technology and neurorehabilitation.',
      icon: Brain,
      gradient: 'from-lavender to-soft-blue'
    },
    {
      emoji: '🚀',
      title: 'Neuralink & Neurotechnology Research',
      description: 'Deeply interested in Neuralink and the future of implantable brain-machine interfaces. I study how emerging neurotechnology aims to restore and enhance human capabilities, inspired by innovations led by Elon Musk.',
      icon: Rocket,
      gradient: 'from-baby-pink to-lavender'
    },
    {
      emoji: '🐍',
      title: 'Python for AI & Research',
      description: 'Using Python as a core tool for logic building, data handling, and future AI-driven research.',
      skills: ['Python basics & problem-solving', 'Introductory data handling', 'AI-oriented coding mindset'],
      icon: Code,
      gradient: 'from-mint to-lavender'
    }
  ];

  return (
    <section id="focus" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">What drives me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Focus{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">Area</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of neuroscience, technology, and artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="project-card group p-8 bg-card-gradient border-0 shadow-soft hover:shadow-hover rounded-3xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{area.emoji}</span>
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${area.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>

                {area.skills && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground mb-3">Skills include:</p>
                    <div className="space-y-2">
                      {area.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.gradient}`} />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
