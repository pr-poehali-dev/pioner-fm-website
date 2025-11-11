import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const playlists = [
  {
    id: 1,
    title: 'Топ 100 хитов 90-х',
    description: 'Лучшие треки девяностых годов',
    tracks: 100,
    duration: '6ч 42м',
    icon: 'Music2',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Золотые 2000-е',
    description: 'Незабываемые хиты нулевых',
    tracks: 150,
    duration: '9ч 15м',
    icon: 'Disc3',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Лучшее десятилетие 2010-х',
    description: 'Топовые треки последнего десятилетия',
    tracks: 120,
    duration: '7ч 30м',
    icon: 'Radio',
    color: 'from-green-500 to-emerald-500'
  },
];

const recentTracks = [
  { artist: 'Backstreet Boys', title: 'I Want It That Way', time: '14:32', year: 1999 },
  { artist: 'Eminem', title: 'Lose Yourself', time: '14:18', year: 2002 },
  { artist: 'Coldplay', title: 'Viva La Vida', time: '14:05', year: 2008 },
  { artist: 'Rihanna', title: 'Umbrella', time: '13:52', year: 2007 },
  { artist: 'Britney Spears', title: 'Toxic', time: '13:40', year: 2004 },
  { artist: 'Maroon 5', title: 'Sugar', time: '13:28', year: 2015 },
  { artist: 'OutKast', title: 'Hey Ya!', time: '13:15', year: 2003 },
  { artist: 'The Killers', title: 'Mr. Brightside', time: '13:02', year: 2004 },
];

export default function Playlists() {
  return (
    <div className="container mx-auto px-4 py-12 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Плейлисты</h1>
          <p className="text-xl text-muted-foreground">
            Подборки лучших треков по десятилетиям
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {playlists.map((playlist) => (
            <Card key={playlist.id} className="bg-card/50 hover:bg-card transition-all hover:scale-105 cursor-pointer group">
              <CardHeader>
                <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${playlist.color} mb-4 flex items-center justify-center`}>
                  <Icon name={playlist.icon as any} size={48} className="text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {playlist.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {playlist.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Music" size={14} />
                    {playlist.tracks} треков
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {playlist.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Недавно в эфире</CardTitle>
              <Badge variant="outline" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentTracks.map((track, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded gradient-pioneer flex items-center justify-center flex-shrink-0">
                      <Icon name="Music" size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate group-hover:text-primary transition-colors">
                        {track.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {track.artist} • {track.year}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Clock" size={14} />
                    {track.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
