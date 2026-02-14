import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      name: 'Living Room',
      description: 'Elegant sofas, coffee tables, and accent pieces for your living space.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      comingSoon: true
    },
    {
      name: 'Bedroom',
      description: 'Serene beds, nightstands, and wardrobes for restful retreats.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
      comingSoon: true
    },
    {
      name: 'Dining',
      description: 'Stunning dining tables and chairs for memorable gatherings.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
      comingSoon: true
    },
    {
      name: 'Office',
      description: 'Functional desks and ergonomic chairs for productive workspaces.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      comingSoon: true
    },
    {
      name: 'Outdoor',
      description: 'Durable and stylish furniture for your outdoor oasis.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      comingSoon: true
    },
    {
      name: 'Accessories',
      description: 'Curated decor pieces to complete your interior design.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.08),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-subtle-gold/10 border border-subtle-gold/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-subtle-gold" />
            <span className="text-sm font-medium text-subtle-gold tracking-wider uppercase">Coming Soon</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto"
          >
            Curated furniture collections designed to transform every corner of your home. 
            Each piece is thoughtfully crafted to bring elegance and functionality to your space.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-warm-beige/30 dark:bg-[#111111] border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-subtle-gold/20 border border-subtle-gold/30 text-subtle-gold text-xs font-medium rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-soft-ivory mb-2 drop-shadow-lg">
                    {collection.name}
                  </h3>
                  <p className="text-soft-ivory/70 text-sm">
                    {collection.description}
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-subtle-gold/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-warm-beige/30 dark:bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.05),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
              Be the First to Know
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter and be notified when our collections launch. 
              Get exclusive early access and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white dark:bg-[#1a1a1a] border border-muted-walnut/30 dark:border-subtle-gold/20 rounded-full focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-deep-charcoal dark:bg-subtle-gold text-soft-ivory dark:text-deep-charcoal font-medium rounded-full hover:bg-muted-walnut dark:hover:bg-subtle-gold/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                Notify Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
