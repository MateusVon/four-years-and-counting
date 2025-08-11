import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, MapPin, Star, Bomb } from 'lucide-react';

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

const timelineEvents = [
  {
    date: '2015',
    title: 'Mesma turma, mesma escola, mesma cidade',
    description:
      'Me mudei para Ouro Branco e começamos a estudar na mesma turma.',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo1,
    objectPosition: '[70%_30%]',
  },
  {
    date: '2019',
    title: 'Viramos amigos',
    description:
      'Começamos a conversar mais, não eramos melhores amigos, mas eramos próximos.',
    icon: Calendar,
    color: 'text-accent',
    imageUrl: photo7,
  },
  {
    date: '2020',
    title: 'Começamos a conversar mais',
    description:
      'Nos aproximamos mais do que antes, mas por conta do Covid, paramos de conversar. (Essa é a unica foto de 2020 na minha galeria.)',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo16,
  },
  {
    date: '11 de Agosto, 2021',
    title: 'Começo do namoro',
    description:
      'Voltamos a conversar, e em agosto te pedi em namoro. Um pouco precipitado talvez, mas não me arrependo nem um pouco, afinal, você é o amor da minha vida!',
    icon: Star,
    color: 'text-accent',
    imageUrl: photo2,
    objectPosition: '[100%_100%]',
  },
  {
    date: '11 de Agosto, 2022',
    title: 'Primeiro aniversário ',
    description:
      'Celebramos nosso primeiro aniversário, juntos, aqui em casa. :)',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo4,
  },
  {
    date: 'Janeiro, 2023',
    title: 'Nossa primeira viagem',
    description:
      'Primeira vez que viajamos juntos, não passei as festas de fim de ano com você, mas cheguei de surpresa na casa em Guarapari.',
    icon: MapPin,
    color: 'text-accent',
    imageUrl: photo6,
  },
  {
    date: '2023',
    title: 'Relacionamento a distância',
    description:
      'Fui pra Viçosa, e isso testou a gente de uma forma. Não foi nossa melhor época, mas superamos e aprendemos lições importantes!',
    icon: Heart,
    color: 'text-primary',
  },
  {
    date: '19 de Novembro de 2023',
    title: 'Show da Taylor',
    description:
      'Não poderia deixar de lado esse show, o primeiro e unico show que já fomos juntos, pra melhorar foi da sua cantora favorita e de uma das cantoras que eu mais gosto também. Esse foi uma das experiências mais magníficas que eu tive ao seu lado',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo24,
  },
  {
    date: 'Dec 2023 - Jan 2024',
    title: 'Final de ano em Criciuma',
    description:
      'Nosso primeiro Natal e ano novo juntos, que venham muitos outros pela frente :).',
    icon: Bomb,
    color: 'text-accent',
    imageUrl: photo14,
  },
  {
    date: '2024',
    title: 'Back Together',
    description:
      'Por conta da greve, pude voltar pra Ouro Branco, e acabei decidindo trancar a faculdade. Isso nos fez ficar mais próximos.',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo13,
  },
  {
    date: 'Outubro de 2024',
    title: 'Viagem para a Disney',
    description:
      'Uma das viagens que eu nunca imaginei que eu iria fazer, ir com você pra disney foi simplesmente a coisa mais magica que me aconteceu até hoje, não tenho palavras para descrever o quanto eu amei essa viagem',
    icon: MapPin,
    color: 'text-accent',
    imageUrl: photo18,
  },
  {
    date: 'Dec 2024 - Jan 2025',
    title: 'Festas de fim de ano',
    description:
      'Passamos o natal e o ano novo com sua familia, eu adorei cada segundo desse final de ano.',
    icon: Star,
    color: 'text-accent',
    imageUrl: photo19,
  },
  {
    date: 'Janeiro de 2025',
    title: 'Viagem para Paraty',
    description:
      'Uma viagem pra praia com a minha familia, foi curta mas eu adorei ter sua companhia nessa viagem comigo',
    icon: MapPin,
    color: 'text-accent',
    imageUrl: photo9,
  },
  {
    date: 'Agosto de 2025',
    title: 'Nosso amor aumenta e supera todas as coisas',
    description:
      "Hoje, estamos juntos, com coisas para serem melhoradas, mas estamos seguindo nosso caminho, no nosso tempo. Não estamos atrasados, não estamos adiantados, we're just in time my lov :). Essa é a foto mais recente que tenho com você, e eu gosto muito dela pq ver vc e suas irmãs felizes juntas, me deixa muito feliz. Nossa história está longe de acabar. ",
    icon: Heart,
    color: 'text-accent',
    imageUrl: photo21,
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa linha do tempo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Toda história de amor é linda, mas a nossa é a minha favorita. Aqui
            vão alguns dos meus momentos favoritos ao seu lado durante nossa
            jornada, que ainda está longe de acabar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-romantic h-full rounded-full"></div>

            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <Card className="bg-card shadow-soft hover:shadow-romantic transition-all duration-500 border-border/50">
                      <CardContent className="p-6">
                        {event.imageUrl && (
                          <div className="relative aspect-video overflow-hidden mb-4 rounded-lg">
                            {event.imageUrl && (
                              <div className="relative aspect-video overflow-hidden mb-4 rounded-lg">
                                <img
                                  src={event.imageUrl}
                                  alt={event.title}
                                  className={`w-full h-full object-cover ${
                                    event.objectPosition
                                      ? `object-${event.objectPosition}`
                                      : 'object-[50%_50%]'
                                  } transition-transform duration-500 group-hover:scale-110`}
                                />
                              </div>
                            )}
                          </div>
                        )}
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isEven ? '' : 'flex-row-reverse'
                          }`}
                        >
                          <div
                            className={`p-2 rounded-full bg-gradient-rose ${event.color}`}
                          >
                            <IconComponent size={20} />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {event.date}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-semibold text-foreground mb-2 ${
                            isEven ? '' : 'text-right'
                          }`}
                        >
                          {event.title}
                        </h3>
                        <p
                          className={`text-muted-foreground leading-relaxed ${
                            isEven ? '' : 'text-right'
                          }`}
                        >
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
