import { Rocket, Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'BCI Signal → Intent Classification',
      description: 'A machine learning pipeline that processes neural-signal-like time-series data and classifies user intent using simulated or open datasets.',
      tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      status: 'In Progress',
      statusColor: 'from-lavender to-lilac',
      note: 'Software-focused, hardware-agnostic.'
    },
    {
      title: 'Neural Signal Visualization Dashboard',
      description: 'An interactive visualization tool to compare raw and filtered neural signals, helping understand noise, patterns, and signal quality.',
      tech: ['Python', 'Matplotlib / Plotly'],
      status: 'Experimental',
      statusColor: 'from-mint to-soft-blue'
    },
    {
      title: 'BCI Without Hardware',
      description: 'A simulation-based BCI system that maps synthetic neural signals to software actions such as cursor movement or UI selection.',
      tech: ['Python'],
      status: 'Concept',
      statusColor: 'from-peach to-baby-pink'
    },
    {
      title: 'AI-Assisted Portfolio Builder',
      description: 'A web tool that uses AI to suggest layouts, sections, and starter code for clean, responsive portfolio websites.',
      tech: ['HTML', 'CSS', 'JavaScript', 'AI tools'],
      status: 'In Progress',
      statusColor: 'from-baby-pink to-lavender'
    },
    {
      title: 'Neuralink Software Stack Analysis',
      description: 'A technical analysis of Neuralink from a software engineering perspective, focusing on data pipelines, real-time constraints, scalability, and safety.',
      tech: ['Research', 'Technical write-up'],
      status: 'Research',
      statusColor: 'from-soft-blue to-mint'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-lavender/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-baby-pink/12 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-mint/10 rounded-full blur-3xl float-delayed" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/40 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">My creations</span>
            <Star className="w-4 h-4 text-peach fill-peach" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            Featured{' '}
            <span className="rainbow-text">
              Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card p-6 bg-card-gradient border-0 shadow-card hover:shadow-cute group rounded-3xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${project.statusColor} text-white shadow-sm`}>
                    <Sparkles className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {project.note && (
                  <p className="text-xs text-muted-foreground/70 italic mb-4 bg-muted/40 px-3 py-2 rounded-xl">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-muted/60 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
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
    </section>
  );
};

export default Projects;
