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
                href="/"
                className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
              >
                Home
              </a>
              <a
                href="/#features"
                className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
              >
                Features
              </a>
              <a
                href="/#about"
                className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
              >
                About
              </a>
              <a
                href="/#faq"
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
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>

                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Automera Systems ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you use our AI receptionist services and visit our website.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#fcc142] mb-2">
                        Personal Information
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may collect personal information that you voluntarily
                        provide to us when you:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 ml-4">
                        <li>Fill out contact forms or consultation requests</li>
                        <li>Sign up for our services</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact our support team</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                      <p className="text-gray-300 leading-relaxed mt-2">
                        This information may include your name, email address,
                        phone number, company name, and any other information
                        you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#fcc142] mb-2">
                        Usage Information
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        We automatically collect certain information about your
                        device and how you interact with our services,
                        including:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 ml-4">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website</li>
                        <li>Service usage patterns and analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Provide and maintain our AI receptionist services</li>
                    <li>Process your consultation requests and inquiries</li>
                    <li>Send you important updates about our services</li>
                    <li>Improve our services and develop new features</li>
                    <li>Respond to your questions and provide support</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except in
                    the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>
                      With service providers who assist us in operating our
                      business
                    </li>
                    <li>
                      To comply with legal requirements or protect our rights
                    </li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Data Security
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the
                    internet is 100% secure, and we cannot guarantee absolute
                    security.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Your Rights and Choices
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Request data portability</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website. You can control cookie
                    settings through your browser preferences. Please note that
                    disabling cookies may affect the functionality of our
                    services.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Third-Party Links
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these external sites. We encourage you to review their
                    privacy policies before providing any personal information.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children under 13. If you believe we have collected such
                    information, please contact us immediately.
                  </p>
                </div>

                {/* International Transfers */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    International Data Transfers
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure that such transfers
                    comply with applicable data protection laws and implement
                    appropriate safeguards to protect your information.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last Updated" date. We
                    encourage you to review this policy periodically.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-300">
                      <strong>Email:</strong> privacy@automera-systems.com
                      <br />
                      <strong>Address:</strong> Automera Systems, Privacy Team
                      <br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
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
