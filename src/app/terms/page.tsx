"use client";

export default function Terms() {
  return (
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
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <a
              href="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 bg-[#fcc142] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#284185] font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Automera Systems
              </span>
            </a>

            {/* Centered Navigation Links - Removed for secondary pages */}
            <div className="hidden md:flex space-x-8">
              {/* Navigation links removed from secondary pages */}
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

      {/* Terms and Conditions Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
              Terms &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcc142] to-[#777cb8]">
                Conditions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using our AI receptionist
              services.
            </p>
          </div>

          {/* Terms and Conditions Content */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Last Updated */}
                <div className="text-center pb-6 border-b border-white/20">
                  <p className="text-gray-300 text-sm">
                    <strong>Last Updated:</strong> August 2025
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing our website, submitting your information, or
                    using our services, you agree to be bound by these Terms of
                    Service. If you do not agree to these terms, please do not
                    use our website or services.
                  </p>
                </div>

                {/* Services Provided */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    2. Services Provided
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automera Systems provides AI-powered automation solutions
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      AI Receptionist (virtual call answering & appointment
                      booking)
                    </li>
                    <li>AI Chatbot (multichannel customer support)</li>
                    <li>
                      Custom AI Automations (CRM integrations, workflow
                      automations, and tailored business solutions)
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    All services are subject to availability and ongoing
                    evaluation of client suitability.
                  </p>
                </div>

                {/* User Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      Provide accurate and truthful information when filling out
                      forms
                    </li>
                    <li>
                      Only use our services for lawful and ethical purposes
                    </li>
                    <li>
                      Refrain from abusing, spamming, or attempting to exploit
                      the systems provided
                    </li>
                  </ul>
                </div>

                {/* SMS Messaging & Communication */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    4. SMS Messaging & Communication
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By submitting your phone number through our forms or
                    website, you consent to receive SMS messages from Automera
                    Systems related to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Appointment reminders</li>
                    <li>Consultation follow-ups</li>
                    <li>Service updates and inquiries</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Message frequency varies.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Standard message and data rates may apply.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You can opt out at any time by replying STOP to any message.
                    For assistance, reply HELP or email us at{" "}
                    <a
                      href="mailto:issa@automerasystems.com"
                      className="text-[#fcc142] hover:underline"
                    >
                      issa@automerasystems.com
                    </a>
                    .
                  </p>
                </div>

                {/* Third-Party Tools */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    5. Third-Party Tools
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may use third-party tools such as GoHighLevel CRM or
                    automation platforms (Make.com, n8n, etc.) to manage
                    communication and service delivery. Your information is
                    stored securely and used solely for the purposes outlined in
                    our{" "}
                    <a
                      href="/privacy"
                      className="text-[#fcc142] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    6. Data Protection
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We are committed to protecting your data. For full details
                    on how your data is collected, used, and stored, please
                    refer to our{" "}
                    <a
                      href="/privacy"
                      className="text-[#fcc142] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Automera Systems is not liable for any indirect, incidental,
                    or consequential damages resulting from the use of our
                    services. Results may vary, and no guarantees are implied
                    unless stated in a specific service agreement.
                  </p>
                </div>

                {/* Modifications */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    8. Modifications
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to update or modify these terms at any
                    time. Any changes will be posted on this page with an
                    updated effective date.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    9. Governing Law
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These terms shall be governed by and interpreted in
                    accordance with the laws of Lebanon.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these terms, please contact
                    us at{" "}
                    <a
                      href="mailto:issa@automerasystems.com"
                      className="text-[#fcc142] hover:underline"
                    >
                      issa@automerasystems.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Contact Button */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#fcc142]/30 hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
