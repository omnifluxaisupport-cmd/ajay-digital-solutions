"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Navbar */}
<nav className="border-b bg-white">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* Logo */}
    <a href="#" className="text-2xl font-bold">
      Ajay<span className="text-blue-600">Digital</span>
    </a>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#services" className="hover:text-blue-600 transition">
        Services
      </a>

      <a href="#portfolio" className="hover:text-blue-600 transition">
        Portfolio
      </a>

      <a href="#pricing" className="hover:text-blue-600 transition">
        Pricing
      </a>

      <a href="#contact" className="hover:text-blue-600 transition">
        Contact
      </a>
    </div>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20to%20know%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:block bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold"
    >
      WhatsApp
    </a>

    {/* Mobile WhatsApp */}
    <a
      href="https://wa.me/917982957296"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
    >
      WhatsApp
    </a>

  </div>
</nav>

      {/* Hero */}
<section className="bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

    <div className="max-w-4xl mx-auto text-center">

      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        🚀 DIGITAL & IT SOLUTIONS
      </div>

      <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
        Build Your Business
        <span className="text-blue-600"> Online & Grow Faster</span>
      </h2>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
        Professional websites, AI automation, digital services and
        IT solutions designed for small businesses and startups.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
        >
          🚀 Get Free Demo
        </a>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
        >
          💬 WhatsApp Us
        </a>

      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600">

        <span>✓ Mobile Friendly</span>
        <span>✓ WhatsApp Integration</span>
        <span>✓ Affordable Pricing</span>
        <span>✓ Business Support</span>

      </div>

    </div>

  </div>
</section>

      {/* Services */}
