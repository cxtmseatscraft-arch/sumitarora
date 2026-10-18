/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  Menu,
  X,
  Share2,
  Copy,
  Check,
  Shield,
  Layers,
  Wrench,
  UserCheck,
  Phone
} from 'lucide-react';
import heroLogoImage from './assets/images/regenerated_image_1792375851073.jpg';

// Latest Official WhatsApp Circular Icon Badge (No text inside)
export const LatestWhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="wa-core" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="75%" stopColor="#1EBE5D" />
        <stop offset="100%" stopColor="#128C7E" />
      </radialGradient>
      <linearGradient id="wa-rim" x1="0" y1="0" x2="48" y2="48">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    {/* Base circle with rich 3D gradient */}
    <circle cx="24" cy="24" r="23" fill="url(#wa-core)" />
    <circle cx="24" cy="24" r="22.5" stroke="url(#wa-rim)" strokeWidth="1" />
    {/* Official WhatsApp glyph */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 10C16.268 10 10 16.268 10 24c0 2.65.736 5.127 2.016 7.242L10.5 37.5l6.44-1.48A13.916 13.916 0 0024 38c7.732 0 14-6.268 14-14s-6.268-14-14-14zm-5.69 8.474c-.256-.57-.525-.582-.77-.593-.2-.008-.427-.008-.655-.008s-.597.086-.91.427c-.314.342-1.196 1.168-1.196 2.848s1.225 3.303 1.396 3.531c.17.228 2.358 3.68 5.79 5.128.815.344 1.452.55 1.948.706.82.259 1.567.222 2.158.134.659-.098 2.022-.826 2.307-1.624.285-.798.285-1.482.2-1.624-.085-.143-.313-.228-.655-.399-.342-.171-2.022-.997-2.336-1.11-.313-.115-.541-.172-.77.17-.227.343-.882 1.11-1.081 1.339-.2.228-.399.256-.74.085-.342-.17-1.442-.53-2.748-1.694-1.016-.905-1.701-2.022-1.9-2.364-.2-.342-.022-.527.15-.698.154-.154.342-.399.513-.598.17-.2.227-.342.342-.57.113-.228.057-.427-.029-.598-.085-.171-.741-1.838-1.042-2.524z"
      fill="#FFFFFF"
    />
  </svg>
);

