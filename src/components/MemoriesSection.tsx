import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Quote } from 'lucide-react';
import PhotoUpload from './PhotoUpload';

import photo1 from '@/assets/photo1.jpg';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import photo4 from '@/assets/photo4.jpg';
import photo5 from '@/assets/photo5.jpg';
import photo6 from '@/assets/photo6.jpg';
import photo7 from '@/assets/photo7.jpg';
import photo8 from '@/assets/photo8.jpg';
import photo9 from '@/assets/photo9.jpg';
import photo10 from '@/assets/photo10.jpg';
import photo11 from '@/assets/photo11.jpg';
import photo12 from '@/assets/photo12.jpg';
import photo13 from '@/assets/photo13.jpg';
import photo14 from '@/assets/photo14.jpg';
import photo15 from '@/assets/photo15.jpg';
import photo16 from '@/assets/photo16.jpg';
import photo17 from '@/assets/photo17.jpg';
import photo18 from '@/assets/photo18.jpg';
import photo19 from '@/assets/photo19.jpg';
import photo20 from '@/assets/photo20.jpg';
import photo21 from '@/assets/photo21.jpg';
import photo22 from '@/assets/photo22.jpg';
import photo23 from '@/assets/photo23.jpg';
import photo24 from '@/assets/photo24.jpg';
import photo25 from '@/assets/photo25.jpg';
import photo26 from '@/assets/photo26.jpg';

const memories = [
  {
    title: 'Nossa Formatura',
    description:
      'Nossa formatura no ensino médio, será que já podemos nos chamar de Highschool sweethearts?',
    category: 'Graduation',
    imageUrl: photo5,
  },
  {
    title: 'O pedido',
    description: 'O dia em que minha vida começou a mudar, pra melhor',
    category: 'Moments',
    imageUrl: photo22,
  },
  {
    title: 'Idas a BH',
    description: 'A primeira, de muitas vezes que fui pra BH com sua familia.',
    category: 'Travel',
    imageUrl: photo23,
  },
  {
    title: 'Espetáculos',
    description:
      'Todos os espetáculos e competições que eu fui te assistir, toda vez que você pisa no palco eu abro um sorriso enorme',
    category: 'Performances',
    imageUrl: photo3,
    objectPosition: '[30%_30%]',
  },
  {
    title: 'Jogos',
    description:
      'Todos os meus treinos, amistosos e jogos que você foi assistir. A sua presença definitivamente me fez jogar melhor em cada um deles ',
    category: 'Games',
    imageUrl: photo10,
    objectPosition: '[100%_100%]',
  },
  {
    title: 'Aniversários',
    description:
      'Seja nos seus, nos meus, nos dos nossos parentes, em cada aniversário que iamos, a presença era sempre muito bem vinda, e fazia falta quando não podia ir',
    category: 'Birthdays',
    imageUrl: photo12,
    objectPosition: '[100%_100%]',
  },
  {
    title: 'Família',
    description:
      'Todos os momentos em família que passamos juntos, seja com a minha ou a sua, todos foram maravilhosos para mim, principalmente por estar ao seu lado',
    category: 'Family',
    imageUrl: photo25,
    objectPosition: '[100%_100%]',
  },
  {
    title: 'Família',
    description:
      'Esse jantar em especial, pra mim foi uma das melhores noites que eu já tive',
    category: 'Family',
    imageUrl: photo26,
    objectPosition: '[100%_100%]',
  },
];

const loveQuotes = [
  'No seu abraço eu encontrei o meu lar',
  'Cada musica de amor que existe no mundo faz sentido com você ao meu lado',
  'Você é meu ontem, meu hoje e todos os meus amanhãs',
  'Eu sempre te amei, e sempre vou te amar',
];

const MemoriesSection = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<
    Array<{
      id: string;
      url: string;
      title: string;
      description: string;
    }>
  >([]);

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
            Uma coleção de momentos que fizeram nossos corações acelerarem e
            nossa conexão se aprofundar ainda mais
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
                  className={`w-full h-full object-cover ${
                    memory.objectPosition
                      ? `object-${memory.objectPosition}`
                      : 'object-[50%_50%]'
                  } transition-transform duration-500 group-hover:scale-110`}
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
          <Button
            onClick={() => setShowUpload(!showUpload)}
            className="bg-gradient-romantic text-primary-foreground hover:shadow-glow transition-all duration-500 px-8 py-6 text-lg font-medium"
          >
            <Heart className="mr-2" size={20} />
            {showUpload ? 'Ocultar Upload' : 'Adicione mais fotos aqui 😁'}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {showUpload
              ? 'Faça upload das suas fotos especiais'
              : 'Clique para adicionar suas próprias memórias'}
          </p>
        </div>
        {showUpload && (
          <div className="mt-12 animate-fade-in">
            <PhotoUpload
              photos={uploadedPhotos}
              onPhotosChange={setUploadedPhotos}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoriesSection;
