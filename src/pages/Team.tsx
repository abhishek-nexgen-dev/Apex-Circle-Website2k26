import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import TeamCard from '@/components/cards/TeamCard';
import FilterBar from '@/components/ui/FilterBar';
import teamData from '@/data/team.json';
import {
  ArrowUpRight,
  Users2,
  Globe2,
  Cpu,
  Zap,
  Rocket,
  ShieldCheck,
  Heart,
  Lightbulb,
  MessageSquare,
  Search,
  Code2,
  Trophy,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';

import AbhishekTestimonial from '@/assets/team/abhisek.png';
import RoshanTestimonial from '@/assets/team/roshan.png';
import SunitTestimonial from '@/assets/team/sunit.png';
import AnkitTestimonial from '@/assets/team/ankit.png';

const departments = ['All', 'Leadership', 'Web', 'Design', 'Social Media', 'PR & Outreach'];

const advisors = [
  {
    id: 'advisor-1',
    name: 'Abhishek Mahto',
    role: 'Founder & CEO',
    company: 'Nomoex & MBT Ventures',
    image: AbhishekTestimonial,
    linkedin: 'https://www.linkedin.com/in/abhishek-mahto-nomoex/',
    type: 'Advisor',
  },
  {
    id: 'advisor-2',
    name: 'Roshan Burnawal',
    role: 'Founder & CEO',
    company: 'The Drop Organization',
    image: RoshanTestimonial,
    linkedin: 'https://www.linkedin.com/in/roshan-burnawal/',
    type: 'Advisor',
  },
  {
    id: 'advisor-3',
    name: 'Sunit Chaudhari',
    role: 'Advisory Board Member',
    company: 'PCS Global Pvt Ltd',
    image: SunitTestimonial,
    linkedin: 'https://www.linkedin.com/in/sunitchaudhari/',
    type: 'Advisor',
  },
  {
    id: 'advisor-4',
    name: 'Ankit Kumar Verma',
    role: 'Lead',
    company: 'GDG Prayagraj',
    image: AnkitTestimonial,
    linkedin: 'https://linkedin.com/in/ankitkumarverma',
    type: 'Advisor',
  },
  {
    id: 'advisor-5',
    name: 'Amit Barnawal',
    role: 'Commercial Manager',
    company: 'The Drop Organization',
    image:
      'https://res.cloudinary.com/dz3cfmi5k/image/upload/c_fill,g_face,w_600,h_375,q_auto,f_auto/v1775635854/amit_wgfn1e.jpg',
    linkedin: 'https://linkedin.com/in/amitbarnawal',
    type: 'Advisor',
  },
];

const mentors = [
  {
    id: 'mentor-1',
    name: 'Soumojit Shome',
    role: 'Full-Stack Engineer',
    department: 'Mentors',
    handle: 'Co-Founder & System Engineer at LastMinuteEngineering',
    emoji: '🧑‍💻',
    color: '#1E293B',
    image: 'https://calcuttahacks.xyz/assets/soumojit-BRvJOMq0.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/soumojit-shome/',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 'mentor-4',
    name: 'Abhirup Banerjee',
    role: 'Blockchain Developer',
    department: 'Mentors',
    handle: 'Co-Founder @ AXICOV',
    emoji: '🎨',
    color: '#1E40AF',
    image: 'https://calcuttahacks.xyz/assets/abhirup-CXF8r77F.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/abhirup-banerjee-651537223/',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 'mentor-5',
    name: 'Sachindra Singh',
    role: 'SWE @ EngageOS',
    department: 'Mentors',
    handle: '14x Hackathon Winner 🏆 | Ex - AlchemystAI',
    emoji: '🚀',
    color: '#7C3AED',
    image: 'https://calcuttahacks.xyz/assets/sachindra-CYKilz1D.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/singhsach/',
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 'mentor-6',
    name: 'Apabrita Sarkar',
    role: 'AI & Cloud Intern',
    department: 'Mentors',
    handle: 'Smart India Hackathon’24 Finalist',
    emoji: '☁️',
    color: '#059669',
    image: 'https://calcuttahacks.xyz/assets/apabrita-C1Xg4wWQ.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/apabritasarkar/',
      twitter: '#',
      github: '#',
    },
  },
];

