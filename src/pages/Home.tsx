import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Home() {
  return (
    <div className="pb-32">
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/5c04cdaa-5880-4524-8dff-799dabf47a5c/files/d2176048-4d95-4510-92e1-3ceede9144c8.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 border border-primary rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">В эфире</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-pioneer bg-clip-text text-transparent">
            PIONER FM
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Популярные хиты 90-х, 2000-х и 2010-х годов. <br />
            Музыка для тех, кто был пионером своего времени.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-pioneer text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Слушать в эфире
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Music" size={20} className="mr-2" />
              Плейлисты
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Почему PIONER FM?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pioneer flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Лучшие хиты</h3>
              <p className="text-muted-foreground">
                Только проверенные временем треки, которые знают все
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pioneer flex items-center justify-center">
                <Icon name="Radio" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Без рекламы</h3>
              <p className="text-muted-foreground">
                Только музыка, никаких перерывов на рекламу
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pioneer flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 в эфире</h3>
              <p className="text-muted-foreground">
                Слушайте любимую музыку в любое время суток
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src="https://cdn.poehali.dev/projects/5c04cdaa-5880-4524-8dff-799dabf47a5c/files/1d90ac90-bc45-4da1-b954-71862790a324.jpg"
            alt="Studio"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">Подключайтесь к эфиру</h2>
              <p className="text-muted-foreground mb-4">
                Слушайте PIONER FM в своём приложении
              </p>
              <Button variant="outline">
                <Icon name="Link" size={18} className="mr-2" />
                pionerfm.online
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
