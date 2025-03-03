import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
  
  const response = await fetch('https://formsubmit.co/harshsagar396@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  console.log(response);
  if (response.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } else {
    alert('Failed to send message.');
  }
    
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-green" size={24} />,
      title: t('contact.info.email'),
      value: 'harshsagar396@gmail.com'
    },
    {
      icon: <Phone className="text-neon-green" size={24} />,
      title: t('contact.info.phone'),
      value: '+91 7303325578'
    },
    {
      icon: <MapPin className="text-neon-green" size={24} />,
      title: t('contact.info.location'),
      value: 'Greater Noida , India'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, name: 'Github', url: 'https://github.com/HARSHK2021' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/harshsagar100/' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title after:content-[''] after:block after:w-24 after:h-1 after:bg-neon-green after:mx-auto after:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.title')}
          </motion.h2>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-gray border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-gray border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-light-gray border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2 hover-effect"
              >
                <Send size={18} />
                {t('contact.send')}
              </button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-dark-gray rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{info.title}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 bg-dark-gray rounded-full hover:bg-light-gray transition-colors hover-effect"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;