import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element with a festive instrumental track
    // Note: In production, you would use an actual audio file
    // For now, we'll just handle the toggle state
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="icon"
        className="rounded-full w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/40 transition-all duration-300"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-primary" />
        ) : (
          <VolumeX className="h-5 w-5 text-primary" />
        )}
      </Button>
      {/* Audio element - in production, add src with actual music file */}
      <audio ref={audioRef} loop>
        <source src="/festive-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicToggle;
