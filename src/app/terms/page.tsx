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
                    <strong>Last Updated:</strong> December 2024
                  </p>
                </div>

                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms and Conditions ("Terms") govern your use of
                    Automera Systems' AI receptionist services and website. By
                    accessing or using our services, you agree to be bound by
                    these Terms. If you disagree with any part of these terms,
                    you may not access our services.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    By using our services, you confirm that you have read,
                    understood, and agree to be bound by these Terms. You also
                    confirm that you have the legal capacity to enter into these
                    Terms and that you are at least 18 years old.
                  </p>
                </div>

                {/* Service Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Service Description
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automera Systems provides AI-powered receptionist services
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Automated call answering and routing</li>
                    <li>Appointment scheduling and management</li>
                    <li>Customer inquiry handling</li>
                    <li>24/7 availability and support</li>
                    <li>Multi-language communication capabilities</li>
                    <li>Integration with existing business systems</li>
                  </ul>
                </div>

                {/* User Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    User Responsibilities
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the services only for lawful purposes</li>
                    <li>Not attempt to reverse engineer or hack our systems</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>
                      Not use the services to transmit harmful or malicious
                      content
                    </li>
                  </ul>
                </div>

                {/* Payment Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Payment Terms
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      Our services are offered on a subscription basis with the
                      following payment terms:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>
                        Subscription fees are billed in advance on a monthly or
                        annual basis
                      </li>
                      <li>
                        All fees are non-refundable unless otherwise specified
                      </li>
                      <li>
                        We reserve the right to change pricing with 30 days
                        notice
                      </li>
                      <li>Late payments may result in service suspension</li>
                      <li>
                        Free consultations are limited to one per business
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Service Availability */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Service Availability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to provide 24/7 service availability, we do
                    not guarantee uninterrupted service. Our services may be
                    temporarily unavailable due to maintenance, updates, or
                    technical issues. We will make reasonable efforts to
                    minimize downtime and provide advance notice when possible.
                  </p>
                </div>

                {/* Data and Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Data and Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your privacy is important to us. Our collection and use of
                    personal information is governed by our Privacy Policy,
                    which is incorporated into these Terms by reference. By
                    using our services, you consent to the collection and use of
                    information as described in our Privacy Policy.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, features, and functionality of our services,
                    including but not limited to text, graphics, logos,
                    software, and designs, are owned by Automera Systems and are
                    protected by copyright, trademark, and other intellectual
                    property laws. You may not reproduce, distribute, or create
                    derivative works without our express written consent.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, Automera Systems
                    shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including but not
                    limited to loss of profits, data, or business opportunities.
                    Our total liability shall not exceed the amount paid by you
                    for our services in the 12 months preceding the claim.
                  </p>
                </div>

                {/* Disclaimers */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Disclaimers
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are provided "as is" and "as available" without
                    warranties of any kind. We disclaim all warranties, express
                    or implied, including but not limited to warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement. We do not warrant that our services will
                    be error-free or uninterrupted.
                  </p>
                </div>

                {/* Termination */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Termination
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Either party may terminate these Terms at any time with
                    written notice. Upon termination, your access to our
                    services will cease immediately. We may terminate your
                    access immediately if you violate these Terms. Provisions
                    relating to intellectual property, liability, and dispute
                    resolution shall survive termination.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Governing Law and Dispute Resolution
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms shall be governed by and construed in accordance
                    with the laws of the jurisdiction where Automera Systems is
                    incorporated. Any disputes arising from these Terms shall be
                    resolved through binding arbitration in accordance with the
                    rules of the American Arbitration Association.
                  </p>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We
                    will notify users of any material changes by posting the
                    updated Terms on our website and updating the "Last Updated"
                    date. Your continued use of our services after such changes
                    constitutes acceptance of the new Terms.
                  </p>
                </div>

                {/* Severability */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Severability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable
                    or invalid, that provision will be limited or eliminated to
                    the minimum extent necessary so that these Terms will
                    otherwise remain in full force and effect and enforceable.
                  </p>
                </div>

                {/* Entire Agreement */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Entire Agreement
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms, together with our Privacy Policy and any other
                    agreements referenced herein, constitute the entire
                    agreement between you and Automera Systems regarding the use
                    of our services and supersede all prior agreements and
                    understandings.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions,
                    please contact us:
                  </p>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-300">
                      <strong>Email:</strong> legal@automera-systems.com
                      <br />
                      <strong>Address:</strong> Automera Systems, Legal
                      Department
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
