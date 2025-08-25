"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Contact() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    businessCountry: "United States",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send form data to your email using the API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "issa@automerasystems.com",
          subject: "New Consultation Request - Automera Systems",
          formData: {
            name: formData.name,
            email: formData.email,
            company: formData.company || "Not provided",
            phone: formData.phone || "Not provided",
            businessCountry: formData.businessCountry,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          businessCountry: "United States",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        #businessCountry {
          max-height: 144px !important;
        }
        #businessCountry option {
          max-height: 24px !important;
        }
        #businessCountry:focus {
          max-height: 144px !important;
        }
        #businessCountry:active {
          max-height: 144px !important;
        }
        #businessCountry:focus-within {
          max-height: 144px !important;
        }
        #businessCountry::-webkit-listbox {
          max-height: 144px !important;
          overflow-y: auto !important;
        }
        #businessCountry::-webkit-scrollbar {
          width: 8px !important;
        }
        #businessCountry::-webkit-scrollbar-track {
          background: #284185 !important;
        }
        #businessCountry::-webkit-scrollbar-thumb {
          background: #fcc142 !important;
          border-radius: 9999px !important;
        }
      `}</style>
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

        {/* Contact Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
                {t("contact.title")}
              </h1>

              {/* Subheadline */}
              <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {t("contact.form.fullName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300"
                      placeholder={t("contact.form.placeholders.fullName")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300"
                      placeholder={t("contact.form.placeholders.email")}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300"
                      placeholder={t("contact.form.placeholders.company")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300"
                      placeholder={t("contact.form.placeholders.phone")}
                    />
                  </div>
                </div>

                {/* Business Country Location */}
                <div>
                  <label
                    htmlFor="businessCountry"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {t("contact.form.businessCountry")}
                  </label>
                  <select
                    id="businessCountry"
                    name="businessCountry"
                    value={formData.businessCountry}
                    onChange={handleInputChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300 [&>option]:bg-[#284185] [&>option]:text-white [&>option]:py-2 [&>option]:px-3 [&>option]:border-b [&>option]:border-white/10 [&>option]:hover:bg-[#777cb8] [&>option]:hover:text-[#fcc142] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#284185] [&::-webkit-scrollbar-thumb]:bg-[#fcc142] [&::-webkit-scrollbar-thumb]:rounded-full"
                  >
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="Chile">Chile</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Norway">Norway</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Singapore">Singapore</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="UK">UK</option>
                    <option value="United States">United States</option>
                    <option value="Vietnam">Vietnam</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fcc142] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={t("contact.form.placeholders.message")}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center mx-auto ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-[#fcc142] hover:bg-[#fcc142]/90 text-[#284185] hover:shadow-[#fcc142]/30"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        {t("contact.form.submit")}
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
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300">
                      <p className="font-medium">
                        {t("contact.success.title")}
                      </p>
                      <p className="text-sm mt-1">
                        {t("contact.success.subtitle")}
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300">
                      <p className="font-medium">{t("contact.error.title")}</p>
                      <p className="text-sm mt-1">
                        {t("contact.error.subtitle")}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p
                className="text-gray-300 text-sm"
                dangerouslySetInnerHTML={{ __html: t("contact.agreement") }}
              />
            </div>

            {/* Bottom Spacing */}
            <div className="mt-16"></div>
          </div>
        </section>
      </div>
    </>
  );
}
