/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [openFAQs, setOpenFAQs] = useState([false, false, false, false, false]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    // Small delay to ensure the element is rendered before starting animation
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    // Delay the state change to allow exit animation to complete
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu")
      ) {
        closeMobileMenu();
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
      <div className="min-h-screen bg-primary relative overflow-hidden font-sans">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C3E5D9' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='60' cy='0' r='2'/%3E%3Ccircle cx='0' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Extended Geometric Background Shapes */}
        <div className="absolute inset-0">
          {/* Large Blue Triangle - Top Right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary to-secondary transform rotate-45 opacity-80"></div>

          {/* Medium Blue Shape - Bottom Left */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-secondary to-primary transform -rotate-12 opacity-60"></div>

          {/* Small Accent Shape - Top Left */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-tertiary transform rotate-45 opacity-20"></div>

          {/* Additional Geometric Shapes Throughout */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-secondary to-primary transform rotate-12 opacity-40"></div>
          <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-primary to-secondary transform -rotate-45 opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-tertiary transform rotate-30 opacity-15"></div>
          <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-gradient-to-r from-secondary to-tertiary transform -rotate-12 opacity-25"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-tertiary/30 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-secondary/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-8 h-8 bg-tertiary/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/2 left-1/6 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/6 right-2/3 w-14 h-14 bg-tertiary/35 rounded-full animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/6 right-1/5 w-10 h-10 bg-primary/40 rounded-full animate-pulse"
            style={{ animationDelay: "5s" }}
          ></div>

          {/* Icon Background Elements */}
          <div className="absolute top-1/2 left-10 w-32 h-32 opacity-10">
            <Image
              src="/icon.png"
              alt=""
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-1/4 right-1/3 w-28 h-28 opacity-15 transform rotate-12">
            <Image
              src="/icon.png"
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-20 transform -rotate-45">
            <Image
              src="/icon.png"
              alt=""
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-3/4 right-1/4 w-26 h-26 opacity-12 transform rotate-30">
            <Image
              src="/icon.png"
              alt=""
              width={104}
              height={104}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-1/4 left-1/5 w-30 h-30 opacity-8 transform -rotate-12">
            <Image
              src="/icon.png"
              alt=""
              width={120}
              height={120}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-1/6 left-1/2 w-36 h-36 opacity-6 transform rotate-45">
            <Image
              src="/icon.png"
              alt=""
              width={144}
              height={144}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-1/6 right-1/6 w-22 h-22 opacity-18 transform -rotate-30">
            <Image
              src="/icon.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Logo Section */}
              <Link
                href="/"
                className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image
                  src="/logo.png"
                  alt="Automera Systems"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Centered Navigation Links - Desktop Only */}
              <div className="hidden lg:flex space-x-4 xl:space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-tertiary transition-colors font-medium text-xs xl:text-sm tracking-wide cursor-pointer whitespace-nowrap"
                >
                  {t("nav.home")}
                </a>
                <a
                  href="#features"
                  className="text-white hover:text-tertiary transition-colors font-medium text-xs xl:text-sm tracking-wide cursor-pointer whitespace-nowrap"
                >
                  {t("nav.features")}
                </a>
                <a
                  href="#why-us"
                  className="text-white hover:text-tertiary transition-colors font-medium text-xs xl:text-sm tracking-wide cursor-pointer whitespace-nowrap"
                >
                  {t("nav.whyUs")}
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-tertiary transition-colors font-medium text-xs xl:text-sm tracking-wide cursor-pointer whitespace-nowrap"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#faq"
                  className="text-white hover:text-tertiary transition-colors font-medium text-xs xl:text-sm tracking-wide cursor-pointer whitespace-nowrap"
                >
                  {t("nav.faq")}
                </a>
              </div>

              {/* Right Side - Language Switcher and Get Started Button - Desktop Only */}
              <div className="hidden md:flex items-center space-x-4">
                <LanguageSwitcher />
                <a
                  href="/contact"
                  className="bg-tertiary hover:bg-tertiary/90 text-primary px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block whitespace-nowrap"
                >
                  {t("nav.getStarted")}
                </a>
              </div>

              {/* Mobile Language Switcher and Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <LanguageSwitcher />
                <button
                  onClick={openMobileMenu}
                  className="text-white p-2 hover:text-tertiary transition-colors"
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
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden fixed inset-0 z-40 mobile-menu-backdrop transition-all duration-300 ease-in-out ${
              isAnimating
                ? "bg-black/50 backdrop-blur-sm"
                : "bg-black/0 backdrop-blur-0"
            }`}
          >
            <div
              className={`mobile-menu fixed right-0 top-0 h-full w-80 bg-primary shadow-2xl transform transition-all duration-300 ease-in-out ${
                isAnimating ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <span className="text-white font-medium text-lg">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="text-white hover:text-tertiary transition-colors p-2"
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
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-tertiary transition-colors font-medium text-lg py-3 border-b border-white/10"
                  >
                    {t("nav.home")}
                  </Link>
                  <a
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-tertiary transition-colors font-medium text-lg py-3 border-b border-white/10"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/privacy"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-tertiary transition-colors font-medium text-lg py-3 border-b border-white/10"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-tertiary transition-colors font-medium text-lg py-3 border-b border-white/10"
                  >
                    Terms and Conditions
                  </a>
                </div>

                {/* Bottom Section - Removed language switcher as it's now in the top nav */}
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Large Background Icon */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] opacity-15 z-0 rotate-12">
            <Image
              src="/icon.png"
              alt=""
              width={960}
              height={960}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Content */}
              <div className="text-left">
                {/* Spacing */}
                <div className="mb-8"></div>

                {/* Main Headline */}
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 leading-none font-display">
                  {t("hero.title")}
                </h1>

                {/* Subheadline */}
                <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  {t("hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="bg-tertiary hover:bg-tertiary/90 text-primary px-6 py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-tertiary/30 hover:scale-105 flex items-center justify-center whitespace-nowrap"
                  >
                    {t("hero.bookConsultation")}
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0"
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
                  </Link>
                  <a
                    href="#ai-receptionist"
                    className="border-2 border-secondary hover:bg-secondary hover:text-white text-secondary px-6 py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap text-center"
                  >
                    {t("hero.learnMore")}
                  </a>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-tertiary/30 transition-all duration-300">
                    <div className="w-4 h-4 bg-tertiary rounded-full animate-pulse shadow-lg shadow-tertiary/50 flex-shrink-0"></div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base leading-tight">
                        {t("hero.status.aiActive")}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm leading-tight">
                        {t("hero.status.readyToHelp")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-tertiary/30 transition-all duration-300">
                    <div
                      className="w-4 h-4 bg-tertiary rounded-full animate-pulse shadow-lg shadow-tertiary/50 flex-shrink-0"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base leading-tight">
                        {t("hero.status.alwaysAvailable")}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm leading-tight">
                        {t("hero.status.neverOffline")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-tertiary/30 transition-all duration-300">
                    <div
                      className="w-4 h-4 bg-tertiary rounded-full animate-pulse shadow-lg shadow-tertiary/50 flex-shrink-0"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base leading-tight">
                        {t("hero.status.multiLanguage")}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm leading-tight">
                        {t("hero.status.globalSupport")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden">
                {/* Main Visual Container */}
                <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden mx-auto">
                  {/* Phone Interface Mockup */}
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-2xl backdrop-blur-sm border border-tertiary/30 p-4 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-primary"
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
                          <div className="text-tertiary text-sm flex items-center">
                            <div className="w-2 h-2 bg-tertiary rounded-full mr-2 animate-pulse"></div>
                            {t("hero.chat.status")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3 overflow-hidden">
                      <div className="bg-tertiary/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.user1")}"
                        </div>
                      </div>
                      <div className="bg-secondary/30 rounded-2xl p-3 max-w-[75%] ml-auto">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.ai")}"
                        </div>
                      </div>
                      <div className="bg-tertiary/20 rounded-2xl p-3 max-w-[75%]">
                        <div className="text-white text-xs">
                          "{t("hero.chat.messages.user2")}"
                        </div>
                      </div>
                      <div className="bg-primary/50 rounded-2xl p-3 border border-tertiary/30">
                        <div className="text-tertiary text-xs font-semibold flex items-center">
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
              className="w-6 h-6 text-tertiary"
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
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight font-display">
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
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight font-display">
                  {t("aiReceptionist.title")}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t("aiReceptionist.description")}
                </p>
                <div className="space-y-4">
                  {tArray("aiReceptionist.features").map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-tertiary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-tertiary/20 to-secondary/20 rounded-2xl p-8 border border-tertiary/30">
                  <div className="bg-primary/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary"
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
                        <div className="text-tertiary text-sm">
                          {t("hero.chat.status")}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-tertiary/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.user1")}"
                        </div>
                      </div>
                      <div className="bg-secondary/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.ai")}"
                        </div>
                      </div>
                      <div className="bg-tertiary/20 rounded-lg p-3">
                        <div className="text-white text-sm">
                          "{t("hero.chat.messages.user2")}"
                        </div>
                      </div>
                      <div className="bg-secondary/20 rounded-lg p-3">
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
          {/* Large Background Icon - Right Side */}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] opacity-15 z-0 -rotate-12">
            <Image
              src="/icon.png"
              alt=""
              width={960}
              height={960}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Section Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight font-display">
                {t("features.title")}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("features.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.appointmentBooking.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.appointmentBooking.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.customTrained.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.customTrained.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.multiLanguage.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.multiLanguage.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.ultraHumanVoices.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.ultraHumanVoices.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.alwaysAvailable.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.alwaysAvailable.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.smartFailover.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.smartFailover.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.easyIntegrations.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("features.items.easyIntegrations.description")}
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("features.items.costSaving.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
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
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight font-display">
                {t("whyUs.title")}
              </h2>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("whyUs.items.neverMissLead.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.neverMissLead.description")}
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("whyUs.items.lowerCosts.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.lowerCosts.description")}
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("whyUs.items.boostRevenue.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.boostRevenue.description")}
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
                    {t("whyUs.items.betterExperience.title")}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("whyUs.items.betterExperience.description")}
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border border-tertiary/20 hover:border-tertiary/40 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-tertiary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
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
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-tertiary transition-colors duration-300 font-display">
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
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight font-display">
                {t("faq.title")}
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tertiary/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-3 lg:p-6 text-left cursor-pointer text-white font-semibold text-sm lg:text-lg hover:text-tertiary transition-colors duration-300 flex items-start lg:items-center justify-between gap-4"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="text-left leading-tight">
                    {t("faq.items.0.question")}
                  </span>
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
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                    {t("faq.items.0.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tertiary/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-3 lg:p-6 text-left cursor-pointer text-white font-semibold text-sm lg:text-lg hover:text-tertiary transition-colors duration-300 flex items-start lg:items-center justify-between gap-4"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="text-left leading-tight">
                    {t("faq.items.1.question")}
                  </span>
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
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                    {t("faq.items.1.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tertiary/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-3 lg:p-6 text-left cursor-pointer text-white font-semibold text-sm lg:text-lg hover:text-tertiary transition-colors duration-300 flex items-start lg:items-center justify-between gap-4"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="text-left leading-tight">
                    {t("faq.items.2.question")}
                  </span>
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
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                    {t("faq.items.2.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tertiary/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-3 lg:p-6 text-left cursor-pointer text-white font-semibold text-sm lg:text-lg hover:text-tertiary transition-colors duration-300 flex items-start lg:items-center justify-between gap-4"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="text-left leading-tight">
                    {t("faq.items.3.question")}
                  </span>
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
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                    {t("faq.items.3.answer")}
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="faq-item bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tertiary/30 transition-all duration-300 overflow-hidden">
                <button
                  className="faq-question w-full p-3 lg:p-6 text-left cursor-pointer text-white font-semibold text-sm lg:text-lg hover:text-tertiary transition-colors duration-300 flex items-start lg:items-center justify-between gap-4"
                  onClick={() => toggleFAQ(4)}
                >
                  <span className="text-left leading-tight">
                    {t("faq.items.4.question")}
                  </span>
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
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 text-gray-300 text-sm lg:text-base leading-relaxed">
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
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight font-display">
              {t("availability.title")}
            </h2>
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-tertiary to-secondary rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl animate-pulse">
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
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-tertiary/30 text-white"
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
            <div className="w-24 h-1 bg-gradient-to-r from-tertiary to-secondary mx-auto mb-16"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight font-display">
              {t("cta.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleBookConsultation}
                className="bg-tertiary hover:bg-tertiary/90 text-primary px-8 py-6 rounded-lg font-medium text-lg lg:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-tertiary/30 hover:scale-105 whitespace-nowrap"
              >
                {t("cta.button")}
              </button>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </>
  );
}
