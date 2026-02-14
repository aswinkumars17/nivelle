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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Join the NIVELLE Experience
              </h3>
              <p className="text-soft-ivory/70">
                Subscribe for exclusive offers, design inspiration, and early access to new collections.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 dark:bg-[#151515] border border-white/20 dark:border-subtle-gold/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-white placeholder-white/50 transition-all duration-300"
              />
              <Button className="px-6 hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <span 
                className="text-3xl font-bold tracking-widest-xl text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(198,167,94,0.5)]"
                style={{ 
                  WebkitTextStroke: '1px #C6A75E',
                  textStroke: '1px #C6A75E'
                }}
              >
                NIVELLE
              </span>
            </Link>
            <p className="text-soft-ivory/70 mb-6 max-w-sm">
              Crafting timeless furniture for refined living. Every piece tells a story of modern craftsmanship and enduring quality.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-white/5 dark:bg-subtle-gold/10 border border-white/10 dark:border-subtle-gold/20 rounded-full hover:bg-subtle-gold hover:border-subtle-gold transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-soft-ivory">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-soft-ivory/70 hover:text-subtle-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-soft-ivory">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-soft-ivory/70 hover:text-subtle-gold transition-colors duration-300"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-soft-ivory/50 text-sm">
              2024 NIVELLE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
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