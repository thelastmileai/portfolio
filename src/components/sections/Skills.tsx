import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Data Research', level: 100 },
    { name: 'Market Research', level: 95 },
    { name: 'Lead Generation', level: 90 },
    { name: 'LinkedIn Sales Navigator', level: 90 },
    { name: 'Apollo | ZoomInfo | Crunchbase', level: 80 },
    { name: 'ContactOut | RocketReach | ZeroBounce', level: 90 },
    { name: 'Excel | Microsoft Office Suite', level: 95 },
    { name: 'Accounts Management (atACC ERP)', level: 80 },
    { name: 'Google Sheets | Google Workspace level: 95 },
    { name: 'GenAI proficiency (ChatGPT, Claude, Perplexity, Bolt, Gemini)', level: 100 },
    { name: 'Asana | Notion | Monday.com', level: 85 },
    { name: 'Tech-savvy (GitHub, Stack Overflow, Basic Python, Zapier)', level: 85 },
  ];

  const softSkills = [
    { name: 'English Language Proficiency', level: 100 },
    { name: 'Content and Copy Creation', level: 100 },
    { name: 'Office Administration', level: 90 },
    { name: 'Business Operations', level: 90 },
    { name: 'Communication', level: 100 },
    { name: 'Time Management', level: 90 },
    { name: 'Adaptability', level: 100 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Attention to Detail', level: 100 },
    { name: 'Team Collaboration', level: 90 },
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Intermediate' },
    { name: 'Malayalam', level: 'Native' },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills acquired through professional experience and continuous learning.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className={`inline-flex rounded-lg p-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'technical'
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : ''
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'soft'
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : ''
              }`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'languages'
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : ''
              }`}
            >
              Languages
            </button>
          </div>
        </div>
        
        {activeTab === 'technical' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div 
                  className={`w-full h-2.5 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <div 
                    className="h-2.5 rounded-full bg-blue-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'soft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            {softSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div 
                  className={`w-full h-2.5 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <div 
                    className="h-2.5 rounded-full bg-blue-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'languages' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {languages.map((language, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all duration-300 ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                <div className="flex items-center text-blue-500 mb-3">
                  <CheckCircle2 size={18} className="mr-2" />
                  <span>{language.level}</span>
                </div>
                
                {/* Language level visualization */}
                <div className="flex mt-2">
                  {language.level === 'Native' && (
                    <>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                    </>
                  )}
                  {language.level === 'Proficient' && (
                    <>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className={`w-6 h-6 rounded-full mx-1 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}></div>
                    </>
                  )}
                  {language.level === 'Intermediate' && (
                    <>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 mx-1"></div>
                      <div className={`w-6 h-6 rounded-full mx-1 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}></div>
                      <div className={`w-6 h-6 rounded-full mx-1 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