<section id="services" className="bg-white px-6 py-20">
  <div className="max-w-7xl mx-auto">

    <div className="text-center max-w-2xl mx-auto">
      <p className="text-blue-600 font-semibold tracking-wide">
        WHAT WE DO
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        Digital Services For Your Business
      </h2>

      <p className="text-gray-600 mt-5 text-lg">
        Everything you need to build, promote and manage your business online.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

      {/* Website */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl text-3xl">
          🌐
        </div>

        <h3 className="text-xl font-bold mt-6">
          Website Development
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Professional, fast and mobile-friendly websites for businesses.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹1,999
        </p>
      </div>

      {/* Poster */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-purple-50 rounded-xl text-3xl">
          🎨
        </div>

        <h3 className="text-xl font-bold mt-6">
          Poster & Banner Design
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Attractive promotional posters, banners and social media creatives.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹299
        </p>
      </div>

      {/* AI */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-green-50 rounded-xl text-3xl">
          🤖
        </div>

        <h3 className="text-xl font-bold mt-6">
          AI & Automation
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          AI-powered tools and automation solutions to save time and effort.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹1,499
        </p>
      </div>

      {/* Google Business */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-red-50 rounded-xl text-3xl">
          📍
        </div>

        <h3 className="text-xl font-bold mt-6">
          Google Business Setup
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Set up your business presence so customers can find you online.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹499
        </p>
      </div>

      {/* WhatsApp */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-green-50 rounded-xl text-3xl">
          💬
        </div>

        <h3 className="text-xl font-bold mt-6">
          WhatsApp Business Setup
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Business profile, WhatsApp communication and customer setup.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹499
        </p>
      </div>

      {/* IT Support */}
      <div className="group p-7 border border-gray-200 rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-xl text-3xl">
          🖥️
        </div>

        <h3 className="text-xl font-bold mt-6">
          IT & Network Support
        </h3>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Basic IT, networking and technical support for businesses.
        </p>

        <p className="text-blue-600 font-bold mt-5">
          Starting ₹999
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <a
        href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20to%20know%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
      >
        💬 Discuss Your Requirement
      </a>
    </div>

  </div>
</section>

      {/* Portfolio */}
<section id="portfolio" className="bg-gray-50 px-6 py-20">
  <div className="max-w-7xl mx-auto">

    <div className="text-center max-w-2xl mx-auto">
      <p className="text-blue-600 font-semibold tracking-wide">
        OUR WORK
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        Demo Projects
      </h2>

      <p className="text-gray-600 mt-5 text-lg">
        Explore sample websites we can customize for your business.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-7 mt-12">

      {/* Pathology Lab */}
      <a
        href="/lab-demo"
        className="group block bg-white rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >
        <div className="h-40 bg-blue-50 flex items-center justify-center text-7xl">
          🧪
        </div>

        <div className="p-7">
          <p className="text-blue-600 text-sm font-semibold">
            HEALTHCARE
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Pathology Lab
          </h3>

          <p className="text-gray-600 mt-3">
            Professional laboratory website with test booking,
            packages and WhatsApp enquiry.
          </p>

          <span className="inline-block mt-5 text-blue-600 font-bold group-hover:translate-x-1 transition">
            View Live Demo →
          </span>
        </div>
      </a>


      {/* ISP */}
      <div className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <div className="h-40 bg-purple-50 flex items-center justify-center text-7xl">
          📡
        </div>

        <div className="p-7">
          <p className="text-purple-600 text-sm font-semibold">
            INTERNET & ISP
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Broadband Website
          </h3>

          <p className="text-gray-600 mt-3">
            Modern ISP website with plans, speed details,
            connection enquiry and WhatsApp support.
          </p>

          <a
            href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital,%20I%20want%20a%20website%20for%20my%20Internet%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-purple-600 font-bold"
          >
            Request This Demo →
          </a>
        </div>

      </div>


      {/* Restaurant */}
      <div className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <div className="h-40 bg-orange-50 flex items-center justify-center text-7xl">
          🍔
        </div>

        <div className="p-7">
          <p className="text-orange-600 text-sm font-semibold">
            FOOD & RESTAURANT
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Restaurant Website
          </h3>

          <p className="text-gray-600 mt-3">
            Attractive restaurant website with menu,
            contact details and WhatsApp ordering.
          </p>

          <a
            href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital,%20I%20want%20a%20restaurant%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-orange-600 font-bold"
          >
            Request This Demo →
          </a>
        </div>

      </div>

    </div>


    {/* Portfolio CTA */}
    <div className="mt-12 text-center">

      <p className="text-gray-600 mb-4">
        Want a similar website for your business?
      </p>

      <a
        href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20a%20website%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
      >
        🚀 Get Your Website
      </a>

    </div>

  </div>
</section>

      {/* Pricing */}
<section id="pricing" className="bg-gray-50 px-6 py-20">
  <div className="max-w-7xl mx-auto">

    <div className="text-center">
      <p className="text-blue-600 font-semibold">
        SIMPLE PRICING
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Choose Your Service
      </h2>

      <p className="text-gray-600 mt-4">
        Affordable digital solutions for small businesses.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-7 mt-12">

      {/* Starter */}
      <div className="bg-white border rounded-3xl p-8">
        <h3 className="text-2xl font-bold">
          Starter
        </h3>

        <p className="text-4xl font-bold text-blue-600 mt-5">
          ₹999
        </p>

        <p className="text-gray-500 mt-2">
          For small businesses
        </p>

        <ul className="mt-7 space-y-3 text-gray-600">
          <li>✓ One-page website</li>
          <li>✓ Mobile friendly</li>
          <li>✓ WhatsApp button</li>
          <li>✓ Contact section</li>
        </ul>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital,%20I%20am%20interested%20in%20the%20Starter%20website%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Get Started
        </a>
      </div>


      {/* Business */}
      <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-lg">

        <p className="text-blue-600 font-bold">
          MOST POPULAR
        </p>

        <h3 className="text-2xl font-bold mt-2">
          Business
        </h3>

        <p className="text-4xl font-bold text-blue-600 mt-5">
          ₹2,999
        </p>

        <p className="text-gray-500 mt-2">
          For growing businesses
        </p>

        <ul className="mt-7 space-y-3 text-gray-600">
          <li>✓ Multi-section website</li>
          <li>✓ Mobile responsive</li>
          <li>✓ WhatsApp integration</li>
          <li>✓ Contact/enquiry form</li>
          <li>✓ Basic SEO setup</li>
        </ul>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital,%20I%20am%20interested%20in%20the%20Business%20website%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Get Started
        </a>
      </div>


      {/* Premium */}
      <div className="bg-white border rounded-3xl p-8">

        <h3 className="text-2xl font-bold">
          Premium
        </h3>

        <p className="text-4xl font-bold text-blue-600 mt-5">
          ₹5,999
        </p>

        <p className="text-gray-500 mt-2">
          For professional businesses
        </p>

        <ul className="mt-7 space-y-3 text-gray-600">
          <li>✓ Advanced website</li>
          <li>✓ Custom design</li>
          <li>✓ WhatsApp integration</li>
          <li>✓ Forms & automation</li>
          <li>✓ SEO optimization</li>
          <li>✓ Priority support</li>
        </ul>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital,%20I%20am%20interested%20in%20the%20Premium%20website package."
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Get Started
        </a>

      </div>

    </div>
  </div>
</section>

      {/* Contact */}
<section id="contact" className="bg-gray-50 px-6 py-20">
  <div className="max-w-5xl mx-auto">

    <div className="text-center">
      <p className="text-blue-600 font-semibold">
        CONTACT US
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Let's Build Something Great
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Need a website, digital service, AI automation or IT support?
        Contact us and get a free consultation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-12">

      {/* WhatsApp */}
      <div className="bg-white rounded-2xl p-8 border">
        <div className="text-4xl">💬</div>

        <h3 className="text-2xl font-bold mt-4">
          WhatsApp
        </h3>

        <p className="text-gray-600 mt-2">
          Chat with us directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20to%20know%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Chat on WhatsApp →
        </a>
      </div>

      {/* Free Consultation */}
      <div className="bg-white rounded-2xl p-8 border">
        <div className="text-4xl">🚀</div>

        <h3 className="text-2xl font-bold mt-4">
          Free Consultation
        </h3>

        <p className="text-gray-600 mt-2">
          Tell us about your business and we'll discuss your requirements.
        </p>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Get Free Consultation →
        </a>
      </div>

    </div>

  </div>
</section>

      {/* Footer */}
<footer className="bg-gray-950 text-white">

  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-bold">
          Ajay<span className="text-blue-500">Digital</span>
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Professional websites, AI solutions, automation and
          IT support for small businesses.
        </p>

        <a
          href="https://wa.me/917982957296?text=Hello%20Ajay%20Digital%20%26%20IT%20Solutions,%20I%20want%20to%20know%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-green-600 px-5 py-2.5 rounded-lg font-semibold"
        >
          💬 WhatsApp Us
        </a>
      </div>


      {/* Quick Links */}
      <div>
        <h4 className="font-bold text-lg">
          Quick Links
        </h4>

        <div className="flex flex-col gap-3 mt-5 text-gray-400">

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-white transition">
            Portfolio
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>
      </div>


      {/* Services */}
      <div>
        <h4 className="font-bold text-lg">
          Our Services
        </h4>

        <div className="flex flex-col gap-3 mt-5 text-gray-400">

          <span>Website Development</span>
          <span>AI & Automation</span>
          <span>Poster & Banner Design</span>
          <span>Google Business Setup</span>
          <span>IT & Network Support</span>

        </div>
      </div>

    </div>


    {/* Bottom */}
    <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

      <p className="text-gray-500 text-sm">
        © 2026 Ajay Digital & IT Solutions. All rights reserved.
      </p>

      <p className="text-gray-500 text-sm">
        Website • AI • Automation • IT Support
      </p>

    </div>

  </div>

</footer>

    </main>
  );
}