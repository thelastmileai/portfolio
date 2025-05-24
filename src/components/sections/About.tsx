import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Clock, Map, User, Flag } from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105"
            style={{ maxHeight: '500px' }}
          >
           <img
  src="https://drive.google.com/file/d/1tz2_Upyl-6l4OUKJUsaiGjgpO21ozjDY/view?usp=sharing"
  alt="Hijabi Woman"
  className="w-full h-auto object-cover"
/>

          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Professional Summary</h3>
            <p className="text-lg leading-relaxed">
              Experienced professional in data & market research, operations, administration, and process optimization across multiple sectors. Proficient in advanced lead generation and account management tools, with a strong focus on accuracy and efficiency. Proven ability to multitask, meet performance targets, embrace AI technology and support operational success through effective coordination and communication.
            </p>
            
            <p className="text-lg leading-relaxed">
              I am seeking an Operations Analyst or Market Research role where I can apply data-driven insights to optimize operations and drive measurable improvements. I am also interested in transitioning into Data Analysis or Business Analysis, with a keen interest in positions that offer meaningful learning opportunities and skill development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className={`flex items-center p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <User className="mr-3 text-blue-500" size={20} />
                <div>
                  <h4 className="font-medium">Birth Date</h4>
                  <p>July 15, 1998</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <Map className="mr-3 text-blue-500" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Kochi, Kerala, India</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <Flag className="mr-3 text-blue-500" size={20} />
                <div>
                  <h4 className="font-medium">Nationality</h4>
                  <p>Indian</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <Clock className="mr-3 text-blue-500" size={20} />
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p>6+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
