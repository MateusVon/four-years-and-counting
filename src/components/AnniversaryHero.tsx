import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import backgroundImage from '@/assets/disney-background.jpg';

interface HeroProps {
  onScrollToStory: () => void;
  onScrollToMemories: () => void;
}
export const Hero = ({ onScrollToStory, onScrollToMemories }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-romantic opacity-60"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart
          className="absolute top-1/4 left-1/4 text-primary opacity-20 animate-float"
          size={24}
        />
        <Heart
          className="absolute top-1/3 right-1/4 text-accent opacity-30 animate-pulse-romantic"
          size={18}
        />
        <Heart
          className="absolute bottom-1/3 left-1/3 text-primary opacity-25 animate-float"
          size={20}
        />
        <Heart
          className="absolute top-2/3 right-1/3 text-accent opacity-20 animate-pulse-romantic"
          size={16}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Quatro anos
            <br />
            <span className="bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
              de Puro Amor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Celebrando uma linda jornada que estamos compartilhando juntos,
            cheia de rizadas, amor e infinitas memórias preciosas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={onScrollToStory}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-500 shadow-romantic px-8 py-6 text-lg font-medium"
          >
            <Heart className="mr-2" size={20} />
            Nossa história
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onScrollToMemories}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-500 px-8 py-6 text-lg font-medium"
          >
            Ver memórias
          </Button>
        </div>

        {/* Anniversary Date */}
        <div className="mt-16 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 inline-block">
          <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
            Nosso dia 🩷
          </p>
          <p className="text-white text-2xl font-semibold">
            {/* You can customize this date */}
            11 de agosto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
