import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Quote } from 'lucide-react';

import photo1 from '@/assets/photo1.jpg';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import photo4 from '@/assets/photo4.jpg';
import photo5 from '@/assets/photo5.jpg';

const memories = [
  {
    title: 'Our First Adventure',
    description: 'Every picture tells a story, but this one tells our story.',
    category: 'Travel',
    imageUrl: photo1,
  },
  {
    title: 'Cozy Moments',
    description: 'The quiet moments together are the ones I treasure most.',
    category: 'Casa',
  },
  {
    title: 'Special Celebrations',
    description: "Celebrating all of life's beautiful moments together.",
    category: 'Celebrations',
  },
  {
    title: 'Weekend Getaways',
    description: 'Creating memories one adventure at a time.',
    category: 'Adventures',
  },
];

const loveQuotes = [
  'In your eyes, I found my home.',
  'Every love song makes sense with you.',
  'You are my today and all of my tomorrows.',
  'With you, I am exactly where I belong.',
];

const MemoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Love Quotes */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Palavras que vem do coração
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {loveQuotes.map((quote, index) => (
              <Card
                key={index}
                className="bg-gradient-rose border-border/50 shadow-soft hover:shadow-romantic transition-all duration-500"
              >
                <CardContent className="p-8 text-center">
                  <Quote className="text-primary mx-auto mb-4" size={32} />
                  <p className="text-lg font-medium text-foreground leading-relaxed italic">
                    "{quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Memories Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas memórias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção de momentos que fizeram nossos corações errarem uma
            batida e nossa conexão se aprofundar ainda mais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <Card
              key={index}
              className="bg-card shadow-soft hover:shadow-romantic transition-all duration-500 border-border/50 overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={memory.imageUrl}
                  alt={memory.title}
                  className="w-full h-full object-cover object-[100%_30%] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {memory.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {memory.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-romantic text-primary-foreground hover:shadow-glow transition-all duration-500 px-8 py-6 text-lg font-medium">
            <Heart className="mr-2" size={20} />
            Add Your Photos Here
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Replace these placeholders with your actual photos and memories
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
