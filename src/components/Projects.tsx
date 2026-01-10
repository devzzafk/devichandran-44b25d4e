import { ExternalLink, Github, Heart, Users, Shield, Sparkles, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import mindmatesImage from '@/assets/mindmates-app.jpg';

const Projects = () => {
  const features = [
    { icon: Heart, text: 'Mental health wellness tracking', color: 'text-baby-pink' },
    { icon: Users, text: 'Peer support community', color: 'text-lavender' },
    { icon: Shield, text: 'Safe, anonymous environment', color: 'text-mint' },
  ];

  const futureProjects = [
    {
      title: 'Portfolio Website Templates',
      description: 'Collection of responsive, modern portfolio templates for developers',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      status: 'In Planning',
      gradient: 'from-lavender to-soft-blue'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for exploring datasets with beautiful charts',
      tech: ['Python', 'Plotly', 'Pandas'],
      status: 'Coming Soon',
      gradient: 'from-mint to-lavender'
    },
    {
      title: 'UI Component Library',
      description: 'Reusable React components with modern design principles',
      tech: ['React', 'Storybook', 'CSS-in-JS'],
      status: 'In Development',
      gradient: 'from-baby-pink to-peach'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-baby-pink/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">My work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing projects that combine technical skills with meaningful impact
          </p>
        </div>

        {/* Featured Project - MindMates */}
        <div className="mb-16 slide-up">
          <Card className="project-card overflow-hidden bg-card-gradient border-0 shadow-soft hover:shadow-hover rounded-3xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">MindMates</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A comprehensive student mental health wellness app developed as a solution for{' '}
                    <span className="font-semibold text-primary">SIH 2025</span>. 
                    As the app coder and developer, I created an intuitive platform that provides 
                    mental health support, resources, and community features specifically designed for students.
                  </p>

                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <feature.icon className={`w-4 h-4 ${feature.color}`} />
                        </div>
                        <span className="text-card-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {['React Native', 'Node.js', 'MongoDB', 'UI/UX Design'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-glow bg-skill-gradient hover:opacity-90 text-primary-foreground rounded-xl px-6">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" className="border-primary/30 hover:bg-primary/10 rounded-xl px-6">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-gradient rounded-3xl blur-2xl opacity-30" />
                    <img 
                      src={mindmatesImage} 
                      alt="MindMates App Preview"
                      className="relative rounded-3xl shadow-soft w-full h-auto object-cover border border-border/50"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Projects */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Upcoming Projects ✨
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="project-card p-6 bg-card-gradient border-0 shadow-soft hover:shadow-hover group rounded-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-muted/50 rounded-lg text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
