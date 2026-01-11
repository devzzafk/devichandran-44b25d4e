import { useState } from 'react';
import { Mail, Linkedin, Instagram, Youtube, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/devichandrans',
      gradient: 'from-[#0077B5] to-[#0066A2]',
      username: '@devichandrans'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/euon.ialab',
      gradient: 'from-[#E4405F] to-[#C13584]',
      username: '@euon.ialab'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@from.haneul',
      gradient: 'from-[#FF0000] to-[#CC0000]',
      username: '@from.haneul'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:euonialab@gmail.com',
      gradient: 'from-mint to-lavender',
      username: 'euonialab@gmail.com'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_jjivnoc',
        'template_bqis2qo',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
        },
        'orXrVywM4hgvU3rbU'
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-soft-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a question? I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="slide-up">
            <Card className="p-8 bg-card-gradient border-0 shadow-soft rounded-3xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-lavender to-soft-blue">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none rounded-xl"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glow bg-skill-gradient hover:opacity-90 text-primary-foreground py-6 rounded-xl font-semibold text-base"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="skill-card p-4 bg-card-gradient border-0 shadow-soft hover:shadow-hover transition-all duration-300 rounded-2xl">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${social.gradient} group-hover:scale-110 transition-transform duration-300`}>
                            <social.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                              {social.label}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {social.username}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
