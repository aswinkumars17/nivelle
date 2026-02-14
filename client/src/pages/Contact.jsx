import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@nivelle.com',
      link: 'mailto:hello@nivelle.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Design District, Mumbai, India',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 10:00 AM - 7:00 PM',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-subtle-gold/10 border border-subtle-gold/30 rounded-full text-subtle-gold text-sm tracking-wider uppercase">
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto"
          >
            We would love to hear from you. Reach out for inquiries, collaborations, 
            or just to say hello.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-warm-beige/30 dark:bg-[#151515] rounded-2xl p-6 text-center border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-deep-charcoal dark:bg-subtle-gold/20 rounded-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(198,167,94,0.3)]">
                  <info.icon className="w-6 h-6 text-soft-ivory dark:text-subtle-gold" />
                </div>
                <h3 className="text-lg font-semibold text-deep-charcoal dark:text-soft-ivory mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-walnut dark:text-soft-ivory/70 hover:text-subtle-gold transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-walnut dark:text-soft-ivory/70">
                    {info.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-warm-beige/30 dark:bg-[#111111] rounded-3xl p-8 md:p-12 border border-transparent dark:border-subtle-gold/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2 text-center">
              Send us a Message
            </h2>
            <div className="w-16 h-1 bg-subtle-gold mx-auto mb-8 rounded-full" />
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory resize-none placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
