import { GraduationCap, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Education & Background */}
          <Card className="p-8 bg-card-gradient border-0 shadow-soft rounded-3xl slide-up">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-lavender to-soft-blue">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Education & Background</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering as an undergraduate student, where I'm building a strong foundation in software development, algorithms, and system design.
              </p>
            </CardContent>
          </Card>

          {/* What I'm Working On */}
          <Card className="p-8 bg-card-gradient border-0 shadow-soft rounded-3xl slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-mint to-lavender">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">What I'm Working On</h3>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">ML for BCI Intent Detection</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Designing ML pipelines to classify neural signal patterns into software actions using simulated datasets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
