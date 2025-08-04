import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Music, Zap, Users, Award } from 'lucide-react';
import artistPhoto from '@/assets/augeerms.jpg';

const Bio = () => {
  const timeline = [
    {
      year: "2024",
      title: "The Absurdist",
      description: "Crafting an identity through a piece that reflects who I am"
    },
    {
      year: "2023",
      title: "Finding Who Am I",
      description: "Making experiments from various genres"
    },
    {
      year: "2022",
      title: "The Beginning",
      description: "Following the latest genres and seeking serenity within future bass music"
    },
    {
      year: "2021",
      title: "Still Sucks",
      description: "Finding a great artistic blend that makes dubstep and house simultaneously"
    }
  ];

  const stats = [
    { icon: Music, label: "Single Released", value: "10" },
    { icon: Users, label: "Global Listeners", value: "1,2k" },
    { icon: Award, label: "Digital Awards", value: "0" },
    { icon: Zap, label: "Years Active", value: "4" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <img 
          src={artistPhoto} 
          alt="Augeerms" 
          className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-2 border-primary neon-glow"
        />
        
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
          <span className="text-glitch" data-text="AUGEERMS">
            AUGEERMS
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          exploring the visions of human extinction 
          and bleak tomorrows where machines hum their last dirges 
          and the remnants of civilization flicker in the static.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Producer", "Sound Designer", "AI Enthusiast", "Absurdism"].map((tag) => (
            <Badge key={tag} variant="outline" className="cyber-border">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-6 text-muted-foreground">
          <span className="flex items-center">
            <MapPin size={16} className="mr-2" />
            Cimahi, 2025
          </span>
          <span className="flex items-center">
            <Calendar size={16} className="mr-2" />
            Active since 2021
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 text-center cyber-border hover:neon-glow transition-cyber">
            <stat.icon size={32} className="mx-auto mb-3 text-primary" />
            <div className="text-2xl font-orbitron font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6">
            <span className="metallic-text"> POST-EARTH PSALM</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Born from existential dissonance and digital decay
              The Neural channels the chaos of modern humanity into immersive sonic artifacts 
              Blending atmospheric dub, future garage, sci-fi horror, and post-industrial noise
              each composition stands as a critique of progress and a requiem for civilization
            </p>
            <p>
              No choruses. No comfort.
              Just sound detuned, distorted, and disillusioned. 
            </p>
            <p>
              Crafted with emotional precision and experimental textures, these tracks are not for escape, but confrontation
              They are echoes from collapsing empires and forgotten stars
            </p>
            <p>
              This is not music for the future.
              This is music for what's left after.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-orbitron font-bold mb-6">
            <span className="metallic-text">NEURAL PROCESS</span>
          </h2>
          <div className="space-y-4">
            {[
              "AI-assisted composition using neural networks",
              "Quantum randomization for unique sound generation",
              "Biometric feedback integration for emotional resonance",
              "Virtual reality sound design and spatial audio",
              "Blockchain-verified authenticity for each release"
            ].map((process, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full neon-glow" />
                <span className="text-muted-foreground">{process}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
          <span className="metallic-text">DIGITAL TIMELINE</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary to-accent" />
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="p-6 cyber-border hover:neon-glow transition-cyber">
                    <div className="font-orbitron font-bold text-primary text-lg mb-2">
                      {event.year}
                    </div>
                    <h3 className="font-orbitron font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </Card>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-primary rounded-full neon-glow" />
                
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Card className="p-8 cyber-border bg-gradient-to-r from-primary/5 to-accent/5">
          <h2 className="text-2xl font-orbitron font-bold mb-4">
            Listen Here
          </h2>
          <p className="text-muted-foreground mb-6">
            Experience the full catalog
          </p>
          <Button variant="cyber" size="lg" asChild>
            <Link to="/archive">
              <Music className="mr-2" />
              EXPLORE ARCHIVE
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Bio;