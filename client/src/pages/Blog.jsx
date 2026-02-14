import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Art of Minimalist Living',
      excerpt: 'Discover how minimalist furniture can transform your space and bring clarity to your daily life.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
      category: 'Design'
    },
    {
      title: 'Choosing the Perfect Sofa',
      excerpt: 'A comprehensive guide to selecting a sofa that balances comfort, style, and durability.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop',
      date: 'Jan 10, 2026',
      readTime: '7 min read',
      category: 'Guide'
    },
    {
      title: 'Sustainable Furniture Trends',
      excerpt: 'Exploring eco-friendly materials and practices shaping the future of furniture design.',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=500&fit=crop',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      category: 'Sustainability'
    },
    {
      title: 'Creating Your Dream Bedroom',
      excerpt: 'Tips and inspiration for designing a bedroom that promotes rest and relaxation.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop',
      date: 'Dec 28, 2025',
      readTime: '8 min read',
      category: 'Design'
    },
    {
      title: 'The History of Indian Craftsmanship',
      excerpt: 'A journey through the rich heritage of traditional Indian furniture making.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop',
      date: 'Dec 20, 2025',
      readTime: '10 min read',
      category: 'Heritage'
    },
    {
      title: 'Small Space Solutions',
      excerpt: 'Clever furniture choices and layout ideas for maximizing compact living spaces.',
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=500&fit=crop',
      date: 'Dec 15, 2025',
      readTime: '6 min read',
      category: 'Tips'
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
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-subtle-gold/10 border border-subtle-gold/30 rounded-full text-subtle-gold text-sm tracking-wider uppercase">
              Journal
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6"
          >
            Design Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto"
          >
            Insights, inspiration, and stories from the world of furniture design and interior styling.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-warm-beige/30 dark:bg-[#111111] border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/20 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-subtle-gold/10 border border-subtle-gold/30 text-subtle-gold text-sm font-medium rounded-full w-fit mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-walnut dark:text-soft-ivory/70 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-walnut dark:text-soft-ivory/50 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-subtle-gold font-medium hover:gap-3 transition-all group">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-warm-beige/30 dark:bg-[#111111] rounded-2xl overflow-hidden border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/30 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-subtle-gold/10 border border-subtle-gold/30 text-subtle-gold text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2 group-hover:text-subtle-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-walnut dark:text-soft-ivory/70 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-walnut dark:text-soft-ivory/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
