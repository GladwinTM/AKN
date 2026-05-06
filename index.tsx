import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ArrowRight,
  ChevronDown,
  Star,
  Camera,
  Coffee,
  Mic2,
  Brush
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-[#2C1810]/95 backdrop-blur-md py-3 border-b border-[#C9A96E]/20" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl font-serif font-bold tracking-widest text-[#C9A96E]">AKN</div>
          <div className="text-[9px] uppercase tracking-[0.2em] font-light text-[#E8D5A3]/70">Events • Experiences • Excellence</div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-widest text-[#E8D5A3] hover:text-white transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="shimmer-button bg-[#C9A96E] text-[#2C1810] px-5 py-2 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-xl">
            Contact Us
          </button>
          <div className="flex flex-col gap-1 cursor-pointer group">
            <div className="w-5 h-[1.5px] bg-[#C9A96E]" />
            <div className="w-5 h-[1.5px] bg-[#C9A96E]" />
            <div className="w-5 h-[1.5px] bg-[#C9A96E]" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#C9A96E]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="absolute top-0 right-0 w-64 h-screen bg-[#2C1810] border-l border-[#C9A96E]/20 p-8 flex flex-col gap-8 md:hidden"
          >
            <button className="self-end text-[#C9A96E]" onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#E8D5A3] border-b border-[#C9A96E]/10 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <div className="fixed bottom-10 right-8 z-[60] flex flex-col items-end gap-2 group">
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#25D366]/10 border border-[#25D366]/30 text-[#1a7a40] text-[10px] px-3 py-1.5 rounded-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    >
        Chat with us
    </motion.div>
    <motion.a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fab-pulse-effect bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
        <MessageCircle fill="white" size={24} />
    </motion.a>
  </div>
);

const Hero = () => {
    return (
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-[#2C1810]">
        {/* Subtle Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-30 grayscale"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-glamorous-dinner-at-a-luxurious-restaurant-41480-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/60 via-transparent to-[#2C1810]" />
        </div>
  
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
          >
            <span className="text-[#C9A96E] uppercase tracking-[0.3em] text-[10px] mb-4 block font-light">Premium Event Management</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#E8D5A3] mb-6 leading-tight font-light">
              We Create <br /> 
              <span className="italic text-[#C9A96E]">Unforgettable</span> <br />
              Moments
            </h1>
            <p className="text-[11px] md:text-xs text-[#E8D5A3]/50 uppercase tracking-[0.2em] mb-10 font-light">
              Weddings • Corporate • Social Events <br className="md:hidden" /> Coimbatore & Across Tamil Nadu
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="shimmer-button bg-[#C9A96E] text-[#2C1810] px-10 py-3.5 font-bold uppercase tracking-widest text-[11px] shadow-2xl w-full sm:w-auto">
                Get a Quote
              </button>
              <button className="group border border-[#C9A96E]/30 text-[#C9A96E] px-10 py-3.5 uppercase tracking-widest text-[11px] hover:bg-[#C9A96E]/5 transition-all w-full sm:w-auto">
                Our Work
              </button>
            </div>
            
            <div className="mt-12 inline-flex items-center gap-4">
                 <div className="h-[1px] w-8 bg-[#C9A96E]/20" />
                 <span className="text-[10px] text-[#C9A96E]/40 uppercase tracking-[0.2em]">200+ Events Delivered</span>
                 <div className="h-[1px] w-8 bg-[#C9A96E]/20" />
            </div>
          </motion.div>
        </div>
  
        <div className="absolute bottom-40 w-full flex justify-center gap-1 opacity-20 group">
             {[1, 2, 3].map(i => <div key={i} className="flex-1 h-16 bg-[#4A2C1A] first:ml-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20" />
             </div>)}
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9A96E]/40"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>
    );
};

const QuickStrip = () => (
    <div className="flex bg-[#4A2C1A] border-y border-[#C9A96E]/10">
        {['Weddings', 'Corporate', 'Social'].map(item => (
            <div key={item} className="flex-1 h-20 flex items-center justify-center relative overflow-hidden group border-r border-[#C9A96E]/5 last:border-r-0">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] text-[#E8D5A3] group-hover:text-white transition-colors">{item}</span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
        ))}
    </div>
);

const WhatWeDo = () => {
  const items = [
    { title: "Décor & Design", desc: "Floral, lighting & bespoke themes", icon: Brush, radius: "rounded-full" },
    { title: "Catering", desc: "Curated menus for every taste", icon: Coffee, radius: "rounded-sm" },
    { title: "A/V & Tech", desc: "Sound, visuals & live streaming", icon: Mic2, radius: "rounded-tr-[16px] rounded-bl-[16px]" },
    { title: "Photography", desc: "Candid & traditional coverage", icon: Camera, radius: "rounded-tl-[16px] rounded-br-[16px]" },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
            <span className="text-[#C9A96E] uppercase tracking-[0.2em] text-[10px] font-medium mb-2 block">What We Do</span>
            <h2 className="text-3xl font-serif text-[#1C0F08] mb-4">Full-Service Event Management</h2>
            <div className="w-10 h-[1px] bg-[#C9A96E] mb-4" />
            <p className="text-[11px] text-[#5C3D20] font-light tracking-wide max-w-sm">From concept to execution, every detail handled with elegance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
                <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 flex flex-col items-start"
                >
                    <div className={cn("w-10 h-10 bg-[#2C1810] flex items-center justify-center mb-4 text-[#C9A96E]", item.radius)}>
                        <item.icon size={18} />
                    </div>
                    <h3 className="text-lg font-serif mb-2 text-[#1C0F08] font-semibold">{item.title}</h3>
                    <p className="text-[10px] text-[#8B6840] leading-relaxed font-light">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
    <section id="about" className="bg-[#2C1810] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <span className="text-[#C9A96E] uppercase tracking-[0.2em] text-[10px] font-medium mb-3 block">About Us</span>
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8D5A3] mb-6 leading-tight">
                    Who We <span className="italic text-[#C9A96E] font-normal">Are</span>
                </h2>
                <div className="space-y-6">
                    <div className="h-28 bg-[#4A2C1A] border border-[#C9A96E]/10 rounded-sm flex items-center justify-center relative overflow-hidden group">
                        <img 
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" 
                            alt="Team"
                        />
                        <span className="relative z-10 text-[9px] uppercase tracking-[0.2em] text-[#C9A96E]/40 group-hover:text-white/60 transition-colors">Founder & Team at Work</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#E8D5A3]/60 font-light tracking-wide">
                        AKN Events is Coimbatore's trusted event management team — crafting extraordinary experiences from intimate gatherings to grand celebrations. Every detail is handled with care, creativity, and a personal touch.
                    </p>
                    
                    <div className="flex border-y border-[#C9A96E]/20 py-6">
                        {[
                            { num: "200+", label: "Events" },
                            { num: "5+", label: "Years" },
                            { num: "98%", label: "Satisfaction" }
                        ].map((stat, i) => (
                            <div key={i} className="flex-1 text-center border-r last:border-r-0 border-[#C9A96E]/20">
                                <div className="text-2xl font-serif text-[#C9A96E] font-bold">{stat.num}</div>
                                <div className="text-[9px] uppercase tracking-widest text-[#E8D5A3]/40 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button className="shimmer-button bg-[#C9A96E] text-[#2C1810] flex-1 py-3 text-[10px] uppercase tracking-widest font-bold">Learn More</button>
                        <button className="border border-[#C9A96E]/30 text-[#C9A96E] flex-1 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#C9A96E]/5">Meet the Team</button>
                    </div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative order-1 lg:order-2"
            >
                <div className="aspect-[4/5] bg-[#4A2C1A] border border-[#C9A96E]/20 rounded-sm p-3">
                    <img 
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                        className="w-full h-full object-cover grayscale brightness-75"
                        alt="Event Planning"
                    />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#C9A96E] text-[#2C1810] p-6 shadow-2xl">
                    <div className="text-3xl font-serif font-bold italic mb-1 leading-none">Shyam</div>
                    <div className="text-[9px] uppercase tracking-widest font-bold opacity-60">Founder & Visionary</div>
                </div>
            </motion.div>
        </div>
    </section>
);

const OurWork = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Weddings', 'Corporate', 'Social'];
  
  const projects = [
    { title: "Grand Wedding", sub: "Chennai • 2024", cat: "Weddings", span: true, img: "https://images.unsplash.com/photo-1544161515-4ad6ce6f8340?auto=format&fit=crop&q=80&w=1200" },
    { title: "Corporate Gala", sub: "Coimbatore", cat: "Corporate", span: false, img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
    { title: "Birthday Bash", sub: "Luxury Theme", cat: "Social", span: false, img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" },
    { title: "Sangeet Night", sub: "Madurai • 2024", cat: "Weddings", span: false, img: "https://images.unsplash.com/photo-1519671482749-fd09be4ccebf?auto=format&fit=crop&q=80&w=800" },
    { title: "Baby Shower", sub: "Pastel Theme", cat: "Social", span: false, img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#F5EDD6]">
        <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A96E] uppercase tracking-[0.2em] text-[10px] font-medium mb-3 block">Our Work</span>
            <h2 className="text-3xl font-serif text-[#1C0F08] mb-4">Events We've Crafted</h2>
            <div className="w-10 h-[1px] bg-[#C9A96E]/40 mb-8" />
            
            <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(c => (
                    <button 
                        key={c}
                        onClick={() => setFilter(c)}
                        className={cn(
                            "px-5 py-1.5 text-[10px] uppercase tracking-widest font-medium transition-all rounded-sm",
                            filter === c ? "bg-[#C9A96E] text-[#2C1810]" : "border border-[#8B6840]/30 text-[#8B6840] hover:bg-white/50"
                        )}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {filtered.map((item, i) => (
                    <motion.div 
                        layout
                        key={item.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={cn(
                            "relative overflow-hidden group cursor-pointer aspect-square bg-[#EDE3D0]",
                            item.span && "md:col-span-2 md:aspect-[16/7]"
                        )}
                    >
                        <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={item.title} />
                        <div className="absolute inset-0 bg-[#2C1810]/40 group-hover:bg-[#2C1810]/20 transition-all" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                             <div className="text-sm md:text-lg font-serif text-[#E8D5A3] font-semibold">{item.title}</div>
                             <div className="text-[9px] uppercase tracking-widest text-[#E8D5A3]/50 mt-1">{item.sub}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                 <button className="border border-[#8B6840]/30 text-[#5C3D20] px-10 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#8B6840]/5 transition-all">
                    View All Events
                 </button>
            </div>
        </div>
    </section>
  );
};

const Testimonials = () => (
    <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <span className="text-[#C9A96E] uppercase tracking-[0.2em] text-[10px] font-medium mb-3 block">Our Clients Say</span>
            <h2 className="text-3xl font-serif text-[#1C0F08] mb-4">Kind Words</h2>
            <div className="w-10 h-[1px] bg-[#C9A96E] mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { name: "Priya & Karthik", event: "Wedding • Feb 2024", text: "AKN turned our wedding into something beyond imagination. Every single detail was perfect." },
                    { name: "Ramesh K., Director", event: "Corporate Event • Mar 2024", text: "Flawless execution for our product launch. The décor was absolutely stunning." }
                ].map((t, i) => (
                    <div key={i} className="border-l-4 border-[#C9A96E] p-8 bg-[#FAF6EF]/50">
                        <div className="flex gap-1 mb-4 text-[#C9A96E]">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <p className="text-base md:text-lg font-serif italic text-[#5C3D20] mb-6 leading-relaxed">"{t.text}"</p>
                        <div className="text-xs font-bold text-[#1C0F08] tracking-widest uppercase">{t.name}</div>
                        <div className="text-[10px] text-[#8B6840] uppercase tracking-widest mt-1 opacity-70">{t.event}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#2C1810] flex items-center justify-center flex-col gap-4"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-5xl font-serif font-bold tracking-[0.4em] text-[#C9A96E]"
                    >
                        AKN
                    </motion.div>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        className="h-[1px] bg-[#C9A96E]/40"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const App = () => {
  return (
    <div className="bg-[#FAF6EF] min-h-screen selection:bg-[#C9A96E] selection:text-[#2C1810] relative">
      <SplashScreen />
      <Navbar />
      
      <main>
        <Hero />
        <QuickStrip />
        <WhatWeDo />
        <AboutSection />
        <OurWork />
        <Testimonials />
      </main>

      <WhatsAppButton />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
