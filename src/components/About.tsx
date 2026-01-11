import { GraduationCap, Cpu, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-baby-pink/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-mint/10 rounded-full blur-3xl float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/40 mb-6">
            <Heart className="w-4 h-4 text-baby-pink fill-baby-pink" />
            <span className="text-sm font-semibold text-muted-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            About{' '}
            <span className="rainbow-text">
              Me
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Education & Background */}
          <Card className="p-8 bg-card-gradient border-0 shadow-cute rounded-3xl slide-up group hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-lavender to-lilac group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display">Education & Background</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently pursuing B.Tech in Computer Science Engineering as an undergraduate student, where I'm building a strong foundation in software development, algorithms, and system design.
              </p>
            </CardContent>
          </Card>

          {/* What I'm Working On */}
          <Card className="p-8 bg-card-gradient border-0 shadow-cute rounded-3xl slide-up group hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-mint to-soft-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display">What I'm Working On</h3>
              </div>
              <div className="bg-muted/40 rounded-2xl p-5 border border-border/30">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-foreground text-lg">ML for BCI Intent Detection</h4>
                </div>
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
