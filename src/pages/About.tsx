import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="https://cdn.poehali.dev/projects/5c04cdaa-5880-4524-8dff-799dabf47a5c/files/6ef484a7-34cb-4652-9432-af5f4a87af40.jpg"
            alt="PIONER FM Logo"
            className="w-24 h-24 mx-auto mb-6 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-black mb-4">О радио PIONER FM</h1>
          <p className="text-xl text-muted-foreground">
            Музыка для тех, кто был пионером своего времени
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-card/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Наша история</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PIONER FM — это интернет-радио, созданное для тех, кто вырос в эпоху великих 
                  музыкальных открытий. Мы собрали лучшие хиты 90-х, 2000-х и 2010-х годов, 
                  чтобы вернуть вас в те времена, когда музыка была особенной.
                </p>
                <p>
                  Название "PIONER" — это дань уважения поколению, которое первым открывало 
                  для себя новые музыкальные направления, было пионером в своих увлечениях 
                  и остаётся молодым душой до сих пор.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Наша концепция</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-pioneer flex items-center justify-center flex-shrink-0">
                    <Icon name="Music" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Качественная музыка</h3>
                    <p className="text-sm text-muted-foreground">
                      Только проверенные временем хиты, которые любят миллионы
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-pioneer flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">С душой</h3>
                    <p className="text-sm text-muted-foreground">
                      Каждый трек выбран с любовью и заботой о слушателях
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-pioneer flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Современный подход</h3>
                    <p className="text-sm text-muted-foreground">
                      Ностальгия в современной упаковке с качественным звуком
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-pioneer flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Для каждого</h3>
                    <p className="text-sm text-muted-foreground">
                      Музыка, которая объединяет поколения и создаёт настроение
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к PIONER FM</h2>
              <p className="text-muted-foreground mb-6">
                Станьте частью нашего сообщества и наслаждайтесь лучшей музыкой каждый день
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-muted transition-colors">
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-muted transition-colors">
                  <Icon name="AtSign" size={20} />
                  VK
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-muted transition-colors">
                  <Icon name="Instagram" size={20} />
                  Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
