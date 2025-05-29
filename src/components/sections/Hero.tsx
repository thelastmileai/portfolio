import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Operations Executive',
    'Data Research Specialist',
    'Market Researcher',
    'Administrative Professional',
  ];

  const isDeletingRef = useRef(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const text = titles[currentIndex];
      const isDeleting = isDeletingRef.current;
      const charIndex = charIndexRef.current;

      if (!isDeleting && charIndex < text.length) {
        setTypedText(text.slice(0, charIndex + 1));
        charIndexRef.current += 1;
        timeout = setTimeout(handleTyping, 150);
      } else if (!isDeleting && charIndex === text.length) {
        isDeletingRef.current = true;
        timeout = setTimeout(handleTyping, 2500);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(text.slice(0, charIndex - 1));
        charIndexRef.current -= 1;
        timeout = setTimeout(handleTyping, 75);
      } else if (isDeleting && charIndex === 0) {
        isDeletingRef.current = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        timeout = setTimeout(handleTyping, 500);
      }
    };

    timeout = setTimeout(handleTyping, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          
          opacity: theme === 'dark' ? 0.2 : 0.1,
        }}
      />
      <div
        className={`absolute inset-0 z-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90'
            : 'bg-gradient-to-r from-white via-white/95 to-white/90'
        }`}
      />

      {/* Main content */}
      <div className="container mt-10 px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                Noorjahan KM
              </span>
            </h1>

            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-medium">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a{' '}
                </span>
                <span className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  {typedText}
                </span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl">
              Experienced professional in data & market research, operations, administration, and
              process optimization across multiple sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right image section */}
          <div className="w-full max-w-sm flex-shrink-0">
           <img src="https://github.com/thelastmileai/ImageHost/blob/main/Noorjahan%20KM.png?raw=true" alt="My Photo" className="w-full" />

          </div> 
        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="mb-2">Scroll Down</span>
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
