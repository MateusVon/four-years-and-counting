import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, MapPin, Star } from 'lucide-react';

import photo1 from '@/assets/photo1.jpg';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import photo4 from '@/assets/photo4.jpg';
import photo5 from '@/assets/photo5.jpg';
import photo6 from '@/assets/photo6.jpg';
import photo7 from '@/assets/photo7.jpg';

const timelineEvents = [
  {
    date: '2015',
    title: 'Mesma turma, mesma escola, mesma cidade',
    description:
      'Me mudei para Ouro Branco e começamos a estudar na mesma turma.',
    icon: Heart,
    color: 'text-primary',
    imageUrl: photo1,
    objectPosition: '[50%_30%]',
  },
  {
    date: '2019',
    title: 'Viramos "amigos"',
    description:
      'Começamos a conversar mais, não eramos melhores amigos, mas eramos próximos de certa forma.',
    icon: Calendar,
    color: 'text-accent',
    imageUrl: photo7,
  },
  {
    date: '2020',
    title: 'Começamos a conversar mais',
    description:
      'Nos aproximamos mais do que antes, mas por conta do Covid, paramos de conversar. (Não tenho nenhuma foto de 2020 na minha galeria.)',
    icon: Heart,
    color: 'text-primary',
  },
  {
    date: 'August 11, 2021',
    title: 'Começo do namoro',
    description:
      'Voltamos a conversar, e em agosto te pedi em namoro. Uma quinta feira, antes do meu ingles, em um dia que era pra você ir pra minha casa e acabou não indo por ser um dia de semana',
    icon: Star,
    color: 'text-accent',
  },
  {
    date: '2022',
    title: 'First Anniversary',
    description: 'We celebrated our first year anniversary at my house.',
    icon: Heart,
    color: 'text-primary',
  },
  {
    date: 'January 2023',
    title: 'First Trip Together',
    description:
      "We traveled 'together' for the first time to Guarapari - what an adventure!",
    icon: MapPin,
    color: 'text-accent',
  },
  {
    date: '2023',
    title: 'Long Distance',
    description:
      'I moved out of the city to study - testing our love from afar.',
    icon: Heart,
    color: 'text-primary',
  },
  {
    date: 'Dec 2023 - Jan 2024',
    title: 'Holidays in Criciuma',
    description:
      "We were together during Christmas and New Year's in Criciuma.",
    icon: Star,
    color: 'text-accent',
  },
  {
    date: '2024',
    title: 'Back Together',
    description: 'I came back to our city - no more distance between us!',
    icon: Heart,
    color: 'text-primary',
  },
  {
    date: 'Dec 2024 - Jan 2025',
    title: 'Family Celebrations',
    description:
      "Christmas at her family house and New Year's at her dad's house - building memories with family.",
    icon: Star,
    color: 'text-accent',
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
            jornada.
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
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className={`w-full h-full object-cover object-${
                                event.objectPosition || 'center'
                              } transition-transform duration-500 group-hover:scale-110`}
                            />
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
