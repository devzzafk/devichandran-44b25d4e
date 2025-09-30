import { BookOpen, Code, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Services = () => {
  const services = [{
    icon: Code,
    title: 'Coding Tutorials',
    description: 'Learn Python, JavaScript, and web development fundamentals with hands-on projects and real-world examples.',
    features: ['Beginner to Intermediate Level', 'Project-Based Learning', 'Code Reviews & Feedback'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    icon: Palette,
    title: 'UI/UX Design Guidance',
    description: 'Master the art of creating beautiful, user-friendly interfaces with modern design principles and tools.',
    features: ['Design Principles', 'Figma & Design Tools', 'User Experience Best Practices'],
    color: 'from-purple-500 to-pink-500'
  }, {
    icon: BookOpen,
    title: 'Web Development',
    description: 'Build responsive, modern websites from scratch using the latest technologies and frameworks.',
    features: ['HTML, CSS, JavaScript', 'React & Modern Frameworks', 'Responsive Design'],
    color: 'from-green-500 to-teal-500'
  }];
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tutorial{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of developers and designers through comprehensive, 
            hands-on learning experiences
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={service.title} className="skill-card group p-8 bg-card-gradient border-0 shadow-soft hover:shadow-hover" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-0 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-card-foreground">{feature}</span>
                    </div>)}
                </div>

                <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;