export default function Team() {
  const [activeDept, setActiveDept] = useState('All');

  const filteredTeam = useMemo(() => {
    if (activeDept === 'All') return teamData;
    return teamData.filter((member) => member.department === activeDept);
  }, [activeDept]);

  return (
    <div className="pt-32 md:pt-56 pb-32 md:pb-56 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-tertiary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-tertiary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-12">
              APEX <br /> <span className="text-slate-500">BUILDERS</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              APEX CIRCLE IS A COLLECTIVE OF LEADERS, DEVELOPERS, DESIGNERS, AND OPERATORS WORKING
              TOGETHER ACROSS TECHNOLOGY, CREATIVITY, AND COMMUNITY TO BUILD, GROW, AND CREATE REAL
              IMPACT.
            </p>
          </motion.div>

          <div className="mt-16 md:mt-24 overflow-x-auto pb-6 scrollbar-hide">
            <FilterBar
              categories={departments}
              activeCategory={activeDept}
              setActiveCategory={setActiveDept}
              accentColor="tertiary"
            />
          </div>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-32 md:mb-56">
          {filteredTeam.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* NEW SECTION: Community Stats */}
        <section className="mb-32 bg-black/40 rounded-lg md:mb-56 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-20 border-y border-white/5">
          {[
            { label: 'Active Members', value: '12K+', icon: Users2 },
            { label: 'Projects Built', value: '450+', icon: Cpu },
            { label: 'Events Hosted', value: '85+', icon: Calendar },
            { label: 'Open Contributors', value: '1.2K', icon: Globe2 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 bg-tertiary/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tertiary/20 transition-colors ">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-4xl md:text-6xl font-brutal tracking-tighter uppercase mb-2 text-white group-hover:text-orange-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </section>

        {/* NEW SECTION: Our Culture */}
        <section className="mb-32 md:mb-56">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
            <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase overflow-hidden pb-4 inline-block">
              <span className="text-white">Our </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Culture
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

            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest max-w-xs text-right">
              Our culture is about learning, building, and growing together with consistency and
              purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                title: 'Open Source',
                desc: 'Everything we build is public by default. We believe in collective ownership of the future.',
                icon: Code2,
              },
              {
                title: 'Collaboration',
                desc: 'No silos. We work across departments to ensure every voice shapes the final protocol.',
                icon: Users2,
              },
              {
                title: 'Innovation',
                desc: "We don't follow trends; we set them. Constant experimentation is in our DNA.",
                icon: Lightbulb,
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-white/10 bg-[#060c37] hover:border-yellow-500 rounded-lg transition-all group"
              >
                <value.icon
                  className="text-tertiary mb-8 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-2xl font-brutal uppercase tracking-tighter mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed uppercase font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32 md:mb-56">
          {/* 🔥 HEADER */}
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase relative">
              <span className="text-white">Mentors &</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                Advisors
              </span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '300% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h2>

            <p className="mt-6 text-slate-400 max-w-xl mx-auto text-sm md:text-base uppercase tracking-wide">
              Leaders, experts, and operators guiding Apex Circle’s vision and growth.
            </p>

            {/* Divider Glow */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent mx-auto mt-8 opacity-60" />
          </div>

          {/* 🧠 ADVISORS SECTION */}
          <div className="mb-24 md:mb-32">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                Advisors
              </h3>

              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Guiding Our Growth
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
              {advisors.map((person, i) => (
                <TeamCard
                  key={`advisor-${i}`}
                  index={i}
                  member={{
                    name: person.name,
                    role: `${person.role} @ ${person.company}`,
                    image: `${person.image}`,
                    department: 'Advisors',
                    id: `advisor-${i}`,
                    socials: {
                      linkedin: person.linkedin,
                    },
                  }}
                />
              ))}
            </div>
          </div>

          {/* 🚀 MENTORS SECTION */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                Mentors
              </h3>

              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Helping You Grow
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
              {mentors.map((person, i) => (
                <TeamCard
                  key={`mentor-${i}`}
                  index={i}
                  member={{
                    name: person.name,
                    role: `${person.role} @ ${person?.department}`,
                    image: `${person.image}`,
                    department: 'Mentors',
                    id: `mentor-${i}`,
                    socials: {
                      linkedin: person.socials.linkedin,
                    },
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION: Join the Team Process */}
        <section className="mb-32 md:mb-56 py-32 border-y border-white/5">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-tertiary font-mono text-sm mb-6 block tracking-widest uppercase">
              // Onboarding_Pipeline
            </span>
            <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter uppercase leading-none">
              Join the <br /> <span className="text-slate-500">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />

            {[
              {
                step: '01',
                title: 'Apply',
                desc: 'Submit your portfolio and vision for the protocol.',
                icon: Search,
              },
              {
                step: '02',
                title: 'Interview',
                desc: 'Deep dive into your technical and cultural fit.',
                icon: MessageSquare,
              },
              {
                step: '03',
                title: 'Contribute',
                desc: 'Complete a paid trial task on a live project.',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Join Core',
                desc: 'Welcome to the council. Start architecting.',
                icon: Rocket,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-black p-8 border border-white/10 hover:border-tertiary transition-all group"
              >
                <div className="w-12 h-12 bg-tertiary text-black rounded-full flex items-center justify-center font-black mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={20} />
                </div>
                <span className="text-tertiary font-mono text-xs mb-2 block">{item.step}</span>
                <h3 className="text-2xl font-brutal uppercase tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contributors Wall - Upgraded */}
        <section className="mb-32 md:mb-56 py-32 md:py-48 border-b border-white/5 bg-white/[0.01] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="text-center mb-20 md:mb-32 relative z-10">
            <span className="text-tertiary font-mono text-sm mb-6 block tracking-widest uppercase">
              // Protocol_Builders
            </span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">
              Top <br /> <span className="text-slate-500">Contributors</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
            {[
              { name: 'alex_dev', role: 'Core', commits: '1.2k' },
              { name: 'sara_design', role: 'UI/UX', commits: '850' },
              { name: 'mike_web3', role: 'Smart Contracts', commits: '2.1k' },
              { name: 'elena_ai', role: 'ML Eng', commits: '640' },
              { name: 'david_ops', role: 'DevOps', commits: '1.5k' },
              { name: 'nina_growth', role: 'Marketing', commits: '420' },
              { name: 'chris_sec', role: 'Security', commits: '980' },
              { name: 'julia_qa', role: 'Testing', commits: '530' },
              { name: 'tom_back', role: 'Backend', commits: '1.8k' },
              { name: 'lisa_front', role: 'Frontend', commits: '1.1k' },
              { name: 'sam_crypto', role: 'Research', commits: '720' },
              { name: 'anna_comm', role: 'Community', commits: '310' },
              { name: 'ben_mobile', role: 'Mobile', commits: '890' },
              { name: 'kate_data', role: 'Analytics', commits: '460' },
              { name: 'ryan_api', role: 'Integrations', commits: '1.3k' },
              { name: 'sophie_ux', role: 'Research', commits: '290' },
              { name: 'jack_rust', role: 'Systems', commits: '2.4k' },
              { name: 'olivia_eth', role: 'EVM', commits: '1.6k' },
              { name: 'leo_sol', role: 'Solana', commits: '1.4k' },
              { name: 'mia_nft', role: 'Assets', commits: '580' },
            ].map((contributor, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 px-6 py-4 border border-white/5 bg-white/[0.02] hover:text-tertiary hover:border-tertiary transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden border border-white/10 group-hover:border-tertiary/50">
                  <img
                    src={`https://picsum.photos/seed/contrib${i}/100/100`}
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {contributor.name}
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                    {contributor.role} • {contributor.commits} commits
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {filteredTeam.length === 0 && (
          <div className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01] mb-32">
            <Users2 className="text-slate-500 mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-2">
              No Architects Found
            </h3>
            <p className="text-slate-500 text-sm uppercase tracking-widest">
              The council is currently empty in this sector.
            </p>
            <button
              onClick={() => setActiveDept('All')}
              className="mt-8 text-tertiary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              View All Departments
            </button>
          </div>
        )}

        {/* Join Council CTA - Improved */}
        <section className="mb-32 md:mb-56 reveal-item">
          <div className="max-w-6xl mx-auto bg-tertiary p-20 md:p-32 text-center relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-[20s] linear"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-6xl md:text-9xl font-brutal tracking-tighter leading-[0.8] text-black uppercase mb-12">
                Want to <br /> <span className="text-black/40">Architect?</span>
              </h2>
              <p className="text-black font-bold max-w-xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
                We are always looking for visionary builders to join the council and shape the
                future of the protocol.
              </p>
              <div className="flex flex-col items-center gap-8">
                <Magnetic strength={0.4}>
                  <button className="bg-black text-white px-20 py-10 font-black uppercase tracking-[0.2em] text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-black/50 flex items-center justify-center gap-3 mx-auto group/btn">
                    Apply for Council{' '}
                    <ArrowUpRight
                      size={24}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button>
                </Magnetic>
                <div className="flex items-center gap-4 text-black/60 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Open for Developers
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Designers
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Builders
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
