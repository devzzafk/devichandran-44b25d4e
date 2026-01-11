import { Bot, Globe, Smartphone, Zap, Palette, Sparkles, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AITutorials = () => {
  const tutorials = [
    {
      number: '01',
      title: 'AI for Web Development',
      subtitle: 'Learn how AI tools can help you design and build websites faster and smarter.',
      topics: [
        'Generating website layouts with AI (like Figma AI, ChatGPT + HTML/CSS)',
        'Using AI to write clean, responsive code',
        'Automating UI/UX design tasks with AI suggestions'
      ],
      icon: Globe,
      gradient: 'from-lavender to-lilac'
    },
    {
      number: '02',
      title: 'AI for App Development',
      subtitle: 'Use AI to accelerate your app-building process.',
      topics: [
        'AI-assisted code generation for mobile and web apps',
        'Prototyping app screens quickly',
        'Integrating AI APIs for features like chatbots or recommendations'
      ],
      icon: Smartphone,
      gradient: 'from-soft-blue to-mint'
    },
    {
      number: '03',
      title: 'AI for Automation & Productivity',
      subtitle: 'Boost efficiency in coding and project management using AI.',
      topics: [
        'Automating repetitive coding tasks',
        'AI-powered testing and debugging',
        'Using AI to optimize workflows in projects'
      ],
      icon: Zap,
      gradient: 'from-peach to-baby-pink'
    },
    {
      number: '04',
      title: 'AI for Creative Projects',
      subtitle: 'Bring creativity and tech together using AI.',
      topics: [
        'AI-generated graphics, icons, and UI elements',
        'AI-assisted content creation for websites and apps',
        'Creating interactive experiences faster'
      ],
      icon: Palette,
      gradient: 'from-baby-pink to-lavender'
    }
  ];

  return (
    <section id="tutorials" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-baby-pink/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-lavender/12 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-mint/10 rounded-full blur-3xl float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/40 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">Learn with me</span>
            <Heart className="w-4 h-4 text-baby-pink fill-baby-pink" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            AI-Powered{' '}
            <span className="rainbow-text">Tutorials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master modern development with the power of artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.title}
              className="project-card group p-8 bg-card-gradient border-0 shadow-card hover:shadow-cute rounded-3xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl font-bold text-primary/30 font-display">{tutorial.number}</span>
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${tutorial.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 shadow-sm`}>
                    <tutorial.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-muted-foreground mb-5">
                  {tutorial.subtitle}
                </p>

                <div className="bg-muted/40 rounded-2xl p-5 border border-border/30">
                  <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Topics Covered
                  </p>
                  <ul className="space-y-2">
                    {tutorial.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tutorial.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITutorials;
