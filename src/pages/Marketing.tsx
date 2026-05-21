import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const facts = [
  {
    emoji: '🎯',
    title: 'Стратегия',
    text: 'Маркетолог думает на шаг вперёд — анализирует рынок, находит аудиторию и выстраивает путь от идеи до продажи.',
  },
  {
    emoji: '🗣️',
    title: 'Коммуникация',
    text: 'Главная задача — говорить с людьми на их языке. Правильное сообщение в правильное время меняет всё.',
  },
  {
    emoji: '📊',
    title: 'Аналитика',
    text: 'Маркетинг — это не только творчество, но и цифры. Данные помогают понять, что работает, а что нет.',
  },
  {
    emoji: '✨',
    title: 'Креатив',
    text: 'Идеи, образы, слова — всё это инструменты маркетолога. Хороший маркетинг запоминается и вдохновляет.',
  },
];

export default function Marketing() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-72 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/cc1ffb22-c28b-49f4-8b07-8a87c5b01df8/bucket/fb46f66d-5201-4b51-bf81-9313580293fd.jpg"
          alt="Маркетинг"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-3xl">
        <p className="text-white/50 uppercase tracking-widest text-sm mb-4">Будущая профессия</p>
        <h1 className="text-4xl md:text-5xl font-light mb-6">Кто такой маркетолог?</h1>
        <p className="text-white/70 text-lg font-light leading-relaxed mb-14">
          Маркетолог — это специалист, который помогает компаниям находить клиентов, выстраивать с ними отношения и продвигать продукты или услуги. Это человек на стыке психологии, творчества и аналитики.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{fact.emoji}</div>
              <h3 className="text-white text-lg font-light mb-3 tracking-wide">{fact.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-white/20 pl-8 mb-14">
          <p className="text-white/80 text-lg font-light italic leading-relaxed">
            «Маркетинг — это не просто реклама. Это умение слышать людей и создавать то, что им действительно нужно.»
          </p>
          <p className="text-white/40 text-sm mt-3 tracking-widest uppercase">— Настя, будущий маркетолог</p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/about"
            className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            ← О себе
          </Link>
          <Link
            to="/beauty"
            className="px-8 py-3 text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            Бьюти →
          </Link>
        </div>
      </div>
    </main>
  );
}