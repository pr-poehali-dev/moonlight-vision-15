import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const hobbies = [
  {
    title: 'Волейбол',
    icon: 'Volleyball',
    description: 'Командная игра, скорость реакции и точные подачи. Люблю динамику и азарт на площадке.',
    details: 'Играю в волейбол несколько лет: отрабатываю подачи, приёмы и командное взаимодействие. Это спорт, который учит чувствовать партнёров, мгновенно принимать решения и держать концентрацию до последнего очка.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/62328ac1-4f82-446e-bd9a-d523667ffecf.jpg',
  },
  {
    title: 'Баскетбол',
    icon: 'Dribbble',
    description: 'Энергия, командная тактика и точные броски. Игра, где важен каждый рывок.',
    details: 'Баскетбол развивает выносливость, координацию и тактическое мышление. Мне нравится скорость игры, командные комбинации и момент, когда мяч точно ложится в кольцо после красивой передачи.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/154d165f-0a63-4485-89b0-805515fbaca0.jpg',
  },
  {
    title: 'Карате',
    icon: 'Swords',
    description: 'Дисциплина, концентрация и сила духа. Боевое искусство, закаляющее характер.',
    details: 'Карате — это не только техника ударов, но и философия самоконтроля. Тренировки закаляют характер, развивают выдержку и учат сохранять спокойствие в любой ситуации.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/38b65332-636a-406e-9983-fe2597288d49.jpg',
  },
  {
    title: 'Капоэйра',
    icon: 'Activity',
    description: 'Сочетание танца, акробатики и музыки. Бразильское искусство свободного движения.',
    details: 'Капоэйра объединяет боевое искусство, танец и музыку в единый поток движения. Это про пластику, ритм и свободу тела — каждый раунд превращается в живой диалог с партнёром.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/a8cd5e4a-4f71-4b69-b8ca-79ec7547c4be.jpg',
  },
];

export default function HobbiesSection() {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div
          className={cn(
            'mb-16 transform transition-all duration-1000 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-sm font-light uppercase tracking-[0.3em] text-white/50">
            Мои увлечения
          </p>
          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Спорт и движение
          </h2>
          <p className="mt-4 text-sm font-light text-white/40">
            Нажмите на карточку, чтобы узнать подробнее
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={hobby.title}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className={cn(
                  'group relative block w-full overflow-hidden rounded-2xl text-left transform transition-all duration-1000 ease-out',
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-80">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className={cn(
                      'absolute inset-0 h-full w-full object-cover transition-all duration-700',
                      isOpen ? 'scale-110 grayscale-0' : 'grayscale group-hover:scale-110 group-hover:grayscale-0'
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                      <Icon name={hobby.icon} fallback="Activity" size={26} className="text-white" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-light text-white md:text-3xl">{hobby.title}</h3>
                      <Icon
                        name="ChevronDown"
                        size={24}
                        className={cn(
                          'text-white/70 transition-transform duration-500',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </div>
                    <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-white/70">
                      {hobby.description}
                    </p>
                  </div>
                </div>

                <div
                  className={cn(
                    'grid bg-white/5 transition-all duration-500 ease-in-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 py-6 text-sm font-light leading-relaxed text-white/80">
                      {hobby.details}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
