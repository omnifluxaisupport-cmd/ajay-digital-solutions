"use client";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const techStack = [
    "React", "Next.js", "TailwindCSS", "Node.js", "TypeScript", 
    "Figma", "Vercel", "AI Solutions", "SEO", "Google Business"
  ];

  return (
    <main className="min-h-screen bg-[#fafcff] text-slate-900 relative overflow-hidden font-sans">
      
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Navbar */}
      <nav className="fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-blue-900/5 rounded-2xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter">
            Ajay<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Work</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917982957296"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 md:pt-56 md:pb-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
            We Build Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              Experiences That Scale.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            We are a premium digital agency specializing in high-performance web development, AI automation, and bespoke IT solutions for ambitious brands.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-blue-600/20">
              View Our Work
            </a>
            <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-200/50">
              Book a Consultation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Infinite Marquee */}
      <section className="py-10 border-y border-slate-200/60 bg-white/50 backdrop-blur-sm overflow-hidden">
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-16 px-6 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="text-xl md:text-2xl font-black text-slate-300 uppercase tracking-widest select-none hover:text-blue-500 transition-colors duration-300">
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="services" className="px-6 py-24 md:py-32 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.p variants={fadeInUp} className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Expertise</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black tracking-tight">Capabilities & Solutions</motion.h2>
            </div>
            <motion.p variants={fadeInUp} className="text-slate-500 font-medium max-w-md text-lg">
              End-to-end digital services crafted with precision, modern tech, and business growth in mind.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Modern Web Apps", desc: "Lightning-fast, highly responsive React & Next.js applications built for scale." },
              { icon: "🤖", title: "AI Integrations", desc: "Custom AI automation and workflow integrations to reduce your manual overhead." },
              { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, conversion-optimized interfaces that your users will absolutely love." },
              { icon: "📈", title: "Technical SEO", desc: "Advanced search engine optimization to rank your business at the very top." },
              { icon: "💬", title: "WhatsApp Business", desc: "Automated communication setups to handle leads and customer support 24/7." },
              { icon: "🛡️", title: "Cloud & IT Support", desc: "Reliable hosting, domain management, and technical infrastructure support." }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl mb-6 relative z-10 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed relative z-10">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Selected Work */}
      <section id="portfolio" className="px-6 py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Dark abstract blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="mb-16">
            <motion.p variants={fadeInUp} className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Selected Work</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black tracking-tight">Featured Projects</motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.a variants={fadeInUp} href="/lab-demo" className="group block relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-700">
                🧬
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                <p className="text-blue-400 font-bold text-sm mb-2">HEALTHCARE</p>
                <h3 className="text-3xl font-bold mb-2">Pathology Lab System</h3>
                <p className="text-slate-300 font-medium">A complete digital booking platform.</p>
              </div>
            </motion.a>

            <div className="flex flex-col gap-8">
              {/* Project 2 */}
              <motion.div variants={fadeInUp} className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-purple-500 transition-colors duration-500 flex-1 flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-slate-900 group-hover:scale-105 transition-transform duration-700 z-0"></div>
                <div className="relative z-10 p-8 w-full flex justify-between items-center">
                  <div>
                    <p className="text-purple-400 font-bold text-sm mb-2">TELECOM</p>
                    <h3 className="text-2xl font-bold mb-2">ISP Dashboard</h3>
                    <p className="text-slate-300 font-medium">Broadband plans & leads.</p>
                  </div>
                  <div className="text-6xl">📡</div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={fadeInUp} className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-orange-500 transition-colors duration-500 flex-1 flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-slate-900 group-hover:scale-105 transition-transform duration-700 z-0"></div>
                <div className="relative z-10 p-8 w-full flex justify-between items-center">
                  <div>
                    <p className="text-orange-400 font-bold text-sm mb-2">HOSPITALITY</p>
                    <h3 className="text-2xl font-bold mb-2">E-Restaurant</h3>
                    <p className="text-slate-300 font-medium">Digital menu & ordering.</p>
                  </div>
                  <div className="text-6xl">🍔</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing & Testimonials Combined into a Sleek Layout */}
      <section id="pricing" className="px-6 py-24 md:py-32 relative bg-slate-50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black tracking-tight">Transparent Pricing</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 font-medium mt-4 max-w-xl mx-auto">No hidden fees. Just premium development tailored to your budget.</motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Landing Page", price: "₹999", desc: "Perfect for a quick online presence.", features: ["Single Page Design", "Mobile Responsive", "WhatsApp CTA"] },
              { title: "Business Pro", price: "₹2,999", desc: "The standard for growing companies.", features: ["Multi-page Architecture", "SEO Optimized", "Lead Gen Forms", "Fast Performance"], popular: true },
              { title: "Enterprise", price: "₹5,999", desc: "Full-scale custom digital solution.", features: ["Bespoke UI/UX Design", "Custom Integrations", "Advanced Animations", "Priority Support"] }
            ].map((plan, i) => (
              <motion.div key={i} variants={fadeInUp} className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10' : 'border-slate-200'}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold px-4 py-1 rounded-full text-sm tracking-wide">RECOMMENDED</div>}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-slate-500 text-sm font-medium h-10">{plan.desc}</p>
                <p className="text-5xl font-black my-6 text-slate-900">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                      <span className="text-blue-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className={`block w-full py-4 text-center rounded-2xl font-bold transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Select Plan
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modern Contact Footer CTA */}
      <section id="contact" className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 -skew-y-3 transform origin-top-left -z-10"></div>
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-black tracking-tight mb-6">Ready to scale?</motion.h2>
          <motion.p variants={fadeInUp} className="text-blue-100 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Stop losing customers to outdated designs. Let's build a digital experience that converts.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
              Start a Conversation →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter text-white">
            Ajay<span className="text-blue-500">Digital</span>
          </div>
          <div className="flex gap-8 font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="text-sm">
            © 2026 Ajay Digital. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917982957296" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </main>
  );
}