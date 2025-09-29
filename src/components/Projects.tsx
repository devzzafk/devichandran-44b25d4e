import { ExternalLink, Github, Heart, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import mindmatesImage from '@/assets/mindmates-app.jpg';

const Projects = () => {
  const features = [
    { icon: Heart, text: 'Mental health wellness tracking' },
    { icon: Users, text: 'Peer support community' },
    { icon: Shield, text: 'Safe, anonymous environment' },
  ];

  const futureProjects = [
    {
      title: 'Portfolio Website Templates',
      description: 'Collection of responsive, modern portfolio templates for developers',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      status: 'In Planning'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for exploring datasets with beautiful charts',
      tech: ['Python', 'Plotly', 'Pandas'],
      status: 'Coming Soon'
    },
    {
      title: 'UI Component Library',
      description: 'Reusable React components with modern design principles',
      tech: ['React', 'Storybook', 'CSS-in-JS'],
      status: 'In Development'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing projects that combine technical skills with meaningful impact
          </p>
        </div>

        {/* Featured Project - MindMates */}
        <div className="mb-16 slide-up">
          <Card className="project-card overflow-hidden bg-card-gradient border-0 shadow-soft hover:shadow-hover">
            <CardContent className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    Featured Project
                  </span>
                  <h3 className="text-3xl font-bold mb-4">MindMates</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A comprehensive student mental health wellness app developed as a solution for{' '}
                    <span className="font-semibold text-primary">SIH 2025</span>. 
                    As the app coder and developer, I created an intuitive platform that provides 
                    mental health support, resources, and community features specifically designed for students.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <feature.icon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['React Native', 'Node.js', 'MongoDB', 'UI/UX Design'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
          </Card>
        </div>

        {/* Future Projects */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Upcoming Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="project-card p-6 bg-card-gradient border-0 shadow-soft hover:shadow-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Coming Soon' 
                          ? 'bg-accent/20 text-accent-foreground' 
                          : project.status === 'In Development'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
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
                        className="px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground"
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