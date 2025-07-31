import { useRef, useEffect } from 'react';
import music1213AM from '@/assets/1213AM.mp3';
import musicUnderwater from '@/assets/Underwater.mp3';
import musicTheExit from '@/assets/Theexit.mp3';
import musicKlainestatics from '@/assets/Klainestatics.mp3';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Upload, Search, Play, Pause, Download, Calendar } from 'lucide-react';

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
  return () => {
    audioRef.current?.pause();
  };
}, []);

  const tracks = [
    {
      id: 1,
      title: "12:13 A.M",
      artist: "Augeerms",
      album: "12:13 A.M",
      genre: "Future Garage",
      year: "2024",
      duration: "4:11",
      size: "10.3 MB",
      audioSrc: music1213AM
    },
    {
      id: 2,
      title: "Underwater",
      artist: "Augeerms",
      album: "Underwater",
      genre: "Dark Ambient Trap",
      year: "2024",
      duration: "3:13",
      size: "7.37 MB",
      audioSrc: musicUnderwater
    },
    {
      id: 3,
      title: "The Exit",
      artist: "Augeerms",
      album: "The Exit",
      genre: "Future Garage",
      year: "2024",
      duration: "2:36",
      size: "3.17 MB",
      audioSrc: musicTheExit
    },
    {
      id: 4,
      title: "Klainestatics",
      artist: "Augeerms",
      album: "Klainestatics",
      genre: "Dark Atmospheric Trap",
      year: "2025",
      duration: "3:33",
      size: "3.25 MB",
      audioSrc: musicKlainestatics
    }
  ];

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
          <span className="metallic-text">SOUND</span>{' '}
          <span className="text-primary">ARCHIVE</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Digital library
        </p>
      </div>

      {/* Upload Section */}
      <Card className="p-6 mb-8 cyber-border">
        <div className="text-center">
          <Upload size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-orbitron font-bold mb-2">Upload New Track</h3>
          <p className="text-muted-foreground mb-4">
            Add yours
          </p>
          <Button variant="cyber">
            <Upload className="mr-2" size={16} />
            SELECT FILES
          </Button>
        </div>
      </Card>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tracks, albums, genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 cyber-border"
          />
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
            Synthwave
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
            Dark Ambient
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
            Cyberpunk
          </Badge>
        </div>
      </div>

      {/* Track List */}
      <div className="space-y-4">
        {filteredTracks.map((track) => (
          <Card key={track.id} className="p-4 cyber-border hover:neon-glow transition-cyber group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Play size={20} className="text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-orbitron font-bold text-lg truncate">{track.title}</h3>
                  <p className="text-muted-foreground text-sm">{track.album}</p>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
                  <Badge variant="secondary">{track.genre}</Badge>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {track.year}
                  </span>
                  <span>{track.duration}</span>
                  <span>{track.size}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => handlePlayPause(track.id, track.audioSrc)}>
                  {currentlyPlaying === track.id ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button variant="ghost" size="sm">
                  <Download size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Tracks", value: "4" },
          { label: "Total Size", value: "25 MB" },
          { label: "Genres", value: "3" },
          { label: "Hours", value: "0,2" }
        ].map((stat, index) => (
          <Card key={index} className="p-4 text-center cyber-border">
            <div className="text-2xl font-orbitron font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Archive;