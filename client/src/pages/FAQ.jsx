import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is NIVELLE?',
      answer: 'NIVELLE is a premium furniture brand specializing in timeless, elegant pieces crafted with exceptional attention to detail. We focus on creating furniture that transforms spaces into sanctuaries of modern elegance and comfort.'
    },
    {
      question: 'When will your collections be available?',
      answer: 'We are currently preparing our curated collections for launch. Subscribe to our newsletter to be the first to know when our products become available. Early subscribers will receive exclusive access and special offers.'
    },
    {
      question: 'What materials do you use?',
      answer: 'We use only the finest materials including premium woods, high-quality fabrics, and durable metals. Our commitment to sustainability means we prioritize eco-friendly and ethically sourced materials whenever possible.'
    },
    {
      question: 'Do you offer customization?',
      answer: 'Yes, we offer customization options for select pieces. This includes fabric choices, wood finishes, and dimensions. Contact our team to discuss your specific requirements and create a piece that perfectly fits your space.'
    },
    {
      question: 'What is your delivery process?',
      answer: 'We provide white-glove delivery service for all our furniture. This includes careful handling, placement in your desired room, and removal of packaging materials. Delivery times vary by location and will be confirmed at the time of order.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We want you to be completely satisfied with your purchase. If you are not happy with your furniture, you can return it within 14 days of delivery. Items must be in original condition. Custom orders are non-refundable.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within India. We are working on expanding our shipping capabilities to serve international customers. Follow us on social media for updates on international shipping availability.'
    },
    {
      question: 'How do I care for my furniture?',
      answer: 'Each piece comes with specific care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, and using coasters to protect surfaces. For upholstered items, professional cleaning is recommended annually.'
    },
    {
      question: 'Do you offer interior design consultations?',
      answer: 'Yes! We offer complimentary virtual design consultations to help you select the perfect pieces for your space. Our design experts can provide personalized recommendations based on your style preferences and room dimensions.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team via email at hello@nivelle.com, by phone at +91 98765 43210, or through the contact form on our website. We strive to respond to all inquiries within 24 hours.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Help Center
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our products, services, and policies.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-warm-beige/30 dark:bg-[#111111] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-subtle-gold/30 shadow-[0_0_20px_rgba(198,167,94,0.1)]' 
                    : 'border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="text-lg font-semibold text-deep-charcoal dark:text-soft-ivory pr-4 group-hover:text-subtle-gold transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${
                      openIndex === index ? 'bg-subtle-gold/20' : ''
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-subtle-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-walnut dark:text-soft-ivory/50" />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-subtle-gold/20 to-transparent mb-4" />
                    <p className="text-muted-walnut dark:text-soft-ivory/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Still Have Questions?
            </h2>
            <div className="w-20 h-1 bg-subtle-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 mb-8 max-w-xl mx-auto">
              Our team is here to help. Reach out and we will get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-deep-charcoal dark:bg-subtle-gold text-soft-ivory dark:text-deep-charcoal font-medium rounded-full hover:bg-muted-walnut dark:hover:bg-subtle-gold/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
