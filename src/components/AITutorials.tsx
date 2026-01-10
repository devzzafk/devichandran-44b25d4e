import { Bot, Globe, Smartphone, Zap, Palette, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AITutorials = () => {
  const tutorials = [
    {
      number: '1️⃣',
      title: 'AI for Web Development',
      subtitle: 'Learn how AI tools can help you design and build websites faster and smarter.',
      topics: [
        'Generating website layouts with AI (like Figma AI, ChatGPT + HTML/CSS)',
        'Using AI to write clean, responsive code',
        'Automating UI/UX design tasks with AI suggestions'
      ],
      icon: Globe,
      gradient: 'from-lavender to-soft-blue'
    },
    {
      number: '2️⃣',
      title: 'AI for App Development',
      subtitle: 'Use AI to accelerate your app-building process.',
      topics: [
        'AI-assisted code generation for mobile and web apps',
        'Prototyping app screens quickly',
        'Integrating AI APIs for features like chatbots or recommendations'
      ],
      icon: Smartphone,
      gradient: 'from-baby-pink to-lavender'
    },
    {
      number: '3️⃣',
      title: 'AI for Automation & Productivity',
      subtitle: 'Boost efficiency in coding and project management using AI.',
      topics: [
        'Automating repetitive coding tasks',
        'AI-powered testing and debugging',
        'Using AI to optimize workflows in projects'
      ],
      icon: Zap,
      gradient: 'from-mint to-lavender'
    },
    {
      number: '4️⃣',
      title: 'AI for Creative Projects',
      subtitle: 'Bring creativity and tech together using AI.',
      topics: [
        'AI-generated graphics, icons, and UI elements',
        'AI-assisted content creation for websites and apps',
        'Creating interactive experiences faster'
      ],
      icon: Palette,
      gradient: 'from-peach to-baby-pink'
    }
  ];

  return (
    <section id="tutorials" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-baby-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Learn with AI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-4xl mr-2">🤖</span>
            AI-Powered{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">Tutorials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master modern development with the power of artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.title}
              className="project-card group p-8 bg-card-gradient border-0 shadow-soft hover:shadow-hover rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl">{tutorial.number}</span>
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${tutorial.gradient} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <tutorial.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-muted-foreground mb-5">
                  {tutorial.subtitle}
                </p>

                <div className="bg-muted/30 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Topics Covered:
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
