import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code2, Rocket, Users, Palette, MessageSquare, ArrowRight,
  Github, Twitter, Linkedin, ChevronRight, Star, ArrowUpRight,
  Menu, X, Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Industry Awards" },
    { number: "24/7", label: "Support Available" }
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Custom Development",
      description: "Tailored web solutions built with cutting-edge technology and best practices for optimal performance."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "User-centric design that combines aesthetics with functionality for exceptional digital experiences."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure lightning-fast load times and smooth interactions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Augmentation",
      description: "Skilled developers ready to join your team and bring your projects to the next level."
    }
  ];

  const portfolio = [
    {
      title: "TechVision Platform",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      client: "TechCorp Inc.",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "EcoStore Marketplace",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      client: "GreenLife",
      tags: ["Next.js", "MongoDB", "AWS"]
    },
    {
      title: "HealthTech Analytics",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      client: "MedTech Solutions",
      tags: ["Vue", "D3.js", "Firebase"]
    }
  ];

  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our digital presence. They delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CEO at TechVision",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      quote: "Their attention to detail and technical expertise helped us achieve remarkable results in record time.",
      author: "Michael Chen",
      role: "CTO at GreenLife",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white w-full" style={{backgroundColor: '#0A0A0F'}}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-display font-bold gradient-text">
              DevCraft
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="nav-link">Services</a>
              <a href="#portfolio" className="nav-link">Work</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="button-primary">
                Get Started <ArrowRight size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <a href="#services" className="nav-link">Services</a>
                <a href="#portfolio" className="nav-link">Work</a>
                <a href="#testimonials" className="nav-link">Testimonials</a>
                <a href="#contact" className="button-primary">
                  Get Started <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-primary/20 to-neutral-950"
        />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              Crafting Digital Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-300 mb-8"
            >
              We transform ideas into exceptional web experiences that captivate and convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="button-primary">
                View Our Work <ArrowRight size={20} />
              </button>
              <button className="button-secondary">
                Play Showreel <Play size={20} />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="stat-card"
                >
                  <span className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight size={24} className="rotate-90 text-neutral-500" />
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Our Expertise
            </h2>
            <p className="text-xl text-neutral-400">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Featured Work
            </h2>
            <p className="text-xl text-neutral-400">
              Explore our latest projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-card group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm text-neutral-400 mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-300 mb-4">
                        {project.client}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-neutral-800/50 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-neutral-400">
              Hear what our clients have to say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <Star className="w-6 h-6 text-yellow-500 mb-4" />
                    <p className="text-lg mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Start Your Project
              </h2>
              <p className="text-xl text-neutral-400">
                Let's create something extraordinary together
              </p>
            </div>

            <div className="card p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-field"
                />
                <textarea
                  placeholder="Your Message"
                  className="input-field md:col-span-2"
                  rows={4}
                />
                <button className="button-primary md:col-span-2">
                  Send Message <MessageSquare size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-950 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-8 md:mb-0">
              © 2025 DevCraft. Crafting digital excellence.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;