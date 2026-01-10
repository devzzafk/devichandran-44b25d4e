import { BookOpen, Code, Palette, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Coding Tutorials',
      description: 'Learn programming fundamentals and advanced concepts through easy-to-follow tutorials.',
      features: ['Python Basics to Advanced', 'Data Structures & Algorithms', 'Project-Based Learning'],
      gradient: 'from-lavender to-soft-blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly interfaces with modern design principles and tools.',
      features: ['Design Fundamentals', 'Figma & Prototyping', 'User Research Basics'],
      gradient: 'from-baby-pink to-lavender'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build responsive, modern websites from scratch using the latest technologies and frameworks.',
      features: ['HTML, CSS, JavaScript', 'React & Modern Frameworks', 'Responsive Design'],
      gradient: 'from-mint to-lavender'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-peach/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">What I offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tutorials &{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge through comprehensive tutorials in coding, design, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="project-card group p-8 bg-card-gradient border-0 shadow-soft hover:shadow-hover rounded-3xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button onClick={scrollToContact} variant="outline" className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary rounded-xl font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
