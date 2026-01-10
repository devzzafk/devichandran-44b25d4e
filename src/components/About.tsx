import { GraduationCap, Code2, Database, Palette, Wrench, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
      gradient: 'from-lavender to-soft-blue'
    },
    {
      title: 'Data Science Tools',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      gradient: 'from-mint to-lavender'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Jupyter Notebook'],
      gradient: 'from-peach to-baby-pink'
    },
    {
      title: 'Design & Creative',
      icon: Palette,
      skills: ['UI/UX Design', 'Creative Coding'],
      gradient: 'from-baby-pink to-lavender'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border border-border/50 mb-6">
            <Heart className="w-4 h-4 text-baby-pink" />
            <span className="text-sm font-medium text-muted-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Personal Bio */}
          <div className="space-y-6 slide-up">
            <Card className="p-8 bg-card-gradient border-0 shadow-soft rounded-3xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-lavender to-soft-blue">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education & Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing <span className="font-semibold text-primary">B.Tech in Computer Science Engineering</span> as an undergraduate student, where I'm building a strong foundation in software development, algorithms, and system design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in tech is driven by curiosity and a desire to solve real-world problems through code. I love exploring the intersection of technology and creativity, whether it's developing user-friendly applications, analyzing data for insights, or creating beautiful, functional websites.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card-gradient border-0 shadow-soft rounded-3xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-baby-pink to-lavender">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">What I'm Working On</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently developing innovative solutions for student mental health through the{' '}
                  <span className="font-semibold text-primary">MindMates app</span>, combining my technical skills with a passion for making a positive impact on the community. I'm also expanding my expertise in data science and exploring creative coding techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6 fade-in">
            <h3 className="text-3xl font-bold text-center lg:text-left mb-8">
              Skills & Expertise ✨
            </h3>
            <div className="grid gap-5">
              {skillCategories.map((category, index) => (
                <Card 
                  key={category.title}
                  className="skill-card group p-6 bg-card-gradient border-0 shadow-soft hover:shadow-hover cursor-default rounded-2xl"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
