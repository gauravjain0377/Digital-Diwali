import StarField from "@/components/StarField";
import Diyas from "@/components/Diyas";
import Fireworks from "@/components/Fireworks";
import MusicToggle from "@/components/MusicToggle";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Layer - Stars */}
      <StarField />

      {/* Fireworks Layer */}
      <Fireworks />

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Diwali Greeting */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary animate-glow-pulse">
              Happy Diwali
            </h1>
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse" />
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-light tracking-wide text-glow-gold">
            May your life be filled with light, joy, and prosperity
          </p>

          <div className="pt-8 space-y-2">
            <p className="text-base sm:text-lg md:text-xl text-secondary text-glow-orange font-medium">
              Wishing you a sparkling and pollution-free Diwali
            </p>
          </div>
        </div>

        {/* Creator Credit */}
        <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-40">
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-light tracking-wider text-glow-gold">
            Made with ✨ by <span className="font-semibold text-primary">Gaurav Jain</span>
          </p>
        </div>
      </div>

      {/* Diyas at Bottom */}
      <Diyas />

      {/* Music Toggle */}
      <MusicToggle />
    </main>
  );
};

export default Index;
