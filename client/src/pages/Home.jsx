import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop",
      title: "Refined Living.",
      subtitle: "Discover furniture that transforms your space into a sanctuary of modern elegance and timeless comfort."
    },
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop",
      title: "Crafted to Perfection.",
      subtitle: "Each piece is meticulously designed with premium materials and exceptional attention to detail."
    },
    {
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1600&h=900&fit=crop",
      title: "Timeless Design.",
      subtitle: "Furniture that transcends trends, creating spaces that feel both contemporary and enduring."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Interior Designer",
      content: "NIVELLE has become my go-to for clients seeking that perfect blend of luxury and livability. The quality is exceptional.",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Architect",
      content: "The attention to detail in every piece is remarkable. These are investment pieces that will last generations.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Homeowner",
      content: "From ordering to delivery, the experience was seamless. Our living room has never looked better.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentHero].image}
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                  {heroSlides[currentHero].title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  {heroSlides[currentHero].subtitle}
                </p>
                <Link to="/collections">
                  <Button size="lg" className="group">
                    Explore Collection
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentHero === index ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Collection Coming Soon Section */}
      <section className="py-20 bg-warm-beige/30 dark:bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-subtle-gold/10 border border-subtle-gold/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-subtle-gold" />
              <span className="text-sm font-medium text-subtle-gold tracking-wider uppercase">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
              Collection Coming Soon
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto">
              We are curating an exceptional collection of timeless furniture pieces. 
              Subscribe to be the first to know when we launch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-full focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
              />
              <Button className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-deep-charcoal dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-soft-ivory mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-soft-ivory/70 max-w-2xl mx-auto">
              Real stories from those who have transformed their spaces with NIVELLE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 dark:bg-[#151515] backdrop-blur-sm rounded-2xl p-8 relative border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/20 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-subtle-gold/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-subtle-gold text-subtle-gold" />
                  ))}
                </div>
                <p className="text-soft-ivory/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-soft-ivory">{testimonial.name}</p>
                  <p className="text-sm text-soft-ivory/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-warm-beige dark:bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.05),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
              Join the NIVELLE Experience
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 mb-8 max-w-xl mx-auto">
              Subscribe for exclusive offers, design inspiration, and early access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white dark:bg-[#1a1a1a] rounded-full border border-muted-walnut/30 dark:border-subtle-gold/20 focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
              />
              <Button className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;