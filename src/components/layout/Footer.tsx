import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-8 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-950 text-gray-300' 
          : 'bg-gray-100 text-gray-700'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Noorjahan KM</h3>
            <p className="mb-4 flex items-start">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <span>Kochi, Kerala, India</span>
            </p>
            <p className="mb-4">
              Experienced professional in data research, operations, and administration with a focus on accuracy and efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:nooraa7045@gmail.com" 
                className="flex items-center hover:text-blue-500 transition-colors duration-300"
              >
                <Mail size={18} className="mr-2" />
                nooraa7045@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/noorjahankm/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin size={18} className="mr-2" />
                linkedin.com/in/noorjahankm
              </a>
              <a 
                href="tel:+919895529846" 
                className="flex items-center hover:text-blue-500 transition-colors duration-300"
              >
                <span className="mr-2">📱</span>
                +91 9895529846
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-700 mt-8 pt-6 text-center">
          <p>© {currentYear} Noorjahan KM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;