// Latest Official Phone Call Circular Icon Badge (No text inside)
export const LatestCallIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="call-core" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="70%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#991B1B" />
      </radialGradient>
      <linearGradient id="call-rim" x1="0" y1="0" x2="48" y2="48">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    {/* Base circle with rich 3D gradient */}
    <circle cx="24" cy="24" r="23" fill="url(#call-core)" />
    <circle cx="24" cy="24" r="22.5" stroke="url(#call-rim)" strokeWidth="1" />
    {/* Ergonomic phone handset */}
    <path
      d="M17.2 20.8c1.8 3.5 4.7 6.4 8.2 8.2l2.7-2.7c.4-.4 1-.5 1.5-.3 1.6.5 3.4.8 5.2.8.8 0 1.4.6 1.4 1.4V33c0 .8-.6 1.4-1.4 1.4C22.6 34.4 13.6 25.4 13.6 14.2c0-.8.6-1.4 1.4-1.4h4.8c.8 0 1.4.6 1.4 1.4 0 1.8.3 3.6.8 5.2.2.5.1 1.1-.3 1.5l-2.5 2.5z"
      fill="#FFFFFF"
    />
    {/* Dynamic soundwaves */}
    <path
      d="M27.5 14c2.2.6 4.1 2.5 4.7 4.7M27.5 9.5c4.7.7 8.3 4.3 9 9"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      opacity="0.95"
    />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showScrollFloating, setShowScrollFloating] = useState(false);

  const shopName = "SONY REXINE WORK";
  const establishedYear = "ESTABLISHED SINCE 2010";
  const ownerName = "ABDUL RAHMAN";
  const phoneNumber = "+919398649272";
  const displayPhone = "+91 93986 49272";
  const whatsappUrl = "https://wa.me/919398649272?text=Hello%20Abdul%20Rahman%20bhai%2C%20I%20would%20like%20to%20inquire%20about%20bike%20seat%20or%20tank%20cover%20work%20at%20Sony%20Rexine%20Work.";
  const shopAddress = "Near HP Petrol Pump, Opp TLM Function Hall, Kattedan, Hyderabad, Telangana";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Near+HP+Petrol+Pump+Opp+TLM+Function+Hall+Kattedan+Hyderabad";

  // Detect scroll down to pop up the two small icons on the right
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollFloating(true);
      } else {
        setShowScrollFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${shopName}, ${shopAddress}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shopName,
          text: `${shopName} - Bike Seat Covers & Tank Covers. Owner: ${ownerName}. ${shopAddress}. Phone: ${displayPhone}`,
          url: window.location.href,
        });
      } catch {
        handleCopyAddress();
      }
    } else {
      handleCopyAddress();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Banner Notice (Clean, no icons) */}
      <div className="bg-[#141414] border-b border-[#262626] text-xs text-gray-300 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Motorcycle Seat & Tank Cover Specialists</span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-gray-400 hidden sm:inline">Owner: <strong className="text-white font-semibold">{ownerName}</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-gray-400">
            <span>Kattedan, Hyderabad</span>
            <span className="text-gray-600">•</span>
            <span>Walk-in Fitting Welcome</span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation (Clean, no icons) */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Top Left Clean / Empty per user instruction */}
          <div className="flex items-center">
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a
              href="#home"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 pb-1 transition-all"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 pb-1 transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 pb-1 transition-all"
            >
              About
            </a>
            <a
              href="#visit"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 pb-1 transition-all"
            >
              Visit Shop
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-colors shadow-sm"
              title={`Direct Call: ${displayPhone}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button (Clean, no icons) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md ml-auto"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#141414] border-b border-[#262626] px-4 py-4 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-red-500 py-1"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-red-500 py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-red-500 py-1"
            >
              About
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-red-500 py-1"
            >
              Visit Shop
            </a>
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md mt-2"
            >
              Contact Us ({displayPhone})
            </a>
          </nav>
        )}
      </header>

      {/* Hero / Top Section */}
      <section id="home" className="relative bg-[#0a0a0a] border-b border-[#1f1f1f] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Official Shop Logo Showcase with Entry Animation */}
          <div className="mb-8 flex justify-center w-full">
            <div className="animate-logo-entry p-4 sm:p-7 rounded-2xl bg-black border border-[#282828] shadow-[0_10px_40px_rgba(0,0,0,0.85),0_0_60px_rgba(229,25,32,0.18)] flex flex-col items-center max-w-full hover:scale-[1.015] transition-transform duration-300">
              <img
                src={heroLogoImage}
                alt="SONY REXINE WORK"
                className="w-80 sm:w-[480px] md:w-[560px] h-auto object-contain max-w-full bg-black rounded-lg"
              />
            </div>
          </div>

          {/* Established badge with Owner Name */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-red-900/60 text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              {establishedYear}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#2b2b2b] text-gray-300 text-xs sm:text-sm font-semibold">
              <UserCheck className="w-3.5 h-3.5 text-red-500" />
              <span>Owner: <span className="text-white font-bold">{ownerName}</span></span>
            </div>
          </div>

          {/* Core Speciality Tagline with Arial font */}
          <h2
            style={{ fontFamily: 'Arial, sans-serif' }}
            className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-5"
          >
            Bike Seat Covers & Tank Covers
          </h2>

          {/* Introduction Quote */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            &ldquo;Serving customers with motorcycle seat and tank cover work since 2010. Simple work, reliable service, and care for every customer&apos;s bike.&rdquo;
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            {/* When clicked, opens direct call to +919398649272 */}
            <a
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg transition-all duration-200 shadow-xl shadow-red-950/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>

            {/* Get Directions button */}
            <a
              href="#visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-gray-300 bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] hover:text-white rounded-lg transition-all"
            >
              <Navigation className="w-4 h-4 text-red-500" />
              Get Directions
            </a>
          </div>

          <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2">
            <span>Direct Call & WhatsApp:</span>
            <a href={`tel:${phoneNumber}`} className="text-red-400 hover:underline font-bold">
              {displayPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#111111] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Our Services
            </h2>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-3"></div>
            <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">
              Focused strictly on two key motorcycle services done with skilled workmanship and long-lasting rexine.
            </p>
          </div>

          {/* Two Main Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1: Bike Seat Covers */}
            <div className="bg-[#171717] border border-[#2a2a2a] rounded-lg p-6 sm:p-8 relative hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-red-400 bg-[#222] px-2.5 py-1 rounded">
                    Service 01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Bike Seat Covers
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Seat cover replacement and rexine work for motorcycles.
                </p>

                {/* Practical details in simple language */}
                <div className="border-t border-[#262626] pt-4 space-y-2.5 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Durable, water-resistant rexine material made for daily riding</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Replacement of torn, cracked, or worn-out original covers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Proper tight fitting and staple pinning for neat finish</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Foam padding adjustments for better rider comfort if needed</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#242424] flex items-center justify-between">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call for fitting
                </a>
                <a
                  href="#visit"
                  className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Visit shop in Kattedan &rarr;
                </a>
              </div>
            </div>

            {/* Service 2: Bike Tank Covers */}
            <div className="bg-[#171717] border border-[#2a2a2a] rounded-lg p-6 sm:p-8 relative hover:border-red-600/70 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-wider text-red-400 bg-[#222] px-2.5 py-1 rounded">
                    Service 02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Bike Tank Covers
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Tank covers made to suit your bike.
                </p>

                {/* Practical details in simple language */}
                <div className="border-t border-[#262626] pt-4 space-y-2.5 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Custom tailored fit shaped specifically to your bike&apos;s fuel tank</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Protects original tank paint from scratches, keys, and sun heat</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Secure buckle straps and clean cutout for petrol lid</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Strong stitching that withstands Hyderabad weather</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#242424] flex items-center justify-between">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call for fitting
                </a>
                <a
                  href="#visit"
                  className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Visit shop in Kattedan &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Shop Section */}
      <section id="about" className="bg-[#0e0e0e] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151515] border border-[#2b2b2b] rounded-lg p-6 sm:p-10 relative overflow-hidden">
            {/* Red Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600"></div>

            <div className="max-w-3xl">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
                Our History & Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
                About Our Shop
              </h2>

              {/* Owner recognition */}
              <div className="mb-6 inline-flex items-center gap-2 bg-[#222] border border-[#333] px-3.5 py-1.5 rounded-md text-xs sm:text-sm text-gray-200">
                <span className="text-gray-400">Shop Owner & Master Craftsman:</span>
                <strong className="text-white font-bold tracking-wide">{ownerName}</strong>
              </div>

              {/* Exact quote updated to 2010 */}
              <div className="bg-[#0b0b0b] border-l-4 border-red-600 p-4 sm:p-5 rounded-r-md mb-8">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  &ldquo;Located in Kattedan, Hyderabad, Sony Rexine Work has been serving customers since 2010, specialising in motorcycle seat covers and tank covers.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Led by <strong className="text-white font-semibold">{ownerName}</strong>, our shop has been a trusted place for local motorcyclists, delivery riders, and daily commuters in and around Kattedan since 2010. We believe in straightforward, honest handiwork.
                </p>
                <p>
                  Whether your seat rexine has torn under everyday usage or you want a fresh tank cover to safeguard your bike from wear and weather, we handle the fitting carefully right in front of you.
                </p>
              </div>

              {/* Workshop Values */}
              <div className="mt-8 pt-6 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2 mb-1">
                    <Wrench className="w-4 h-4 text-red-500" /> Hand-Fitted Work
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Tightly pulled and secured to fit the exact frame of your seat.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-red-500" /> Tough Rexine
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Quality rexine cloth selected for long life under rough daily use.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-red-500" /> Fast Turnaround
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Quick service so you can get back on the road without waiting days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Shop Section */}
      <section id="visit" className="bg-[#121212] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#222222] scroll-mt-10">
        <div id="contact" className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
              Come By Anytime
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Visit Our Shop
            </h2>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-3"></div>
          </div>

          <div className="bg-[#181818] border border-[#2c2c2c] rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  Shop Name & Owner
                </span>
                <h3 className="text-2xl font-black text-white mb-1">
                  {shopName}
                </h3>
                <p className="text-sm text-gray-300 font-semibold mb-5">
                  Proprietor: <span className="text-white font-bold">{ownerName}</span>
                </p>

                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                  Exact Address & Landmark
                </span>
                <p className="text-base text-gray-200 font-semibold mb-2 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{shopAddress}</span>
                </p>
                <div className="bg-[#0f0f0f] border border-[#282828] p-3 rounded-md mb-6 pl-4 text-xs text-gray-300 space-y-1">
                  <div><strong className="text-white">Landmark:</strong> Near HP Petrol Pump</div>
                  <div><strong className="text-white">Opposite:</strong> TLM Function Hall, Kattedan, Hyderabad</div>
                </div>

                {/* Direct Call & WhatsApp Contact Info */}
                <div className="border-t border-[#262626] pt-4 space-y-3 text-sm">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center justify-between p-3.5 bg-[#111] hover:bg-[#1a1a1a] border border-[#2f2f2f] hover:border-red-600 rounded-xl transition-all group"
                  >
                    <div>
                      <div className="text-xs text-gray-400">Direct Phone Call</div>
                      <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {displayPhone}
                      </div>
                    </div>
                    <span className="text-xs text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded-md border border-red-900/50">
                      Tap to Call &rarr;
                    </span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#111] hover:bg-[#14261d] border border-[#2f2f2f] hover:border-emerald-500 rounded-xl transition-all group"
                  >
                    <div>
                      <div className="text-xs text-gray-400">WhatsApp Chat</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {displayPhone}
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-900/50">
                      Open Chat &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg p-6 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Find Us on Google Maps
                </h4>
                <p className="text-xs text-gray-400 max-w-xs mb-5">
                  Near HP Petrol Pump, Opp TLM Function Hall, Kattedan. Tap below for turn-by-turn directions.
                </p>

                <div className="w-full space-y-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 bg-[#1c1c1c] hover:bg-[#262626] border border-[#333] rounded transition-colors cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-gray-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 bg-[#1c1c1c] hover:bg-[#262626] border border-[#333] rounded transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5 text-gray-400" />
                      <span>Share Location</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Pop-Up Floating Icons at Right Side (Visible on scroll down, no text inside) */}
      <aside
        aria-label="Quick contact"
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-50 flex flex-col items-center gap-3 transition-all duration-300 ease-out ${
          showScrollFloating
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-75 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Latest WhatsApp Icon - No text */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-2xl shadow-emerald-950/70 hover:scale-115 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
        >
          <LatestWhatsAppIcon className="w-12 h-12" />
        </a>

        {/* Latest Call Icon - No text */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Direct Phone Call"
          title={`Call ${displayPhone}`}
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-2xl shadow-red-950/70 hover:scale-115 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
        >
          <LatestCallIcon className="w-12 h-12" />
        </a>
      </aside>

      {/* Simple, Clean Footer */}
      <footer className="mt-auto bg-[#070707] border-t border-[#1e1e1e] py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Sony Rexine Work. All rights reserved.</span>
          <span className="text-gray-400 font-medium">
            Design by <span className="text-white font-semibold">MUHIB UDDIN</span> - DreamIndia LTD.
          </span>
        </div>
      </footer>
    </div>
  );
}
