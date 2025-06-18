import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const { theme } = useTheme();

  const educationData = [
    {
      degree: 'Bachelor of Business Administration (BBA)',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      period: 'Jan 2025 - Present',
      description: 'Currently pursuing to enhance knowledge in business administration and management principles.'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Govt. Polytechnic College, Kalamassery',
      period: '2017 - 2018',
      description: 'Acquired basic technical/programming skills and understanding of computer systems; Discontinued after a year to explore fields better aligned with my long-term interests.'
    },
    {
      degree: 'Higher Secondary: Science',
      institution: 'National Institute of Open Schooling (NIOS)',
      period: '2015 - 2017',
      description: 'Completed higher secondary education with a focus on science subjects.'
    },
    {
      degree: 'High School',
      institution: 'St. Mary\'s HSS, Morakkala, Kochi',
      period: '2015',
      description: 'Completed basic education, establishing a foundation for further academic pursuits.'
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className={`p-3 rounded-full mr-4 ${
                    theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                  }`}>
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-blue-500">{item.institution}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={18} className="mr-2 text-blue-500" />
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {item.period}
                  </span>
                </div>
              </div>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Certifications or Achievements Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Skills & Achievements</h3>
          <div className={`p-6 rounded-lg shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-start">
              <div className={`p-3 rounded-full mr-4 ${
                theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <Award size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Professional Skills Development</h4>
                <p className="mb-4">
                  Throughout my educational and professional journey, I've developed a strong set of skills in data research, market analysis, and operational efficiency. I continually enhance these skills through practical application and self-directed learning.
                </p>
                <p>
                  I'm currently focused on expanding my knowledge in business administration through formal education, while simultaneously developing practical skills in data analysis and business operations through hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
