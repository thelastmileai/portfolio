import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${theme === 'dark' ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-md'}`
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-2xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 hover:text-blue-500 ${
                activeSection === link.href.substring(1)
                  ? `font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="https://drive.google.com/file/d/1rSY4VkcLfVziB0F6vWhPbhcqH-gV9u_0/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Download size={16} />
            Resume
          </a>
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-yellow-300'
                : 'bg-gray-200 text-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      ></div>
      
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className={`p-2 rounded-md ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-2 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`py-2 transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? `font-medium ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Download size={16} />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
