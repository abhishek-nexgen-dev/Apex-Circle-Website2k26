import { useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Users, Rocket, Trophy, Handshake } from 'lucide-react';
import calcuttaHacksImage from '@/assets/Image/CalCuttaHacks.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOC-Wr4_60z9IYM0ftBso6_uhi8_mNq7LWg&s',
  },
  {
    name: 'Devfolio',
    logo: 'https://avatars.githubusercontent.com/u/38809367?v=4',
  },
  {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg',
  },
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png',
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
  {
    name: 'Netlify',
    logo: 'https://www.netlify.com/v3/img/components/logomark.png',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

const Journey_Image = [
  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },
];

const stats = [
  { label: 'Community', value: '10K+', icon: Users },
  { label: 'Projects', value: '500+', icon: Rocket },
  { label: 'Hackathons', value: '25+', icon: Trophy },
  { label: 'Partners', value: '100+', icon: Handshake },
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ================= HERO =================
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-sub', {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out',
      });

      // ================= CARDS =================
      gsap.to('.Box', {
        scrollTrigger: {
          trigger: '.Box',
          start: 'top 85%',
          end: 'bottom 60%',
          markers: true,
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // ================= JOURNEY TIMELINE =================
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 90%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        x: -60,
        stagger: 1,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
      });
    }, container);


    gsap.to('.Image_Top-Container', {
      scrollTrigger: {
        trigger: '.Image_Top-Container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      pin: true,
      y: (i) => (i % 2 === 0 ? -50 : 50),
      ease: 'none',
    });

    gsap.to('.parallax-img', {
      scrollTrigger: {
        trigger: '.Image_Top-Container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
      scale: 1.1,
      ease: 'none',
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="About sec pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-background overflow-hidden relative"
      ref={container}
    >
      {/* Dynamic Background Depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-[20%] w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[180px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16 md:mb-24 mt-[5vh] flex items-center justify-center flex-col gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-12 relative">
              APEX <br /> <span className="text-slate-500">BUILDERS</span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h1>

            <p className="hero-sub text-slate-400 text-center text-lg md:text-2xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              APEX CIRCLE IS A COLLECTIVE OF LEADERS, DEVELOPERS, DESIGNERS, AND OPERATORS WORKING
              TOGETHER ACROSS TECHNOLOGY, CREATIVITY, AND COMMUNITY TO BUILD, GROW, AND CREATE REAL
              IMPACT.
            </p>
          </motion.div>
        </header>

        {/* Redesigned Mission/Vision Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24">
          {[
            {
              icon: Target,
              title: 'Mission',
              desc: 'Our mission is to empower individuals to build real-world solutions, learn new skills, and grow through a strong and supportive tech community.',
              color: 'text-[#FFD700]',
              glow: 'hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)]',
              border: 'border-yellow-500/20 hover:border-yellow-500/60',
            },
            {
              icon: Eye,
              title: 'Vision',
              desc: 'Our vision is to create a world where everyone has control over their own data and can use technology freely and safely.',
              color: 'text-[#38BDF8]',
              glow: 'hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]',
              border: 'border-cyan-500/20 hover:border-cyan-500/60',
            },
            {
              icon: Heart,
              title: 'Values',
              desc: 'Transparency, collaboration, and relentless pursuit of excellence.',
              color: 'text-[#A855F7]',
              glow: 'hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]',
              border: 'border-purple-500/20 hover:border-purple-500/60',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`Box relative bg-white/[0.03] backdrop-blur-3xl border ${item.border} p-10 md:p-14 overflow-hidden rounded-2xl transition-all duration-500 group flex flex-col items-center text-center hover:-translate-y-3 ${item.glow}`}
              style={{
                animation: 'badgeZoom 0.8s cubic-bezier(0.34,1.56,0.64,1) both',
                animationDelay: `${i * 0.2 + 0.2}s`,
              }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <div
                className={`w-16 h-16 md:w-20 md:h-20 bg-white/8 flex items-center justify-center mb-8 rounded-full border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/15 ${item.color} group-hover:shadow-[0_0_20px_currentColor]`}
              >
                <item.icon size={36} />
              </div>
              <h3 className="text-3xl md:text-4xl font-brutal tracking-tight mb-6 uppercase text-white group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-medium transition-colors group-hover:text-slate-200">
                {item.desc}
              </p>

              {/* Subtle spotlight highlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.06),transparent_60%)]" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-16 md:mb-24">
          <div className="">
            <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase overflow-hidden pb-4 inline-block my-[8vh]">
              <span className="text-white">Our</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Journey
              </span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h2>

            <div className="timeline space-y-10 md:space-y-16">
              {[
                {
                  year: '2021',
                  title: 'The Foundation',
                  desc: 'Founded by a group of developers looking for a better way to collaborate.',
                },
                {
                  year: '2022',
                  title: 'Global Scale',
                  desc: 'Reached 1,000 members and hosted our first international hackathon.',
                },
                {
                  year: '2023',
                  title: 'Incubator Launch',
                  desc: 'Launched our incubator program and open-source project archives.',
                },
                {
                  year: '2024',
                  title: 'Future Protocol',
                  desc: 'Pioneering the future of decentralized community building.',
                },
              ].map((step, i) => (
                <div key={i} className="timeline-item flex gap-8 md:gap-12 group relative">
                  <div className="absolute left-[-20px] top-0 h-full w-[1px] bg-white/10 group-hover:bg-primary transition-colors" />
                  <span className="text-primary font-mono text-xl md:text-2xl pt-1">
                    [{step.year}]
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-brutal tracking-tight uppercase mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALCUTTA HACKS SQUARE PHOTO — LIFTED TOP */}
          <div className="Image_Top-Container relative group w-full flex flex-col items-center justify-start gap-[12vh] py-[10vh] md:mt-[-48px]  overflow-hidden">
            {Journey_Image.map((item, i) => (
              <div
                key={i}
                className={`
        Image_Hold_Container h-[400px] relative w-full 
        ${i % 2 === 0 ? 'max-w-2xl' : 'max-w-xl'} 
        aspect-[4/5] rounded-3xl overflow-hidden
        border border-white/10 bg-black/40 
        shadow-[0_20px_100px_rgba(0,0,0,0.7)]
        transition-all duration-700 ease-out
        group hover:scale-[1.02] hover:-translate-y-3 hover:border-primary/40
      `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="parallax-img w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                {/* TEXT CONTENT (NEW 🔥) */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {item.name}
                  </h3>
                </div>

                {/* SOFT GLOW */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <section className="mb-16 md:mb-32 py-16 md:py-24 border-y border-white/10 bg-gradient-to-b from-black/35 to-black/20 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-4 md:px-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="stat-card group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,140,0,0.15)]"
                >
                  {/* Icon */}
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>

                  {/* Value */}
                  <div className="text-3xl sm:text-4xl md:text-6xl font-brutal tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-orange-500/10 via-transparent to-yellow-500/10 blur-xl" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase overflow-hidden pb-4 inline-block my-[8vh]">
              <span className="text-white">Our</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Partners
              </span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="partner-logo group h-16 border border-white/10 flex items-center justify-center bg-blue-900/10 hover:bg-white/[0.15] transition-all duration-500 rounded-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10  object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="cta bg-primary text-black p-8 md:p-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase leading-none text-center md:text-left">
            Ready to <br /> <span className="text-black/50">Contribute?</span>
          </h2>
          <button className="w-full md:w-auto bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4">
            Join the Protocol <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
