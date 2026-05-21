import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const skills = [
  {
    emoji: '💄',
    title: 'Макияж',
    text: 'Бьюти-мастер создаёт образы — от нежного дневного макияжа до яркого вечернего. Каждый штрих подчёркивает индивидуальность.',
  },
  {
    emoji: '💅',
    title: 'Уход за собой',
    text: 'Ухоженная кожа, здоровые волосы, сияющий вид — бьюти-мастер знает, как сделать человека лучшей версией себя.',
  },
  {
    emoji: '🎨',
    title: 'Творчество',
    text: 'Каждый образ — это маленькое произведение искусства. Бьюти — это когда красота становится холстом, а лицо — картиной.',
  },
  {
    emoji: '🌸',
    title: 'Забота о людях',
    text: 'Бьюти-мастер дарит уверенность. Когда человек видит себя красивым — он светится изнутри. Это и есть главная награда.',
  },
];

export default function Beauty() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-72 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/cc1ffb22-c28b-49f4-8b07-8a87c5b01df8/bucket/b5f4ceca-7cb7-4038-b5f5-b1d83741510b.jpg"
          alt="Бьюти"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>

      <div className="container mx-auto px-8 md:px-16 py-16 max-w-3xl">
        <p className="text-white/50 uppercase tracking-widest text-sm mb-4">Мечта</p>
        <h1 className="text-4xl md:text-5xl font-light mb-6">Бьюти-мастер</h1>
        <p className="text-white/70 text-lg font-light leading-relaxed mb-14">
          Бьюти-мастер — это художник, который работает с красотой людей. Он создаёт образы, подчёркивает достоинства и помогает каждому человеку чувствовать себя особенным. Именно к этому я иду.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{skill.emoji}</div>
              <h3 className="text-white text-lg font-light mb-3 tracking-wide">{skill.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{skill.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-white/20 pl-8 mb-14">
          <p className="text-white/80 text-lg font-light italic leading-relaxed">
            «Я хочу, чтобы каждый человек после встречи со мной чувствовал себя красивым и уверенным. Это моя цель.»
          </p>
          <p className="text-white/40 text-sm mt-3 tracking-widest uppercase">— Настя, будущий бьюти-мастер</p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/about"
            className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            ← О себе
          </Link>
          <Link
            to="/marketing"
            className="px-8 py-3 text-white/50 text-sm tracking-widest uppercase hover:text-white transition-colors duration-300"
          >
            Маркетинг →
          </Link>
        </div>
      </div>
    </main>
  );
}
