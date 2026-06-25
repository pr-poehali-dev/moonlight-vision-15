import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const hobbies = [
  {
    title: 'Волейбол',
    icon: 'Volleyball',
    description: 'Командная игра, скорость реакции и точные подачи. Люблю динамику и азарт на площадке.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/62328ac1-4f82-446e-bd9a-d523667ffecf.jpg',
  },
  {
    title: 'Баскетбол',
    icon: 'Dribbble',
    description: 'Энергия, командная тактика и точные броски. Игра, где важен каждый рывок.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/154d165f-0a63-4485-89b0-805515fbaca0.jpg',
  },
  {
    title: 'Карате',
    icon: 'Swords',
    description: 'Дисциплина, концентрация и сила духа. Боевое искусство, закаляющее характер.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/38b65332-636a-406e-9983-fe2597288d49.jpg',
  },
  {
    title: 'Капоэйра',
    icon: 'Activity',
    description: 'Сочетание танца, акробатики и музыки. Бразильское искусство свободного движения.',
    image:
      'https://cdn.poehali.dev/projects/5fdf3e92-75bf-4a7d-9834-a53cd2cd6d64/files/a8cd5e4a-4f71-4b69-b8ca-79ec7547c4be.jpg',
  },
];

export default function HobbiesSection() {
  const [visible, setVisible] = useState(false);
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
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className={cn(
                'group relative h-80 overflow-hidden rounded-2xl transform transition-all duration-1000 ease-out',
                visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={hobby.image}
                alt={hobby.title}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                  <Icon name={hobby.icon} fallback="Activity" size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-light text-white md:text-3xl">{hobby.title}</h3>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-white/70">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
