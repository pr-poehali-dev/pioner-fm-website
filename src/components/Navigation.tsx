import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { path: '/', label: 'Главная', icon: 'Home' },
  { path: '/schedule', label: 'Расписание', icon: 'Calendar' },
  { path: '/about', label: 'О радио', icon: 'Info' },
  { path: '/playlists', label: 'Плейлисты', icon: 'Music' },
  { path: '/contacts', label: 'Контакты', icon: 'Mail' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://cdn.poehali.dev/projects/5c04cdaa-5880-4524-8dff-799dabf47a5c/files/6ef484a7-34cb-4652-9432-af5f4a87af40.jpg" 
              alt="PIONER FM"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            />
            <div>
              <h1 className="text-xl font-black tracking-tight">PIONER FM</h1>
              <p className="text-xs text-muted-foreground">Музыка для пионеров</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <button className="md:hidden p-2 hover:bg-muted rounded-lg">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
