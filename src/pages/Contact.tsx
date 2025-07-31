import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send, Globe, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
          <span className="metallic-text">ESTABLISH</span>{' '}
          <span className="text-primary">CONNECTION</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Initialize secure communication channel
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="p-8 cyber-border">
          <div className="flex items-center mb-6">
            <MessageSquare size={24} className="text-primary mr-3" />
            <h2 className="text-2xl font-orbitron font-bold">Send Transmission</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-rajdhani font-medium">
                  Identity
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your designation"
                  value={formData.name}
                  onChange={handleChange}
                  className="cyber-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-rajdhani font-medium">
                  Neural Link
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="neural.address@matrix.net"
                  value={formData.email}
                  onChange={handleChange}
                  className="cyber-border"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm font-rajdhani font-medium">
                Transmission Header
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject protocol"
                value={formData.subject}
                onChange={handleChange}
                className="cyber-border"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-rajdhani font-medium">
                Data Package
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Encode your message in the digital realm..."
                value={formData.message}
                onChange={handleChange}
                className="cyber-border min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" variant="cyber" size="lg" className="w-full">
              <Send className="mr-2" size={16} />
              TRANSMIT MESSAGE
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <Card className="p-6 cyber-border">
            <div className="flex items-center mb-4">
              <Mail size={24} className="text-primary mr-3" />
              <h3 className="text-xl font-orbitron font-bold">Direct Channels</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full neon-glow" />
                <span className="text-muted-foreground">augeerms@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full neon-glow" />
                <span className="text-muted-foreground">YouTube: Augeerms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full neon-glow" />
                <span className="text-muted-foreground">Metaverse coordinates: Cimahi.256</span>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 cyber-border">
            <h3 className="text-xl font-orbitron font-bold mb-4">Network Presence</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Globe, label: "Web", url: "#" },
                { icon: Github, label: "GitHub", url: "https://github.com/Threesionnn" },
                { icon: Twitter, label: "Twitter", url: "#" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="glitch"
                  size="lg"
                  className="flex-col h-20 space-y-2"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon size={20} />
                    <span className="text-xs">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* Collaboration */}
          <Card className="p-6 cyber-border bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-xl font-orbitron font-bold mb-4">
              <span className="text-glitch" data-text="COLLABORATION">
                COLLABORATION
              </span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Open to dark music collaborations, remixes, and digital art projects. 
              Let's create the soundtrack for tomorrow.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Music Production", "Sound Design", "AI Collaboration", "Live Performances"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Response Time */}
          <Card className="p-6 cyber-border">
            <h3 className="text-xl font-orbitron font-bold mb-4">Response</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">General Inquiries</span>
                <span className="text-primary font-mono">24-48 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Collaboration Requests</span>
                <span className="text-primary font-mono">1-3 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Technical Support</span>
                <span className="text-primary font-mono">12-24 hours</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;