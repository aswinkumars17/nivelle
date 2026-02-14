import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Passion',
      description: 'Every piece of furniture we create is born from a deep love for design and an unwavering commitment to quality.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We prioritize eco-friendly materials and ethical manufacturing processes to minimize our environmental footprint.'
    },
    {
      icon: Award,
      title: 'Timeless Quality',
      description: 'Our furniture is built to last generations, using premium materials and expert craftsmanship.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We believe in creating lasting relationships with our customers through exceptional service and support.'
    }
  ];

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-[#1a1a1a] to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-subtle-gold/10 border border-subtle-gold/30 rounded-full text-subtle-gold text-sm tracking-wider uppercase">
              Est. 2018
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-soft-ivory mb-4 sm:mb-6 drop-shadow-2xl"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-soft-ivory/70 max-w-2xl mx-auto"
          >
            Crafting timeless furniture for refined living
          </motion.p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-subtle-gold/30 to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-walnut dark:text-soft-ivory/70 leading-relaxed">
              At NIVELLE, we believe that furniture is more than just functional objects—
              it is the foundation of the spaces where memories are made. Our mission is to 
              create pieces that inspire, comfort, and elevate everyday living through 
              thoughtful design and uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-beige/30 dark:bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group p-4 sm:p-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-deep-charcoal dark:bg-subtle-gold/20 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-soft-ivory dark:text-subtle-gold" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-deep-charcoal dark:text-soft-ivory mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-walnut dark:text-soft-ivory/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6 sm:mb-8 text-center">
              The NIVELLE Journey
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-subtle-gold mx-auto mb-8 sm:mb-12 rounded-full" />
            <div className="space-y-4 sm:space-y-6 text-muted-walnut dark:text-soft-ivory/70 leading-relaxed">
              <p className="text-base sm:text-lg">
                Founded in 2018, NIVELLE began with a simple vision: to create furniture 
                that seamlessly blends modern aesthetics with timeless craftsmanship. 
                What started as a small workshop has grown into a beloved brand known 
                for quality and design excellence.
              </p>
              <p className="text-base sm:text-lg">
                Our team of skilled artisans and designers work collaboratively to bring 
                each piece to life, ensuring that every item that bears the NIVELLE name 
                meets our exacting standards. From the initial sketch to the final stitch, 
                we obsess over every detail.
              </p>
              <p className="text-base sm:text-lg">
                Today, NIVELLE continues to push boundaries in furniture design while 
                staying true to our core values of quality, sustainability, and customer 
                satisfaction. We invite you to experience the NIVELLE difference and 
                transform your space into something extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
