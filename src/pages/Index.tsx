import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Stage {
  id: number;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

const stages: Stage[] = [
  {
    id: 0,
    title: 'Введение',
    icon: 'BookOpen',
    description: 'Путешествие от какао-бобов до шоколадной плитки',
    details: [
      'Шоколад проходит долгий путь от тропических плантаций до прилавков магазинов',
      'Каждый этап производства влияет на вкус и качество конечного продукта',
      'Процесс требует точности, знаний и мастерства'
    ]
  },
  {
    id: 1,
    title: 'Сбор какао-бобов',
    icon: 'Trees',
    description: 'Выращивание и сбор плодов какао',
    details: [
      'Какао растёт в тропическом климате между 20° северной и южной широты',
      'Плоды созревают 5-6 месяцев и собираются вручную',
      'В одном плоде содержится 30-50 какао-бобов',
      'Основные производители: Кот-д\'Ивуар, Гана, Индонезия'
    ]
  },
  {
    id: 2,
    title: 'Ферментация',
    icon: 'Leaf',
    description: 'Развитие вкусовых характеристик бобов',
    details: [
      'Бобы извлекают из плодов и укладывают в ящики или под банановые листья',
      'Процесс длится 5-7 дней при температуре 45-50°C',
      'Микроорганизмы расщепляют сахара, формируя будущий вкус',
      'На этом этапе бобы приобретают характерный коричневый цвет'
    ]
  },
  {
    id: 3,
    title: 'Сушка',
    icon: 'Sun',
    description: 'Снижение влажности для хранения',
    details: [
      'Бобы сушат на солнце 7-14 дней',
      'Влажность снижается с 60% до 7-8%',
      'Правильная сушка предотвращает появление плесени',
      'После сушки бобы упаковывают в мешки для транспортировки'
    ]
  },
  {
    id: 4,
    title: 'Обжарка',
    icon: 'Flame',
    description: 'Раскрытие аромата и вкуса',
    details: [
      'Бобы обжаривают при температуре 120-140°C',
      'Время обжарки: 20-40 минут в зависимости от типа шоколада',
      'Развиваются характерные шоколадные ароматы',
      'Скорлупа легко отделяется от ядра'
    ]
  },
  {
    id: 5,
    title: 'Измельчение',
    icon: 'Settings',
    description: 'Превращение бобов в какао-массу',
    details: [
      'Обжаренные бобы дробят и отделяют от шелухи',
      'Ядра измельчают до состояния жидкой какао-массы',
      'Выделяется какао-масло — около 54% от массы бобов',
      'Получается основа для производства шоколада'
    ]
  },
  {
    id: 6,
    title: 'Конширование',
    icon: 'Waves',
    description: 'Придание шоколаду гладкой текстуры',
    details: [
      'Какао-массу перемешивают и аэрируют в течение 12-72 часов',
      'Температура процесса: 55-90°C',
      'Удаляются нежелательные кислоты и влага',
      'Шоколад приобретает мягкий вкус и гладкую консистенцию'
    ]
  },
  {
    id: 7,
    title: 'Темперирование',
    icon: 'Thermometer',
    description: 'Кристаллизация какао-масла',
    details: [
      'Шоколад нагревают до 45-50°C, затем охлаждают до 27°C',
      'Снова нагревают до рабочей температуры 31-32°C',
      'Процесс обеспечивает правильную кристаллическую структуру',
      'Результат: глянцевая поверхность и характерный хруст'
    ]
  },
  {
    id: 8,
    title: 'Формование',
    icon: 'Square',
    description: 'Создание финального продукта',
    details: [
      'Темперированный шоколад разливают в формы',
      'Формы вибрируют для удаления пузырьков воздуха',
      'Охлаждение в специальных камерах при 8-12°C',
      'Готовый шоколад извлекают из форм и упаковывают'
    ]
  },
  {
    id: 9,
    title: 'Заключение',
    icon: 'Award',
    description: 'От фермы до стола',
    details: [
      'Весь процесс занимает несколько недель',
      'Качественный шоколад — результат тщательного контроля каждого этапа',
      'Мастерство шоколатье превращает простые бобы в изысканное лакомство',
      'Теперь вы знаете путь создания любимого десерта!'
    ]
  }
];

const Index = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const progress = ((currentStage + 1) / stages.length) * 100;
  const stage = stages[currentStage];

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrev = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-card border-b border-border z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-heading font-bold text-primary">
              Этапы создания шоколада
            </h1>
            <div className="text-sm text-muted-foreground font-medium">
              {currentStage + 1} / {stages.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name={stage.icon} size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stage.title}
                </h2>
                <p className="text-lg text-muted-foreground">{stage.description}</p>
              </div>
            </div>

            <div className="space-y-4 my-8">
              {stage.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground text-base leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-between items-center mt-12">
              <Button
                onClick={handlePrev}
                disabled={currentStage === 0}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>

              <Button
                onClick={handleNext}
                disabled={currentStage === stages.length - 1}
                size="lg"
                className="gap-2"
              >
                Далее
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </Card>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {stages.map((s, index) => (
              <button
                key={s.id}
                onClick={() => handleStageClick(index)}
                className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                  index === currentStage
                    ? 'border-primary bg-primary/5'
                    : index < currentStage
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-border bg-card'
                }`}
              >
                <Icon
                  name={s.icon}
                  size={24}
                  className={`mx-auto mb-2 ${
                    index <= currentStage ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <p
                  className={`text-xs font-medium text-center ${
                    index <= currentStage ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {s.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;