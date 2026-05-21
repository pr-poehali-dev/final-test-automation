import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О себе' },
  { href: '/marketing', label: 'Маркетинг' },
  { href: '/beauty', label: 'Бьюти' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-md">
      <span className="text-white font-light text-lg tracking-widest">НАСТЯ</span>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={cn(
                'text-sm tracking-widest uppercase transition-colors duration-200',
                pathname === link.href
                  ? 'text-white border-b border-white pb-0.5'
                  : 'text-white/60 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}