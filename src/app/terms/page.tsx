"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useEffect } from "react";

export default function Terms() {
  const { t, tArray } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

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

            {/* Right Side - Language Switcher and Home Button - Desktop Only */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <a
                href="/"
                className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
              >
                {t("nav.home")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-[#fcc142] transition-colors"
            >
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="mobile-menu fixed right-0 top-0 h-full w-80 bg-[#284185] shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#fcc142] transition-colors p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 p-6 space-y-4">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#fcc142] transition-colors font-medium text-lg py-3 border-b border-white/10"
                >
                  {t("nav.home")}
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#fcc142] transition-colors font-medium text-lg py-3 border-b border-white/10"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#fcc142] transition-colors font-medium text-lg py-3 border-b border-white/10"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#fcc142] transition-colors font-medium text-lg py-3 border-b border-white/10"
                >
                  Terms and Conditions
                </a>
              </div>

              {/* Bottom Section */}
              <div className="p-6 border-t border-white/20">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
              {t("terms.title")}
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t("terms.subtitle")}
            </p>
          </div>

          {/* Terms and Conditions Content */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Last Updated */}
                <div className="text-center pb-6 border-b border-white/20">
                  <p className="text-gray-300 text-sm">
                    <strong>{t("terms.lastUpdated")}</strong>
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.acceptance.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t("terms.sections.acceptance.description")}
                  </p>
                </div>

                {/* Services Provided */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.services.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t("terms.sections.services.description")}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {tArray("terms.sections.services.items").map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    {t("terms.sections.services.additional")}
                  </p>
                </div>

                {/* User Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.responsibilities.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t("terms.sections.responsibilities.description")}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {tArray("terms.sections.responsibilities.items").map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </div>

                {/* SMS Messaging & Communication */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.sms.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t("terms.sections.sms.description")}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {tArray("terms.sections.sms.items").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: t("terms.sections.sms.additional"),
                    }}
                  />
                </div>

                {/* Third-Party Tools */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.thirdParty.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t("terms.sections.thirdParty.description")}
                  </p>
                </div>

                {/* Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.dataProtection.title")}
                  </h2>
                  <p
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: t("terms.sections.dataProtection.description"),
                    }}
                  />
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.liability.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t("terms.sections.liability.description")}
                  </p>
                </div>

                {/* Modifications */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.modifications.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t("terms.sections.modifications.description")}
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t("terms.sections.governingLaw.title")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t("terms.sections.governingLaw.description")}
                  </p>
                  <p
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: t("terms.sections.governingLaw.contact"),
                    }}
                  />
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
              {t("terms.backToContact")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
