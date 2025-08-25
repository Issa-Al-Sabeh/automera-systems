/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [openFAQs, setOpenFAQs] = useState([false, false, false, false, false]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { t, tArray } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleBookConsultation = () => {
    router.push("/contact");
  };

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

  // Handle scroll behavior when navigating from other pages
  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== "undefined" && window.location.hash) {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 80;
          // Use instant scroll to avoid interference with normal scrolling
          window.scrollTo(0, targetPosition);
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Enhanced scroll behavior for both same-page and cross-page navigation
            document.addEventListener('DOMContentLoaded', function() {
              // Handle anchor links within the same page
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

              // Handle URL hash on page load (for cross-page navigation)
              if (window.location.hash) {
                // Small delay to ensure page is fully rendered
                setTimeout(() => {
                  const targetId = window.location.hash;
                  const targetElement = document.querySelector(targetId);
                  if (targetElement && targetElement instanceof HTMLElement) {
                    const targetPosition = targetElement.offsetTop - 80;
                    // Use instant scroll for cross-page navigation to avoid interference
                    window.scrollTo(0, targetPosition);
                  }
                }, 100);
              } else {
                // If no hash, scroll to top
                window.scrollTo(0, 0);
              }
            });

            // Handle browser back/forward navigation
            window.addEventListener('popstate', function() {
              if (window.location.hash) {
                setTimeout(() => {
                  const targetId = window.location.hash;
                  const targetElement = document.querySelector(targetId);
                  if (targetElement && targetElement instanceof HTMLElement) {
                    const targetPosition = targetElement.offsetTop - 80;
                    // Use instant scroll for browser navigation to avoid interference
                    window.scrollTo(0, targetPosition);
                  }
                }, 100);
              } else {
                window.scrollTo(0, 0);
              }
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

              {/* Centered Navigation Links - Desktop Only */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  {t("nav.home")}
                </a>
                <a
                  href="#features"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  {t("nav.features")}
                </a>
                <a
                  href="#why-us"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  {t("nav.whyUs")}
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#faq"
                  className="text-white hover:text-[#fcc142] transition-colors font-medium text-sm tracking-wide cursor-pointer"
                >
                  {t("nav.faq")}
                </a>
              </div>

              {/* Right Side - Language Switcher and Get Started Button - Desktop Only */}
              <div className="hidden md:flex items-center space-x-4">
                <LanguageSwitcher />
                <a
                  href="/contact"
                  className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
                >
                  {t("nav.getStarted")}
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
                  {t("hero.title")}
                </h1>

                {/* Subheadline */}
                <p className="text-sm md:text-base text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  {t("hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="/contact"
                    className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#fcc142]/30 hover:scale-105 flex items-center justify-center"
                  >
                    {t("hero.bookConsultation")}
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
                  </a>
                  <a
                    href="#ai-receptionist"
                    className="border-2 border-[#777cb8] hover:bg-[#777cb8] hover:text-white text-[#777cb8] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {t("hero.learnMore")}
                  </a>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t("hero.status.aiActive")}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {t("hero.status.readyToHelp")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t("hero.status.alwaysAvailable")}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {t("hero.status.neverOffline")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-[#fcc142] rounded-full animate-pulse shadow-lg shadow-[#fcc142]/50"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t("hero.status.multiLanguage")}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {t("hero.status.globalSupport")}
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
                            {t("hero.chat.title")}
                          </div>
                          <div className="text-[#fcc142] text-sm flex items-center">
                            <div className="w-2 h-2 bg-[#fcc142] rounded-full mr-2 animate-pulse"></div>
                            {t("hero.chat.status")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3 overflow-hidden">
                      <div className="bg-[#fcc142]/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.user1")}"
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/30 rounded-2xl p-3 max-w-[75%] ml-auto">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.ai")}"
                        </div>
                      </div>
                      <div className="bg-[#fcc142]/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.user2")}"
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
                            {t("hero.chat.confirmation")}
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
                {t("about.title")}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                {t("about.description")}
              </p>
            </div>
          </div>
        </section>

        {/* What is the AI Receptionist */}
        <section
          id="ai-receptionist"
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  {t("aiReceptionist.title")}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t("aiReceptionist.description")}
                </p>
                <div className="space-y-4">
                  {tArray("aiReceptionist.features").map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-[#fcc142] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#284185] rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
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
                          {t("hero.chat.title")}
                        </div>
                        <div className="text-[#fcc142] text-sm">
                          {t("hero.chat.status")}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#fcc142]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.user1")}"
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.ai")}"
                        </div>
                      </div>
                      <div className="bg-[#fcc142]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.user2")}"
                        </div>
                      </div>
                      <div className="bg-[#777cb8]/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          ✓ {t("hero.chat.confirmation")}
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
                {t("features.title")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("features.subtitle")}
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
                    {t("features.items.appointmentBooking.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.appointmentBooking.description")}
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
                    {t("features.items.customTrained.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.customTrained.description")}
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
                    {t("features.items.multiLanguage.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.multiLanguage.description")}
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
                    {t("features.items.ultraHumanVoices.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.ultraHumanVoices.description")}
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
                    {t("features.items.alwaysAvailable.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.alwaysAvailable.description")}
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
                    {t("features.items.smartFailover.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.smartFailover.description")}
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
                    {t("features.items.easyIntegrations.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.easyIntegrations.description")}
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
                    {t("features.items.costSaving.title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("features.items.costSaving.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Love It */}
        <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t("whyUs.title")}
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
                    {t("whyUs.items.neverMissLead.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.neverMissLead.description")}
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
                    {t("whyUs.items.lowerCosts.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.lowerCosts.description")}
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
                    {t("whyUs.items.boostRevenue.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.boostRevenue.description")}
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
                    {t("whyUs.items.betterExperience.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.betterExperience.description")}
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
                    {t("whyUs.items.noTechSkills.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.noTechSkills.description")}
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
                {t("faq.title")}
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-6 text-left cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFAQ(0)}
                >
                  <span>{t("faq.items.0.question")}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQs[0] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQs[0] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {t("faq.items.0.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-6 text-left cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFAQ(1)}
                >
                  <span>{t("faq.items.1.question")}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQs[1] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQs[1] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {t("faq.items.1.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-6 text-left cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFAQ(2)}
                >
                  <span>{t("faq.items.2.question")}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQs[2] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQs[2] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {t("faq.items.2.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-6 text-left cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFAQ(3)}
                >
                  <span>{t("faq.items.3.question")}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQs[3] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQs[3] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {t("faq.items.3.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#fcc142]/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-6 text-left cursor-pointer text-white font-semibold text-lg hover:text-[#fcc142] transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFAQ(4)}
                >
                  <span>{t("faq.items.4.question")}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openFAQs[4] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQs[4] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {t("faq.items.4.answer")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#fcc142] to-[#777cb8] mx-auto mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              {t("availability.title")}
            </h2>
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-[#fcc142] to-[#777cb8] rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-6xl">🌍</div>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t("availability.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {tArray("availability.countries").map((country, index) => (
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
              {t("cta.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleBookConsultation}
                className="bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] px-12 py-6 rounded-lg font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#fcc142]/30 hover:scale-105"
              >
                {t("cta.button")}
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
              <p>{t("footer.copyright")}</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-40"
          aria-label="Scroll to top"
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
