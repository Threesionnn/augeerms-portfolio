import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Play, Music, Archive, User, Pause } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

import music1213AM from '@/assets/1213AM.mp3';
import musicUnderwater from '@/assets/Underwater.mp3';
import musicTheExit from '@/assets/Theexit.mp3';

import cover1213AM from '@/assets/1213AM.jpg';
import coverUnderwater from '@/assets/cover.jpg';
import coverTheExit from '@/assets/TheExit.jpg';

const Landing = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (trackId: number, audioSrc: string) => {
    if (currentlyPlaying === trackId) {
      audioRef.current?.pause();
      setCurrentlyPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.play();
        setCurrentlyPlaying(trackId);
      }
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    
    const handleEnded = () => setCurrentlyPlaying(null);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('ended', handleEnded);
    };
  }, []);

  const featuredTracks = [
    {
      id: 1,
      title: "12:13 A.M",
      subtitle: "DISTOPIA",
      description: "-",
      audioSrc: music1213AM,
      coverSrc: cover1213AM,
    },
    {
      id: 2,
      title: "UNDERWATER",
      subtitle: "WAR",
      description: "-",
      audioSrc: musicUnderwater,
      coverSrc: coverUnderwater,
    },
    {
      id: 3,
      title: "THE EXIT",
      subtitle: "FEELING EMPTY",
      description: "-",
      audioSrc: musicTheExit,
      coverSrc: coverTheExit,
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 
            className="text-6xl md:text-8xl font-orbitron font-black mb-6 text-glitch"
            data-text="AUGEERMS"
          >
            <span className="metallic-text">AUGEERMS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-rajdhani">
            DARK DEEP ANXIOUS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" asChild>
              <Link to="/archive">
                <Archive className="mr-2" />
                EXPLORE ARCHIVE
              </Link>
            </Button>
            <Button variant="glitch" size="lg" onClick={() => handlePlayPause(featuredTracks[0].id, featuredTracks[0].audioSrc)}>
              {currentlyPlaying === featuredTracks[0].id ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              {currentlyPlaying === featuredTracks[0].id ? 'PAUSE' : 'PLAY LATEST'}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
            <span className="metallic-text">RECENT TRANSMISSIONS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTracks.map((track) => (
              <Card 
                key={track.id} 
                className="p-6 cyber-border hover:neon-glow transition-cyber group cursor-pointer"
                onClick={() => handlePlayPause(track.id, track.audioSrc)}
              >
                <div className="aspect-square rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform">
                  <img src={track.coverSrc} alt={track.title} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {currentlyPlaying === track.id ? (
                      <Pause size={48} className="text-white" />
                    ) : (
                      <Play size={48} className="text-white" />
                    )}
                  </div>
                </div>
                <h3 className="font-orbitron font-bold text-lg mb-2">{track.title}</h3>
                <p className="text-primary text-sm mb-2">{track.subtitle}</p>
                <p className="text-muted-foreground text-sm">{track.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            <span className="text-glitch" data-text="DARK DEEP ANXIOUS">
              DARK DEEP ANXIOUS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            exploring the visions of human extinction and bleak tomorrows where machines hum their last dirges, and the remnants of civilization flicker in the static. 
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/bio">
              <User className="mr-2" />
              DISCOVER ARTIST
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;