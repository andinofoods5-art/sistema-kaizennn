/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Crown, 
  Gem, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Layers,
  CheckCircle2,
  Lock,
  ChevronDown
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = ["hero", "valor", "vision", "planes", "catalogo", "opportunity"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const coursesValue = [
    { title: "E-commerce Mastery (Original)", price: "$3,000", author: "Top Author Global", category: "Comercio Electrónico" },
    { title: "Inteligencia Artificial Pro", price: "$2,800", author: "Tech Visionary", category: "IA Avanzada" },
    { title: "Biohacking & Salud Elite", price: "$1,900", author: "Medical Guru", category: "Salud & Biohacking" },
    { title: "Content Creation Secrets", price: "$2,500", author: "Referente Media", category: "Creación de Contenido" },
    { title: "Real Estate Digital Elite", price: "$2,400", author: "Inversionista Pro", category: "Bienes Raíces" },
    { title: "High Ticket Sales Master", price: "$2,600", author: "Closer Pro", category: "Ventas High Ticket" },
    { title: "Escalado de Agencias Kaizen", price: "$2,800", author: "Sistemas Pro", category: "Sistemas & Agencias" },
    { title: "Inversión & Cripto Elite", price: "$2,200", author: "Master Finance", category: "Finanzas Elite" },
  ];

  const navLinks = [
    { id: "hero", label: "Inicio" },
    { id: "valor", label: "Valor" },
    { id: "vision", label: "Vision" },
    { id: "planes", label: "Planes" },
    { id: "catalogo", label: "Catalogo" },
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-gold selection:text-black scroll-smooth">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <Crown className="w-5 h-5 text-black" />
            </div>
            <span className="font-tech text-xl font-bold tracking-widest uppercase">
              Sistema <span className="text-gold">Kaizen</span>
            </span>
          </div>
          
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 relative py-2 ${
                  activeSection === link.id ? "text-gold" : "text-white/40 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="px-6 py-2 border border-gold/30 text-gold/50 text-[10px] font-bold uppercase tracking-[0.2em] italic">
            El Plan Más Exclusivo
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/luxury_hero_bg_1779089576717.png" 
            alt="Luxury Knowledge" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-tech text-sm tracking-[0.3em] uppercase">Sistema Kaizen Presenta</span>
              <div className="ml-4 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
                <span className="text-gold text-[8px] uppercase tracking-widest font-bold">Bajo Rigurosa Selección</span>
              </div>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl leading-tight mb-8 title-reveal">
              Inversión de <span className="text-gold italic">Medio Millón</span> en Conocimiento Elite
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed lg:border-l lg:border-gold/30 lg:pl-8">
              Has llegado a la cúspide de <span className="text-white font-tech uppercase tracking-widest">Sistema Kaizen</span>. No es formación, es el traspaso de un legado intelectual valorado en más de <span className="text-gold font-bold">quinientos mil dólares</span> en activos exclusivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a 
                href="https://catalogoskaizen.my.canva.site/hm"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 py-5 font-bold uppercase tracking-[0.2em] hover:bg-gold-light transition-all overflow-hidden text-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto"
              >
                <span className="relative z-10">Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>

              <a 
                href="https://kaizen-tau-coral.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 border border-gold/50 text-gold px-10 py-5 font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all text-sm w-full sm:w-auto"
              >
                <span>Ver Planes y Precios</span>
                <Gem className="w-4 h-4" />
              </a>
              
              <div className="hidden lg:flex items-center gap-4 text-white/40 font-tech uppercase text-[10px] tracking-widest border-l border-white/10 pl-8">
                <ShieldCheck className="w-6 h-6 text-gold/50" />
                <span>Validado por expertos del sector</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-y border-white/10 bg-white/[0.02]" id="valor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display text-gold mb-4 uppercase tracking-tighter">Medio Millón</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-tech">Inversión Real en Activos</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display text-gold mb-4 uppercase tracking-tighter">Tres Mil</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-tech">Valor Promedio por Módulo</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display text-gold mb-4">∞</div>
              <p className="text-white/40 uppercase tracking-widest text-sm font-tech">Retorno sobre el Conocimiento</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 overflow-hidden" id="vision">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-gold/5 border border-gold/20 flex items-center justify-center rounded-2xl relative z-10"
              >
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-md">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center group hover:border-gold/40 transition-all">
                       <Gem className={`w-8 h-8 ${i % 2 === 0 ? 'text-gold' : 'text-white/20'}`} />
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
            </div>

            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Dominio Total del Mercado</span>
              <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                El <span className="italic">Nivel Infinito</span> del Emprendimiento.
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                Hemos extraído los secretos de los autores más representativos del planeta. Desde algoritmos de IA hasta infraestructuras de E-commerce masivas, salud de elite y creación de contenido viral. Todo en su formato original, sin filtros.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Líderes Globales en E-commerce y Ventas Online",
                  "Estrategias de Inteligencia Artificial Avanzada",
                  "Optimización de Salud y Biohacking de Elite",
                  "Protocolos de Creación de Contenido Viral",
                  "Inversión en Real Estate y Bienes Raíces",
                  "Sistemas de Ventas High Ticket y Cierre",
                  "Arquitectura de Negocios y Sistemas Kaizen"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -20, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-white/80 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios Section */}
      <section id="planes" className="py-32 border-t border-white/5 bg-gradient-to-b from-black to-gold/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl mb-6">Planes del <span className="text-gold italic">Sistema Kaizen</span></h2>
            <p className="text-white/40 uppercase tracking-[0.4em] text-[10px]">Selecciona tu nivel de entrada al conocimiento elite</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                tier: "Mensual",
                price: "$147",
                period: "/mes",
                desc: "Acceso total a la bóveda de conocimientos durante 30 días.",
                features: ["Todo el Catálogo", "IA & E-commerce", "Soporte Standard", "Actualizaciones Mensuales"],
                cta: "Comenzar Ahora",
                highlight: false
              },
              {
                tier: "Anual",
                price: "$997",
                period: "/año",
                desc: "El camino del visionario. Ahorra más del 40% con acceso anual.",
                features: ["Todo el Catálogo", "Mentorías Grupales", "Soporte Prioritario", "Certificación Kaizen", "2 Meses Bonificados"],
                cta: "Acceso Preferente",
                highlight: true
              },
              {
                tier: "Temporada Infinita",
                price: "Consultar",
                period: "/Mastery",
                desc: "Acceso Vitalicio. El legado completo de Sistema Kaizen para siempre.",
                features: ["Propiedad Intelectual", "Mentoría 1-a-1", "Soporte VIP 24/7", "Networking de Elite", "Acceso a Eventos Físicos"],
                cta: "Aplicar Hoy",
                highlight: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`p-10 border ${plan.highlight ? 'border-gold bg-gold/5 ring-1 ring-gold/50' : 'border-white/10 bg-white/[0.02]'} flex flex-col`}
              >
                {plan.highlight && (
                  <div className="bg-gold text-black text-[10px] font-bold uppercase tracking-widest py-1 px-4 self-start mb-6 rounded-full">
                    Más Recomendado
                  </div>
                )}
                <h3 className="font-display text-2xl mb-2">{plan.tier}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-tech font-bold">{plan.price}</span>
                  <span className="text-white/30 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/50 text-sm mb-8 leading-relaxed mb-auto italic">"{plan.desc}"</p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all ${
                  plan.highlight 
                  ? 'bg-gold text-black hover:bg-white' 
                  : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24 bg-white/[0.01]" id="catalogo">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-white/10" />
            <Gem className="w-5 h-5 text-gold/30" />
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4 italic">Bóveda de Activos Intelectuales</h2>
          <p className="text-white/40 uppercase tracking-[0.4em] text-[10px]">Acceso Reservado a Propietarios de la Temporada Infinita</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesValue.map((course, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-black border border-white/10 rounded-sm group hover:border-gold/50 transition-all cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity">
                <Lock className="w-6 h-6 text-gold" />
              </div>
              <span className="text-[10px] text-gold uppercase tracking-widest mb-2 block">{course.category}</span>
              <h3 className="font-display text-xl mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-6">Por {course.author}</p>
              <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-6">
                <span className="text-white/30 text-[10px] uppercase truncate mr-2">Valor Estimado</span>
                <span className="text-2xl font-tech font-bold text-white group-hover:text-gold transition-colors">{course.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <p className="text-white/30 text-sm max-w-2xl mx-auto italic">
            "Para unirte a la Temporada Infinita, no solo necesitas el capital, necesitas la mentalidad capaz de sostener medio millón de dólares en conocimiento activo."
          </p>
        </div>
      </section>

      {/* Opportunity Cost Section */}
      <section id="opportunity" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                El Costo de <span className="italic">No Estar</span>.
              </h2>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Ignorar la Temporada Infinita no es solo una decisión financiera; es renunciar a la infraestructura digital que está construyendo las fortunas del mañana. Quienes operan con el conocimiento de hace 12 meses ya están fuera del juego.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-gold text-2xl font-tech mb-2">99.9%</div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Del mercado opera con información desfasada</p>
                </div>
                <div>
                  <div className="text-gold text-2xl font-tech mb-2">0.1%</div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Tiene acceso a estos activos originales</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full bg-white/[0.02] border border-white/10 p-12 rounded-sm relative">
               <div className="absolute top-0 right-0 p-6">
                  <Crown className="w-12 h-12 text-gold/20" />
               </div>
               <p className="font-display text-2xl italic mb-6">"En un mundo saturado de ruido, el silencio de la elite es su activo más caro."</p>
               <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">— Archivos Sistema Kaizen</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kaizen Challenge Section */}
      <section className="py-32 bg-gold/5 border-y border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">
              El Desafío <span className="text-gold italic">Kaizen</span>
            </h2>
            <div className="bg-black/40 border border-gold/30 p-10 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-tech font-light leading-relaxed mb-8">
                "Si encuentras un sistema en el mercado hispano con mayor valor real y curaduría que la <span className="text-gold font-bold">Temporada Infinita</span>, te regalamos <span className="text-white font-bold underline decoration-gold underline-offset-8">un año de acceso total</span> sin preguntas."
              </p>
              <div className="flex items-center justify-center gap-2 text-gold/60 text-xs uppercase tracking-[0.3em]">
                <Gem className="w-4 h-4" />
                <span>Garantía de Supremacía Intelectual</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Summary Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 bg-gold p-1 text-black">
          <div className="bg-black text-white p-12 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-display mb-4 italic">El Eslabón más Alto de Sistema Kaizen</h3>
                <p className="text-white/60 max-w-md">Temporada Infinita no es solo un plan; es la culminación de un imperio de datos, estrategias y activos prohibidos para el mercado masivo.</p>
              </div>
              <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                <div className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Activos Consolidados</div>
                <div className="text-4xl md:text-5xl font-tech font-bold text-gold tracking-widest uppercase">Medio Millón</div>
                <div className="mt-4 text-[10px] text-white/30 uppercase tracking-[0.3em]">En Conocimiento de Elite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <Crown className="w-4 h-4 text-black" />
              </div>
              <span className="font-tech text-sm font-bold tracking-[0.2em] uppercase italic">
                Temporada <span className="text-gold">Infinita</span>
              </span>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed lowercase italic first-letter:uppercase">
              Elevamos el estándar de la educación digital. No vendemos cursos, transferimos imperios de conocimiento.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Legal</h4>
            <ul className="text-white/50 text-xs space-y-4">
              <li><a href="#" className="hover:text-white">Privacidad Elite</a></li>
              <li><a href="#" className="hover:text-white">Transparencia Financiera</a></li>
              <li><a href="#" className="hover:text-white">Acuerdo de Confidencialidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-6">Contacto</h4>
            <div className="text-white/50 text-xs space-y-4">
              <p>Soporte VIP 24/7</p>
              <p className="text-white">concierge@temporadainfinita.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Temporada Infinita. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Encrypted Assets</span>
             </div>
             <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                <span>Multi-Cloud Architecture</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
