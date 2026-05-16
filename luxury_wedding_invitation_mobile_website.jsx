import React, { useState, useEffect } from 'react';

export default function WeddingInvitationWebsite() {
  const weddingDate = new Date('2026-07-12T13:00:00');

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const colors = [
    { name: 'бежевий', color: '#d8cbb8' },
    { name: 'світло-бежевий', color: '#f3ece7' },
    { name: 'зелений', color: '#6f7750' },
    { name: 'коричневий', color: '#8a552d' },
    { name: 'чорний', color: '#111111' },
  ];

  const timeline = [
    { time: '13:00', title: 'Таїнство вінчання', location: 'Покровський собор' },
    { time: '14:00', title: 'Збір гостей', location: 'Ресторан «Айвенго»' },
    { time: '14:30', title: 'Церемонія та святковий банкет', location: 'с. Колоденка, вул. Зелена 53' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4ef] via-[#fdfbf8] to-[#f3ece7] text-[#3d342f] overflow-x-hidden main-font">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;700&family=Great+Vibes&display=swap');
        html { scroll-behavior: smooth; }
        .script-font { font-family: 'Great Vibes', cursive; }
        .main-font { font-family: 'Cormorant Garamond', serif; }
        .section-title { letter-spacing: 0.15em; }
        .fade-up { animation: fadeUp 1.4s ease forwards; }
        .float { animation: float 6s ease-in-out infinite; }
        .shimmer { background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.65), rgba(255,255,255,0.2)); background-size: 200% 100%; animation: shimmer 6s infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(35px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes float { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-12px);} }
        @keyframes shimmer { 0% { background-position: 200% 0;} 100% { background-position: -200% 0;} }
        .brushstroke { clip-path: polygon(3% 45%, 12% 20%, 90% 8%, 98% 40%, 96% 70%, 10% 92%, 2% 62%); position: relative; overflow: hidden; }
        .brushstroke::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(115deg, rgba(255,255,255,0.22), rgba(255,255,255,0.22) 2px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.02) 6px); mix-blend-mode: soft-light; opacity: 0.9; }
        .ring-date { position: absolute; width: 52px; height: 52px; border: 2px solid #c8a97e; border-radius: 9999px; box-shadow: 0 0 0 2px rgba(200,169,126,0.15); }
        .ring-date::after { content: ''; position: absolute; top: -8px; left: 50%; transform: translateX(-50%) rotate(45deg); width: 12px; height: 12px; border: 2px solid #c8a97e; background: white; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/60 shadow-md float"
            style={{
              width: `${Math.random() * 14 + 4}px`,
              height: `${Math.random() * 14 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 shimmer opacity-30"></div>
        <div className="relative z-10 fade-up max-w-4xl">
          <h1 className="script-font text-7xl md:text-9xl text-[#2f2622] leading-tight mb-6 drop-shadow-sm">
            Андрій & Анна
          </h1>
          <p className="uppercase tracking-[0.35em] text-lg md:text-2xl mb-10">
            Запрошуємо вас на наше весілля
          </p>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto leading-relaxed font-light">
            Є події пам'ятні на все життя і є люди, з якими приємно бути поруч.
          </p>
        </div>
        <div className="absolute bottom-10 text-3xl text-[#bfa58a] animate-bounce">⌄</div>
      </section>

      <section className="py-24 px-6 text-center relative z-10 fade-up">
        <h2 className="section-title text-3xl mb-8">ДАТА</h2>
        <h3 className="text-6xl font-light mb-12">12.07.2026</h3>
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] shadow-xl max-w-2xl mx-auto p-8 border border-[#e8ddd2]">
          <h4 className="text-3xl mb-8 uppercase tracking-[0.2em]">Липень 2026</h4>
          <div className="grid grid-cols-7 gap-4 text-lg md:text-2xl">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
              <div key={day}>{day}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div key={i} className="relative py-2 flex items-center justify-center">
                {i + 1 === 12 ? (
                  <>
                    <div className="ring-date"></div>
                    <span className="font-semibold text-[#7a5c3e]">{i + 1}</span>
                  </>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center fade-up">
        <h2 className="section-title text-3xl mb-16">ТАЙМІНГ ДНЯ</h2>
        <div className="max-w-3xl mx-auto space-y-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d8cbb8] -translate-x-1/2"></div>
          {timeline.map((item, idx) => (
            <div key={idx} className="grid grid-cols-3 items-center gap-4 relative">
              <div className="text-right text-4xl script-font">{item.time}</div>
              <div className="flex justify-center">
                <div className="w-4 h-4 rounded-full bg-[#d8cbb8] border-2 border-white shadow-md"></div>
              </div>
              <div className="text-left">
                <div className="text-2xl uppercase">{item.title}</div>
                <div className="italic text-lg text-[#6d5c50]">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center relative bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#f8f4ef]/85"></div>
        <div className="relative z-10 fade-up">
          <h2 className="section-title text-3xl mb-10">ЛОКАЦІЯ</h2>
          <p className="text-5xl mb-4">Ресторан «Айвенго»</p>
          <p className="text-2xl italic">с. Колоденка, вул. Зелена 53</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ресторан+Айвенго+Колоденка+Зелена+53"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-10 py-4 border border-[#bfa58a] rounded-full text-xl hover:bg-[#bfa58a] hover:text-white transition-all duration-500 shadow-lg"
          >
            Переглянути на мапі
          </a>
        </div>
      </section>

      <section className="py-24 px-6 text-center fade-up">
        <h2 className="section-title text-3xl mb-16">ПАЛІТРА КОЛЬОРІВ</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {colors.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div
                className="brushstroke w-24 h-16 shadow-md group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="mt-4 text-xl lowercase tracking-wide">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 text-2xl max-w-3xl mx-auto leading-relaxed space-y-3">
          <p>Квіти тішать недовго, а добрі справи залишаються.</p>
          <p>Тож якщо бажаєте нас привітати — донат на ЗСУ буде для нас найціннішим.</p>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-white/50 backdrop-blur-sm fade-up">
        <h2 className="section-title text-3xl mb-12">ЧЕКАЄМО НА ВАС ЧЕРЕЗ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-white/80 rounded-[2rem] shadow-xl p-8 border border-[#ede2d6] hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-6xl font-light mb-3">{value}</div>
              <div className="uppercase tracking-[0.2em] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
