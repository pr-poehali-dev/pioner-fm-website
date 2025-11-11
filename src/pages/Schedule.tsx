import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const schedule = [
  { time: '06:00 - 09:00', title: 'Доброе утро, пионер!', description: 'Энергичные хиты для начала дня', icon: 'Sunrise', live: false },
  { time: '09:00 - 12:00', title: 'Рабочая волна', description: 'Фоновая музыка для продуктивности', icon: 'Coffee', live: false },
  { time: '12:00 - 15:00', title: 'Обеденный микс', description: 'Лёгкие треки для перерыва', icon: 'Music', live: true },
  { time: '15:00 - 18:00', title: 'Вечерний драйв', description: 'Популярные хиты для поездок', icon: 'Car', live: false },
  { time: '18:00 - 21:00', title: 'Золотое время', description: 'Лучшие треки всех времён', icon: 'Star', live: false },
  { time: '21:00 - 00:00', title: 'Ночной формат', description: 'Спокойные композиции', icon: 'Moon', live: false },
  { time: '00:00 - 06:00', title: 'Ночное радио', description: 'Ambient и расслабляющая музыка', icon: 'CloudMoon', live: false },
];

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-12 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Расписание эфиров</h1>
          <p className="text-xl text-muted-foreground">
            Программа передач PIONER FM на каждый день
          </p>
        </div>

        <div className="space-y-4">
          {schedule.map((item, index) => (
            <Card 
              key={index}
              className={`bg-card/50 hover:bg-card transition-colors ${item.live ? 'border-primary' : ''}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-pioneer flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{item.time}</p>
                    </div>
                  </div>
                  {item.live && (
                    <Badge className="gradient-pioneer">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse mr-2"></div>
                      В эфире
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-primary/10 border-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Расписание может меняться</h3>
                <p className="text-sm text-muted-foreground">
                  В выходные и праздничные дни возможны специальные программы и тематические эфиры.
                  Следите за обновлениями!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
