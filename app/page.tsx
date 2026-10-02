"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const techStack = [
    "React", "Next.js", "Tailwind CSS", "Node.js", "Figma", 
    "Vercel", "AI Solutions", "WordPress", "Google Business", "SEO"
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="border-b dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            Ajay<span className="text-blue-600">Digital</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Portfolio</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Pricing</a>
            <a href="#team" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Team</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            )}

            <a
              href="https://wa.me/917982957296"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden transition-colors duration-300">
        <motion.div 
          className="max-w-7xl mx-auto px-6 py-20 md:py-28"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
              🚀 PROFESSIONAL DIGITAL & IT SOLUTIONS
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Build Your Business
              <span className="text-blue-600 dark:text-blue-500"> Online & Grow Faster</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Premium websites, AI automation, digital services and IT solutions designed to scale small businesses and startups.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                🚀 Get Free Demo
              </a>
              <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/20">
                💬 WhatsApp Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Infinite Marquee */}
      <section className="py-6 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Technologies We Use</p>
        </div>
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-12 px-6 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="text-xl font-bold text-gray-300 dark:text-gray-700 select-none">
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white dark:bg-gray-950 px-6 py-20 transition-colors duration-300">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold tracking-wide">WHAT WE DO</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mt-2">Digital Services For Your Business</motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "🌐", title: "Website Development", desc: "Professional, fast and mobile-friendly websites.", price: "1,999", color: "bg-blue-50 dark:bg-blue-900/20" },
              { icon: "🎨", title: "Poster & Banner Design", desc: "Promotional posters and social media creatives.", price: "299", color: "bg-purple-50 dark:bg-purple-900/20" },
              { icon: "🤖", title: "AI & Automation", desc: "AI-powered tools and automation solutions.", price: "1,499", color: "bg-green-50 dark:bg-green-900/20" },
              { icon: "📍", title: "Google Business Setup", desc: "Set up your business presence online securely.", price: "499", color: "bg-red-50 dark:bg-red-900/20" },
              { icon: "💬", title: "WhatsApp Setup", desc: "Business profile and WhatsApp communication.", price: "499", color: "bg-emerald-50 dark:bg-emerald-900/20" },
              { icon: "🖥️", title: "IT & Network Support", desc: "Basic IT, networking and technical support.", price: "999", color: "bg-orange-50 dark:bg-orange-900/20" }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="group p-7 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className={`w-14 h-14 flex items-center justify-center ${service.color} rounded-xl text-3xl`}>{service.icon}</div>
                <h3 className="text-xl font-bold mt-6">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">{service.desc}</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold mt-5">Starting ₹{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 px-6 py-20 transition-colors duration-300">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold tracking-wide">OUR WORK</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mt-2">Demo Projects</motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-12">
            <motion.a variants={fadeInUp} href="/lab-demo" className="group block bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="h-40 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-7xl">🧪</div>
              <div className="p-7">
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">HEALTHCARE</p>
                <h3 className="text-2xl font-bold mt-2">Pathology Lab</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3">Professional laboratory website with test booking and WhatsApp enquiry.</p>
                <span className="inline-block mt-5 text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-1 transition">View Live Demo →</span>
              </div>
            </motion.a>
            <motion.div variants={fadeInUp} className="group bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="h-40 bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-7xl">📡</div>
              <div className="p-7">
                <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold">INTERNET & ISP</p>
                <h3 className="text-2xl font-bold mt-2">Broadband Website</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3">Modern ISP website with plans, connection enquiry and WhatsApp support.</p>
                <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-purple-600 dark:text-purple-400 font-bold">Request Demo →</a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="h-40 bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-7xl">🍔</div>
              <div className="p-7">
                <p className="text-orange-600 dark:text-orange-400 text-sm font-semibold">FOOD & RESTAURANT</p>
                <h3 className="text-2xl font-bold mt-2">Restaurant Website</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3">Attractive restaurant website with menu, contact and WhatsApp ordering.</p>
                <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-orange-600 dark:text-orange-400 font-bold">Request Demo →</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white dark:bg-gray-950 px-6 py-20 transition-colors duration-300">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold">OUR EXPERTS</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mt-2">Meet the Team</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400 mt-4">We are a passionate team of digital creators, developers, and marketers dedicated to growing your business.</motion.p>
          </div>

          <div className="flex justify-center">
            <motion.div variants={fadeInUp} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-md text-center hover:shadow-xl transition">
              <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white shadow-lg mb-6">
                A
              </div>
              <h3 className="text-2xl font-bold">Ajay Kumar</h3>
              <p className="text-blue-600 dark:text-blue-500 font-semibold mt-1">Founder & Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                With expertise in Web Technologies and AI Solutions, Ajay ensures every project is built to perfection and delivers actual business results.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 dark:bg-gray-900 px-6 py-20 transition-colors duration-300">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
        >
          <div className="text-center">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold">SIMPLE PRICING</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mt-2">Choose Your Service</motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-12">
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-500 mt-5">₹999</p>
              <ul className="mt-7 space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ One-page website</li>
                <li>✓ Mobile friendly</li>
                <li>✓ WhatsApp button</li>
              </ul>
              <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">Get Started</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-950 border-2 border-blue-600 rounded-3xl p-8 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mt-2">Business</h3>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-500 mt-5">₹2,999</p>
              <ul className="mt-7 space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Multi-section website</li>
                <li>✓ WhatsApp integration</li>
                <li>✓ Basic SEO setup</li>
              </ul>
              <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">Get Started</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-500 mt-5">₹5,999</p>
              <ul className="mt-7 space-y-3 text-gray-600 dark:text-gray-400">
                <li>✓ Advanced website</li>
                <li>✓ Custom design</li>
                <li>✓ SEO optimization</li>
              </ul>
              <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">Get Started</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white dark:bg-gray-950 px-6 py-20 transition-colors duration-300">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
          <div className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold">REVIEWS</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mt-2">What Our Clients Say</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahul S.", biz: "Restaurant Owner", review: "Ajay Digital created a beautiful website for my restaurant. Customers can now easily check our menu. Great service!" },
              { name: "Amit K.", biz: "ISP Provider", review: "Very professional and fast delivery. The broadband website they made is generating a lot of new leads for our business." },
              { name: "Dr. Sharma", biz: "Clinic Owner", review: "Affordable and excellent work. They completely digitalized my clinic's presence on Google and gave me a great responsive website." }
            ].map((testi, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="flex text-yellow-500 mb-4">{"★".repeat(5)}</div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{testi.review}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testi.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testi.biz}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-900 px-6 py-20 transition-colors duration-300">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
          <div className="text-center">
            <motion.p variants={fadeInUp} className="text-blue-600 dark:text-blue-500 font-semibold">CONTACT US</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mt-2">Let's Build Something Great</motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message feature will be connected soon!'); }}>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                <textarea rows={4} placeholder="Your Requirement..." className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">Send Message</button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-900/50 flex-1">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold">Chat on WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">Want a quick reply? We are available on WhatsApp.</p>
                <a href="https://wa.me/917982957296" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition">Message on WhatsApp →</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 dark:bg-black text-white border-t border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center md:text-left grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold">Ajay<span className="text-blue-500">Digital</span></h3>
            <p className="text-gray-400 mt-4 leading-relaxed">Professional websites, AI solutions, automation and IT support.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-3 mt-5 text-gray-400">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917982957296" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32" className="w-8 h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </main>
  );
}