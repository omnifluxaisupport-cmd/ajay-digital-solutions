import BookingForm from "./BookingForm";
export default function LabDemo() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              LifeCare <span className="text-blue-600">Diagnostics</span>
            </h1>
            <p className="text-xs text-gray-500">
              Accurate • Reliable • Trusted
            </p>
          </div>

          <div className="hidden md:flex gap-7 text-sm font-medium">
            <a href="#tests">Tests</a>
            <a href="#packages">Packages</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="tel:+917982957296"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>

        </div>
      </nav>


      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-blue-600 font-bold tracking-wide">
              ADVANCED PATHOLOGY & DIAGNOSTICS
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Trusted Testing.
              <span className="text-blue-600">
                {" "}Better Health.
              </span>
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Accurate laboratory testing with convenient home sample
              collection and easy access to your reports.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#packages"
                className="bg-blue-600 text-white px-7 py-3 rounded-xl font-bold"
              >
                View Health Packages
              </a>

              <a
                href="https://wa.me/917982957296"
                className="bg-green-600 text-white px-7 py-3 rounded-xl font-bold"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </div>


          {/* Hero Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border">

            <div className="text-7xl text-center">
              🧪
            </div>

            <h3 className="text-2xl font-bold text-center mt-5">
              Book Your Test
            </h3>

            <p className="text-center text-gray-500 mt-2">
              Home sample collection available
            </p>

            <div className="mt-7 space-y-4">

              <BookingForm />

            </div>

          </div>

        </div>
      </section>


      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 border rounded-2xl text-center">
            <div className="text-4xl">🎯</div>
            <h3 className="font-bold mt-4">Accurate Testing</h3>
            <p className="text-gray-500 text-sm mt-2">
              Reliable laboratory testing.
            </p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="text-4xl">🏠</div>
            <h3 className="font-bold mt-4">Home Collection</h3>
            <p className="text-gray-500 text-sm mt-2">
              Convenient sample collection at home.
            </p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="text-4xl">⚡</div>
            <h3 className="font-bold mt-4">Fast Reports</h3>
            <p className="text-gray-500 text-sm mt-2">
              Easy and convenient report access.
            </p>
          </div>

          <div className="p-6 border rounded-2xl text-center">
            <div className="text-4xl">🔒</div>
            <h3 className="font-bold mt-4">Private & Secure</h3>
            <p className="text-gray-500 text-sm mt-2">
              Patient information handled securely.
            </p>
          </div>

        </div>

      </section>


      {/* Tests */}
      <section id="tests" className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <p className="text-blue-600 font-bold">
              LABORATORY TESTS
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Popular Tests
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              ["🩸", "Complete Blood Count", "CBC"],
              ["🍬", "Blood Sugar", "Diabetes"],
              ["❤️", "Lipid Profile", "Cholesterol"],
              ["🦋", "Thyroid Profile", "Thyroid"],
              ["🧬", "Liver Function Test", "LFT"],
              ["🫘", "Kidney Function Test", "KFT"],
            ].map(([icon, name, category]) => (

              <div
                key={name}
                className="bg-white p-6 rounded-2xl border hover:shadow-lg transition"
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="font-bold text-xl mt-4">
                  {name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {category} testing
                </p>

                <a
                  href="https://wa.me/917982957296?text=Hello%20LifeCare%20Diagnostics,%20I%20want%20to%20book%20a%20lab%20test."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-semibold mt-4"
                >
                 Book Test →
               </a>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Packages */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <p className="text-blue-600 font-bold">
            HEALTH PACKAGES
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Popular Health Packages
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-7 mt-12">

          <div className="border rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Basic Health Checkup
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-5">
              ₹999
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✓ Complete Blood Count</li>
              <li>✓ Blood Sugar</li>
              <li>✓ Liver Function</li>
              <li>✓ Kidney Function</li>
              <li>✓ Lipid Profile</li>
            </ul>

            <a
  href="https://wa.me/917982957296?text=Hello%20LifeCare%20Diagnostics,%20I%20want%20to%20book%20a%20health%20package."
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-bold"
>
  Book Package
</a>

          </div>


          <div className="border-2 border-blue-600 rounded-3xl p-8 shadow-lg">

            <p className="text-blue-600 font-bold">
              MOST POPULAR
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Complete Health Checkup
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-5">
              ₹1,999
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✓ CBC</li>
              <li>✓ Diabetes Profile</li>
              <li>✓ Thyroid Profile</li>
              <li>✓ Liver Function</li>
              <li>✓ Kidney Function</li>
              <li>✓ Lipid Profile</li>
            </ul>

            <button className="w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-bold">
              Book Package
            </button>

          </div>


          <div className="border rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Senior Citizen Package
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-5">
              ₹2,499
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✓ CBC</li>
              <li>✓ Diabetes</li>
              <li>✓ Thyroid</li>
              <li>✓ Liver</li>
              <li>✓ Kidney</li>
              <li>✓ Vitamin Tests</li>
            </ul>

            <button className="w-full mt-7 bg-blue-600 text-white py-3 rounded-xl font-bold">
              Book Package
            </button>

          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="bg-gray-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-600 font-bold">
            ABOUT OUR LAB
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Quality Testing You Can Trust
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            LifeCare Diagnostics is a demo laboratory website created
            to demonstrate how a modern pathology business can present
            its services online.
          </p>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-blue-600 text-white rounded-3xl p-10 md:p-14 text-center">

          <h2 className="text-4xl font-bold">
            Need a Health Test?
          </h2>

          <p className="mt-4 text-blue-100">
            Book your test or contact our team for more information.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="tel:+917982957296"
              className="bg-white text-blue-600 px-7 py-3 rounded-xl font-bold"
            >
              📞 Call Us
            </a>

            <a
              href="https://wa.me/917982957296"
              className="bg-green-500 text-white px-7 py-3 rounded-xl font-bold"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 text-center">

        <h3 className="text-xl font-bold">
          LifeCare Diagnostics
        </h3>

        <p className="text-gray-400 mt-2">
          Pathology • Diagnostics • Home Sample Collection
        </p>

        <p className="text-gray-500 text-sm mt-5">
          Demo Website by Ajay Digital & IT Solutions
        </p>

      </footer>

    </main>
  );
}