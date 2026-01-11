import { Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'BCI Signal → Intent Classification (Software)',
      description: 'A machine learning pipeline that processes neural-signal-like time-series data and classifies user intent (e.g., left vs right, yes vs no) using simulated or open datasets.',
      tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      status: 'In Progress',
      statusColor: 'from-lavender to-soft-blue',
      note: 'Software-focused, hardware-agnostic.'
    },
    {
      title: 'Neural Signal Visualization Dashboard',
      description: 'An interactive visualization tool to compare raw and filtered neural signals, helping understand noise, patterns, and signal quality in BCI systems.',
      tech: ['Python', 'Matplotlib / Plotly'],
      status: 'Experimental',
      statusColor: 'from-mint to-lavender'
    },
    {
      title: 'BCI Without Hardware (Simulation Project)',
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
      statusColor: 'from-lavender to-soft-blue'
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
      <div className="absolute top-20 left-0 w-80 h-80 bg-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl" />
      
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
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card p-6 bg-card-gradient border-0 shadow-soft hover:shadow-hover group rounded-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${project.statusColor} text-white`}>
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {project.note && (
                  <p className="text-xs text-muted-foreground/70 italic mb-4">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
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
    </section>
  );
};

export default Projects;
