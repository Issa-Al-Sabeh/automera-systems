/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Custom slower smooth scrolling
            document.addEventListener('DOMContentLoaded', function() {
              const links = document.querySelectorAll('a[href^="#"]');
              links.forEach(link => {
                link.addEventListener('click', function(e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href');
                  const targetElement = document.querySelector(targetId);
                  if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 80;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 2000; // 2 seconds for slower scrolling
                    let start = null;
                    
                    function animation(currentTime) {
                      if (start === null) start = currentTime;
                      const timeElapsed = currentTime - start;
                      const run = ease(timeElapsed, startPosition, distance, duration);
                      window.scrollTo(0, run);
                      if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
                    
                    function ease(t, b, c, d) {
                      t /= d / 2;
                      if (t < 1) return c / 2 * t * t + b;
                      t--;
                      return -c / 2 * (t * (t - 2) - 1) + b;
                    }
                    
                    requestAnimationFrame(animation);
                  }
                });
              });
            });
          `,
        }}
      />
      <div className="min-h-screen bg-[#284185] relative overflow-hidden font-sans">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fcc142' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='60' cy='0' r='2'/%3E%3Ccircle cx='0' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Extended Geometric Background Shapes */}
        <div className="absolute inset-0">
          {/* Large Blue Triangle - Top Right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#284185] to-[#777cb8] transform rotate-45 opacity-80"></div>

          {/* Medium Blue Shape - Bottom Left */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#777cb8] to-[#284185] transform -rotate-12 opacity-60"></div>

          {/* Small Accent Shape - Top Left */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#fcc142] transform rotate-45 opacity-20"></div>

          {/* Additional Geometric Shapes Throughout */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-[#777cb8] to-[#284185] transform rotate-12 opacity-40"></div>
          <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-[#284185] to-[#777cb8] transform -rotate-45 opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#fcc142] transform rotate-30 opacity-15"></div>
          <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-gradient-to-r from-[#777cb8] to-[#fcc142] transform -rotate-12 opacity-25"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#fcc142]/30 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-[#777cb8]/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-8 h-8 bg-[#fcc142]/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/2 left-1/6 w-20 h-20 bg-[#777cb8]/20 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/6 right-2/3 w-14 h-14 bg-[#fcc142]/35 rounded-full animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/6 right-1/5 w-10 h-10 bg-[#284185]/40 rounded-full animate-pulse"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Logo Section */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#fcc142] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-[#284185] font-bold text-lg">A</span>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">
                  Automera Systems
                </span>
              </div>

              {/* Centered Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#faq"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  FAQ
                </a>
              </div>

              {/* CTA Button */}
              <button className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Content */}
              <div className="text-left">
                {/* Spacing */}
                <div className="mb-8"></div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Your AI Receptionist —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcc142] to-[#777cb8]">
                    Always On, Always Ready
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  Never miss a client again. Automera&apos;s AI Receptionist
                  answers calls, books appointments, and delivers a professional
                  first impression — 24/7.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#fcc142]/30 hover:scale-105 flex items-center justify-center">
                    Book a Free Consultation
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button className="border-2 border-[#777cb8] hover:bg-[#777cb8] hover:text-white text-[#777cb8] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        AI Active
                      </div>
                      <div className="text-gray-400 text-xs">Ready to help</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        24/7 Available
                      </div>
                      <div className="text-gray-400 text-xs">Never offline</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        Multi-Language
                      </div>
                      <div className="text-gray-400 text-xs">
                        Global support
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden">
                {/* Main Visual Container */}
                <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-[#284185]/20 to-[#777cb8]/20 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden mx-auto">
                  {/* Phone Interface Mockup */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#284185]/50 to-[#777cb8]/50 rounded-2xl backdrop-blur-sm border border-[#fcc142]/30 p-4 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#fcc142] rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#284185]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            AI Receptionist
                          </div>
                          <div className="text-[#fcc142] text-sm flex items-center">
                            <div className="w-2 h-2 bg-[#fcc142] rounded-full mr-2 animate-pulse"></div>
                            Online • Ready to help
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3 overflow-hidden">
                      <div className="bg-[#fcc142]/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "Hi! I'd like to book an appointment for tomorrow."
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/30 rounded-2xl p-3 max-w-[75%] ml-auto">
                        <div className="text-white text-xs">
                          "Perfect! I have availability at 2 PM or 4 PM. Which
                          works better?"
                        </div>
                      </div>
                      <div className="bg-[#fcc142]/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "2 PM sounds great!"
                        </div>
                      </div>
                      <div className="bg-[#284185]/50 rounded-2xl p-3 border border-[#fcc142]/30">
                        <div className="text-[#fcc142] text-xs font-semibold flex items-center">
                          <svg
                            className="w-3 h-3 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="truncate">
                            Appointment booked for tomorrow at 2 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#fcc142]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* About Automera Systems */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                About <span className="text-[#fcc142]">Automera Systems</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                At Automera Systems, we believe no business should lose clients
                because of missed calls or long wait times. That's why we built
                a powerful AI Receptionist designed to streamline your
                operations, reduce costs, and elevate your customer experience.
              </p>
            </div>
          </div>
        </section>

        {/* What is the AI Receptionist */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  What is the{" "}
                  <span className="text-[#fcc142]">AI Receptionist?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Your virtual receptionist that works around the clock. It
                  books appointments directly into your calendar, answers FAQs,
                  captures leads, and ensures every call is answered — even
                  after hours, weekends, and holidays.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-[#fcc142] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#284185] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Never misses a call</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-[#fcc142] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#284185] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      Books appointments instantly
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-[#fcc142] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#284185] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Captures every lead</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#fcc142]/20 to-[#777cb8]/20 rounded-2xl p-8 border border-[#fcc142]/30">
                  <div className="bg-[#284185]/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#fcc142] rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-[#284185]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          AI Receptionist
                        </div>
                        <div className="text-[#fcc142] text-sm">
                          Online • Ready to help
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#fcc142]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "Hi! I'd like to book an appointment for tomorrow."
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "Perfect! I have availability at 2 PM or 4 PM. Which
                          works better for you?"
                        </div>
                      </div>
                      <div className="bg-[#fcc142]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "2 PM sounds great!"
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          ✓ Appointment booked for tomorrow at 2 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Key <span className="text-[#fcc142]">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology designed to transform your customer
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#284185]/30 via-[#777cb8]/20 to-[#284185]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Real-Time Appointment Booking
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Instantly syncs with your calendar.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#777cb8]/30 via-[#284185]/20 to-[#777cb8]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Custom Trained
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Tailored to your services, pricing, and FAQs.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#284185]/30 via-[#777cb8]/20 to-[#284185]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Multi-Language Support
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Handles English, Arabic, Spanish, and more.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#777cb8]/30 via-[#284185]/20 to-[#777cb8]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Ultra-Human Voices
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Natural tone, pacing, and emotion.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#284185]/30 via-[#777cb8]/20 to-[#284185]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Always Available
                  </h3>
                  <p className="text-gray-300 text-sm">
                    24/7 coverage, including holidays.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#777cb8]/30 via-[#284185]/20 to-[#777cb8]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Smart Failover
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Escalates to a human or records messages.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#284185]/30 via-[#777cb8]/20 to-[#284185]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142]/80 to-[#fcc142] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Easy Integrations
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Works with calendars, CRMs, and Zapier/Make.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-[#777cb8]/30 via-[#284185]/20 to-[#777cb8]/30 border border-[#fcc142]/40 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142]/80 to-[#fcc142] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fcc142] transition-colors duration-300">
                    Cost-Saving
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Cuts overhead from missed calls and extra hires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Love It */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Why Businesses <span className="text-[#fcc142]">Love It</span>
              </h2>
            </div>

            {/* Futuristic Small Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Card 1 */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#284185]/40 via-[#777cb8]/20 to-[#284185]/40 border border-[#fcc142]/30 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 via-transparent to-[#fcc142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc142]/20 via-[#777cb8]/10 to-[#fcc142]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fcc142] transition-colors duration-300">
                    Never Miss a Lead
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every call answered, every opportunity captured.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#777cb8]/40 via-[#284185]/20 to-[#777cb8]/40 border border-[#fcc142]/30 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 via-transparent to-[#fcc142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc142]/20 via-[#777cb8]/10 to-[#fcc142]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fcc142] transition-colors duration-300">
                    Lower Costs
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    No need for call centers or extra staff.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#284185]/40 via-[#777cb8]/20 to-[#284185]/40 border border-[#fcc142]/30 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 via-transparent to-[#fcc142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc142]/20 via-[#777cb8]/10 to-[#fcc142]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fcc142] transition-colors duration-300">
                    Boost Revenue
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    More bookings, more clients, more growth.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#777cb8]/40 via-[#284185]/20 to-[#777cb8]/40 border border-[#fcc142]/30 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 via-transparent to-[#fcc142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc142]/20 via-[#777cb8]/10 to-[#fcc142]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fcc142] transition-colors duration-300">
                    Better Experience
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Instant, professional responses every time.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#284185]/40 via-[#777cb8]/20 to-[#284185]/40 border border-[#fcc142]/30 hover:border-[#fcc142] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fcc142]/20 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcc142]/5 via-transparent to-[#fcc142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc142]/20 via-[#777cb8]/10 to-[#fcc142]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fcc142] to-[#fcc142]/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-[#fcc142]/30 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-7 h-7 text-[#284185]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fcc142] transition-colors duration-300">
                    No Tech Skills Needed
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We handle setup & updates for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                <span className="text-[#fcc142]">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors">
                  &ldquo;I don&apos;t trust AI to talk to customers.&rdquo;
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  It&apos;s custom-trained to sound like you. Most callers
                  can&apos;t tell it&apos;s AI. You control exactly what it says
                  and how it responds.
                </div>
              </details>

              <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors">
                  &ldquo;What if it gives wrong info?&rdquo;
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  It only uses the info you provide. If unsure, it transfers to
                  a human or records a message. No guessing, no mistakes.
                </div>
              </details>

              <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors">
                  &ldquo;Do customers prefer humans?&rdquo;
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  Most want fast service. If they need a human touch, the AI
                  transfers instantly. Best of both worlds.
                </div>
              </details>

              <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors">
                  &ldquo;Is it secure?&rdquo;
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  Yes, fully encrypted and GDPR/local compliant. Your data and
                  customer information are completely protected.
                </div>
              </details>

              <details className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors">
                  &ldquo;How fast is setup?&rdquo;
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  Just 2–5 days — you give us info, we handle the rest. No
                  technical setup required on your end.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Global <span className="text-[#fcc142]">Availability</span>
            </h2>
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-[#fcc142] to-[#777cb8] rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-6xl">🌍</div>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Currently available across{" "}
              <span className="text-[#fcc142] font-bold">30+ countries</span>,
              including the USA, UK, Canada, Australia, Germany, France, Italy,
              Spain, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "🇺🇸 USA",
                "🇬🇧 UK",
                "🇨🇦 Canada",
                "🇦🇺 Australia",
                "🇩🇪 Germany",
                "🇫🇷 France",
                "🇮🇹 Italy",
                "🇪🇸 Spain",
              ].map((country, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#fcc142]/30 text-white"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Upgrade Your{" "}
              <span className="text-[#fcc142]">Reception?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Book a free consultation and see how Automera&apos;s AI
              Receptionist can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-12 py-6 rounded-lg font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#fcc142]/30 hover:scale-105">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-[#fcc142] rounded-lg flex items-center justify-center">
                  <span className="text-[#284185] font-bold">A</span>
                </div>
                <span className="text-white font-bold">Automera Systems</span>
              </div>
              <div className="flex space-x-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/automerasystems?igsh=Y3Bqbm9ycmdhejNo&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fcc142] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#fcc142] transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>
                &copy; 2024 Automera Systems. All rights reserved. Your AI
                Receptionist Solution.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
