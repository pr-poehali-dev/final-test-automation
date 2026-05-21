import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-72 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/cc1ffb22-c28b-49f4-8b07-8a87c5b01df8/bucket/fae960ba-9d35-4a32-8fbd-8e32ae425ea0.jpg"
          alt="Настя"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-3xl">
        <p className="text-white/50 uppercase tracking-widest text-sm mb-4">О себе</p>
        <h1 className="text-4xl md:text-5xl font-light mb-10">Привет, я Настя</h1>

        <div className="space-y-6 text-white/80 text-lg font-light leading-relaxed">
          <p>
            Мне 17 лет, я выпускница 2026 года. Я увлечённый и целеустремлённый человек, который точно знает, чего хочет от будущего — стать крутым маркетологом.
          </p>
          <p>
            Мне нравится наблюдать за тем, как работают бренды, как они общаются с людьми, как одна идея может изменить отношение к продукту. Это и есть маркетинг — и это то, чем я хочу заниматься.
          </p>
          <p>
            Сейчас я стою на старте большого пути. Учусь, вдохновляюсь, строю планы — и не боюсь мечтать по-крупному.
          </p>
        </div>

        <div className="mt-14 flex gap-4">
          <Link
            to="/marketing"
            className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            Про маркетинг →
          </Link>
          <Link
            to="/"
            className="px-8 py-3 text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
