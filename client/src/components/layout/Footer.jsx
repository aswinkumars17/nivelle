import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'Collections', href: '/collections' },
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-deep-charcoal dark:bg-[#0a0a0a] text-soft-ivory relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.05),transparent_50%)]" />
      
      {/* Newsletter Section */}
      <div className="border-b border-subtle-gold/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                Join the NIVELLE Experience
              </h3>
              <p className="text-soft-ivory/70 text-sm sm:text-base">
                Subscribe for exclusive offers, design inspiration, and early access to new collections.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 bg-white/5 dark:bg-[#151515] border border-white/20 dark:border-subtle-gold/20 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-white placeholder-white/50 transition-all duration-300 text-sm sm:text-base"
              />
              <Button className="px-6 py-3 hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 hidden sm:inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link to="/" className="inline-block mb-4 sm:mb-6 group">
              <span 
                className="text-2xl sm:text-3xl font-bold tracking-widest-xl text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(198,167,94,0.5)]"
                style={{ 
                  WebkitTextStroke: '1px #C6A75E',
                  textStroke: '1px #C6A75E'
                }}
              >
                NIVELLE
              </span>
            </Link>
            <p className="text-soft-ivory/70 mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
              Crafting timeless furniture for refined living. Every piece tells a story of modern craftsmanship and enduring quality.
            </p>
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2.5 bg-white/5 dark:bg-subtle-gold/10 border border-white/10 dark:border-subtle-gold/20 rounded-full hover:bg-subtle-gold hover:border-subtle-gold transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-soft-ivory">Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-soft-ivory/70 hover:text-subtle-gold transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-soft-ivory">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-soft-ivory/70 hover:text-subtle-gold transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Only show on larger screens or as additional column */}
          <div className="text-center sm:text-left hidden sm:block">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-soft-ivory">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-soft-ivory/70 hover:text-subtle-gold transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-subtle-gold/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-soft-ivory/50 text-xs sm:text-sm text-center sm:text-left">
              2024 NIVELLE. All rights reserved.
            </p>
            {/* Legal links for mobile */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm sm:hidden">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-soft-ivory/50 hover:text-subtle-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Legal links for larger screens */}
            <div className="hidden sm:flex gap-4 sm:gap-6 text-xs sm:text-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-soft-ivory/50 hover:text-subtle-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
