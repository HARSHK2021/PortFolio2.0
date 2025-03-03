import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Heart, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <Github size={20} />, name: 'Github', url: 'https://github.com' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-dark-gray py-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Play size={20} className="text-neon-green mr-2" />
            <span className="text-lg font-mono font-bold">Harsh</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <button 
              onClick={scrollToTop}
              className="text-sm text-gray-400 hover:text-neon-green transition-colors hover-effect"
            >
              Back to top
            </button>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-neon-green transition-colors hover-effect"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p className="mb-2">{t('footer.copyright').replace('Tajmirul', 'Harsh')}</p>
          <p className="flex items-center justify-center gap-1">
            {t('footer.designed')} <Heart size={14} className="text-red-500" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;