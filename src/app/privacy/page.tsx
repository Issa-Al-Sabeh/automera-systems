"use client";

export default function Privacy() {
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

      {/* Privacy Policy Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcc142] to-[#777cb8]">
                Policy
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Last Updated */}
                <div className="text-center pb-6 border-b border-white/20">
                  <p className="text-gray-300 text-sm">
                    <strong>Last Updated:</strong> August 2025
                  </p>
                </div>

                {/* What Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    1. What Information We Collect
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When you interact with our website or submit a form, we may
                    collect the following information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Your name</li>
                    <li>Your email address</li>
                    <li>Your phone number</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information you provide to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Book and manage consultations</li>
                    <li>
                      Send SMS updates, reminders, or responses to inquiries
                    </li>
                    <li>
                      Follow up via text or email to assist with scheduling or
                      answering questions
                    </li>
                  </ul>
                </div>

                {/* Text Messaging & Consent */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    3. Text Messaging & Consent
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By submitting your information, you consent to receive SMS
                    messages from Automera Systems related to appointment
                    confirmations, scheduling assistance, and general inquiries.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Message frequency varies. Standard message and data rates
                    may apply. You can opt out at any time by replying STOP to
                    any SMS. For assistance, reply HELP or email us at{" "}
                    <a
                      href="mailto:issa@automerasystems.com"
                      className="text-[#fcc142] hover:underline"
                    >
                      issa@automerasystems.com
                    </a>
                    .
                  </p>
                </div>

                {/* How We Share Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    4. How We Share Your Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell or share your personal information with any
                    third parties for marketing purposes.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your contact information may be stored in our internal
                    systems (such as GoHighLevel CRM) strictly for business
                    purposes like booking and communication.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    No mobile information will be shared with third
                    parties/affiliates for marketing/promotional purposes.
                    Information sharing to subcontractors in support services,
                    such as customer service, is allowed. All the above
                    categories exclude text messaging originator opt-in data and
                    consent; this information will not be shared with any third
                    parties, excluding aggregators and providers of the Text
                    Message service.
                  </p>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We take reasonable steps to protect the personal information
                    you provide from unauthorized access, disclosure, or misuse.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    6. Your Rights
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you wish to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Update or delete your personal information</li>
                    <li>Withdraw your consent</li>
                    <li>Ask questions about our privacy practices</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Please email us at{" "}
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
