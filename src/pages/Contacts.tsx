import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, что вас интересует..."
                  rows={5}
                />
              </div>
              <Button className="w-full gradient-pioneer">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@pionerfm.online" className="text-primary hover:underline">
                  info@pionerfm.online
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" size={20} />
                  Сайт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://pionerfm.online" className="text-primary hover:underline">
                  pionerfm.online
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Radio" size={20} />
                  Поток
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Для подключения в вашем плеере используйте:
                </p>
                <code className="block p-3 bg-muted rounded text-xs break-all">
                  https://myradio24.org/40350
                </code>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
              <CardHeader>
                <CardTitle>Социальные сети</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="AtSign" size={18} className="mr-2" />
                    VK
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Instagram" size={18} className="mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-primary/10 border-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Icon name="Headphones" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Техническая поддержка</h3>
                <p className="text-sm text-muted-foreground">
                  Если у вас возникли проблемы с воспроизведением или есть предложения по улучшению 
                  радио — напишите нам. Мы ответим в течение 24 часов.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
