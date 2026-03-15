/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Cpu, 
  Globe, 
  BookOpen, 
  Zap, 
  Calendar, 
  ArrowRight, 
  Linkedin, 
  Instagram, 
  Twitter,
  Menu,
  X,
  ChevronRight,
  Rocket,
  Brain,
  Code,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'A propos', href: '#about' },
    { name: 'Programmes', href: '#programs' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">O!</div>
          <span className="text-2xl font-bold tracking-tighter text-slate-900">OPEN!</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center font-semibold">
              Join
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Génération Numérique
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            OPEN! — Construire la <span className="text-indigo-600">génération</span> numérique
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Une communauté qui forme les jeunes aux compétences numériques, à l’innovation et aux technologies de demain.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-2 group">
              Rejoindre la communauté
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all">
              Nos programmes
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
            <img 
              src="https://picsum.photos/seed/tech-community/800/800" 
              alt="Tech Innovation" 
              className="rounded-[2rem] w-full h-auto object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-3xl -z-10 rotate-12"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500 rounded-full -z-10 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

const WhySection = () => {
  const reasons = [
    {
      icon: <Globe className="text-indigo-600" size={32} />,
      title: "Fracture numérique",
      desc: "Réduire les inégalités d'accès aux outils et aux connaissances dans plusieurs communautés."
    },
    {
      icon: <Cpu className="text-emerald-600" size={32} />,
      title: "Manque de compétences",
      desc: "Combler le déficit de talents digitaux en formant aux technologies les plus demandées."
    },
    {
      icon: <Rocket className="text-orange-600" size={32} />,
      title: "Accès aux opportunités",
      desc: "Ouvrir des portes vers des carrières tech et l'entrepreneuriat pour tous les jeunes."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pourquoi Open! ?</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="mb-6 p-4 bg-slate-50 inline-block rounded-2xl">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const activities = [
    { title: "FORMATIONS", subtitle: "IA / Data", icon: <Brain />, color: "bg-indigo-600" },
    { title: "WORKSHOPS", subtitle: "Bootcamps", icon: <Code />, color: "bg-emerald-500" },
    { title: "COMMUNAUTÉ", subtitle: "Networking", icon: <Users />, color: "bg-orange-500" },
    { title: "EVENEMENTS", subtitle: "Hackathons", icon: <Calendar />, color: "bg-rose-500" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ce que nous faisons</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Nous créons un écosystème complet pour l'apprentissage et l'innovation numérique.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`${act.color} p-8 rounded-[2rem] text-white h-full flex flex-col justify-between shadow-lg transition-all group-hover:shadow-2xl`}>
                <div className="mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(act.icon as React.ReactElement, { size: 40 })}
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest opacity-80 mb-1">{act.title}</h3>
                  <p className="text-xl font-bold">{act.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { title: "Digital Skills Bootcamp", tag: "Débutant", desc: "Maîtrisez les bases du développement web et du design digital." },
    { title: "AI For Everyone", tag: "Innovation", desc: "Comprendre et utiliser l'IA générative pour booster votre productivité." },
    { title: "Tech Career Launchpad", tag: "Carrière", desc: "Préparez-vous aux entretiens et construisez un portfolio percutant." },
    { title: "Innovation Lab", tag: "Projet", desc: "Transformez vos idées en prototypes réels avec l'aide de mentors." }
  ];

  return (
    <section id="programs" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos programmes</h2>
            <p className="text-slate-400 max-w-xl">Des parcours intensifs et pratiques pour transformer votre passion en expertise.</p>
          </div>
          <button className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition-colors group">
            Voir tous les programmes
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  {prog.tag}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{prog.title}</h3>
              <p className="text-slate-400 leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const stats = [
    { value: "500+", label: "Membres" },
    { value: "30+", label: "Ateliers" },
    { value: "1000+", label: "Participants" },
    { value: "20+", label: "Partenaires" }
  ];

  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-indigo-100 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/community-workshop/800/600" 
                alt="Community Workshop" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full -z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-50 rounded-full -z-0"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">La communauté Open!</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Open! rassemble étudiants, professionnels et créateurs autour du numérique, de l’innovation et du partage. Nous croyons que le futur se construit ensemble.
            </p>
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Rejoindre Open!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    { title: "AI Workshop", date: "25 Mars 2024", location: "Dakar, Sénégal / Online", icon: <Brain /> },
    { title: "Tech Meetup", date: "12 Avril 2024", location: "Abidjan, CI", icon: <Users /> },
    { title: "Bootcamp", date: "01 Mai 2024", location: "Lomé, Togo", icon: <Code /> }
  ];

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Evénements à venir</h2>
          <p className="text-slate-600">Ne manquez pas nos prochaines rencontres et sessions de formation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                {React.cloneElement(event.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Calendar size={14} />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <Globe size={14} />
                {event.location}
              </div>
              <button className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-900 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                S'inscrire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Placeholder Logos */}
          <div className="text-2xl font-black text-slate-900">GOOGLE</div>
          <div className="text-2xl font-black text-slate-900">MICROSOFT</div>
          <div className="text-2xl font-black text-slate-900">ORANGE</div>
          <div className="text-2xl font-black text-slate-900">META</div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Rejoignez la communauté</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Développez vos compétences numériques avec Open! et faites partie de la nouvelle génération de leaders tech.
            </p>
            <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl">
              Devenir membre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">O!</div>
              <span className="text-2xl font-bold tracking-tighter">OPEN!</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Construire la génération numérique en formant les jeunes aux compétences de demain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-all text-slate-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-all text-slate-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-all text-slate-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">A propos</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programmes</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>contact@open-community.org</li>
              <li>+221 77 000 00 00</li>
              <li>Dakar, Sénégal</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Open! Community. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-600">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <WhatWeDo />
        <Programs />
        <Impact />
        <Community />
        <Events />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
