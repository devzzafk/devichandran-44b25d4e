import { useState } from 'react';
import { Mail, Linkedin, Instagram, Youtube, Send, MessageCircle, MapPin } from 'lucide-react';
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
  const { toast } = useToast();

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/devichandrans',
      color: 'from-blue-600 to-blue-700',
      username: '@devichandrans'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/euon.ialab',
      color: 'from-pink-500 to-purple-600',
      username: '@euon.ialab'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@EuoniaLab',
      color: 'from-red-500 to-red-600',
      username: '@EuoniaLab'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:euonialab@gmail.com',
      color: 'from-green-500 to-teal-600',
      username: 'euonialab@gmail.com'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_jjivnoc', // Your service ID
        'template_bqis2qo', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
        },
        'orXrVywM4hgvU3rbU' // Your public key
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-skill-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect! Whether you're interested in collaborating, learning, or just want to chat about tech and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="slide-up">
            <Card className="p-8 bg-card-gradient border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="bg-background border-border focus:border-primary"
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
                        className="bg-background border-border focus:border-primary"
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
                      className="bg-background border-border focus:border-primary"
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
                      placeholder="Tell me about your project, questions, or just say hello!"
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 fade-in">
            
            {/* Contact Info */}
            <Card className="p-8 bg-card-gradient border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to connect with fellow developers, students, and anyone passionate about technology. 
                  Feel free to reach out for collaborations, mentorship, or just a friendly chat!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span>euonialab@gmail.com</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    <span>Available for remote collaborations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
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
                    <Card className="skill-card p-4 bg-card-gradient border-0 shadow-soft hover:shadow-hover transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
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