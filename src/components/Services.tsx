import { BookOpen, Code, Palette, Video, Users, MessageCircle } from 'lucide-react';
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
  const tutorialHighlights = [{
    icon: Video,
    title: 'Interactive Video Content',
    description: 'Step-by-step video tutorials with downloadable resources'
  }, {
    icon: Users,
    title: 'Community Learning',
    description: 'Join a supportive community of learners and get help when needed'
  }, {
    icon: MessageCircle,
    title: 'Personalized Support',
    description: 'One-on-one guidance and mentorship for your learning journey'
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

        {/* Tutorial Highlights */}
        <div className="slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose My Tutorials?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tutorialHighlights.map((highlight, index) => <div key={highlight.title} className="text-center fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="inline-flex p-6 rounded-full bg-skill-gradient mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{highlight.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>)}
          </div>

          <div className="text-center">
            <Card className="inline-block p-8 bg-card-gradient border-0 shadow-soft">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold mb-4">Ready to Start Learning?</h4>
                <p className="text-muted-foreground mb-6 max-w-md">Join students who have enhanced their coding and design skills through my comprehensive tutorial programs.</p>
                <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold">
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;