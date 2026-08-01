import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, Building, ChevronDown, ChevronUp } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  expanded?: boolean;
}

const Experience: React.FC = () => {
  const { theme } = useTheme();
  
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'Product Documentation Specialist',
      company: 'Cyncly',
      period: 'Jul 2026 - Present',
      responsibilities: [
        'Create and update all kinds of documentation for software product solutions, including checking and improving existing documentation.',
        'Write, publish, and distribute customer-friendly documents, including release notes, guides, and knowledgebases of help articles.',
        'Handle the translation organisation and process of documents using translation software.',
        'Ensure all required documentation is ready by Go to Market for new releases and maintain documentation to keep it up-to-date.',
        'Contribute to the creation of videos, in-app help guides, and other digital material where appropriate.',
        'Maintain Documentation Department standards to ensure consistency across the company.'
      ],
      expanded: true
    },
    {
      id: 2,
      title: 'Striven Support Specialist',
      company: 'Miles IT - USA (India - Remote)',
      period: 'Aug 2025 - Jan 2026',
      responsibilities: [
        'Striven is a cloud-based SaaS ERP solution that unifies CRM, Accounting, Operations, and HR tools into one platform, enabling businesses to streamline workflows and improve efficiency.',
        'Supported clients in adopting Striven\'s cloud-based ERP platform by delivering training, account reviews, customer impact meetings, and troubleshooting through tasks, live meetings and chat.',
        'Managed product enhancement requests - Gathered user pain points and feedback from SaaS customers to identify recurring usability issues and product improvement opportunities.',
        'Troubleshoot and recreate system bugs, document clear steps to reproduce, and escalate to the development team for resolution, to verify fixes, and relay client feedback.',
        'Engaged with the Striven Community Forum and ensured a positive customer experience through clear communication and solution-oriented support.'
      ],
      expanded: false
    },
    {
      id: 3,
      title: 'Operations Executive',
      company: 'Leadable',
      period: 'May 2023 - Nov 2024',
      responsibilities: [
        'Conducted comprehensive data research to enhance lead quality, targeting eCommerce, SaaS, Marketing, and Technology industries.',
        'Utilized LinkedIn Sales Navigator, ZoomInfo, Crunchbase, Apollo, ContactOut, and Clearbit for contact/email research and ZeroBounce for email validation, streamlining the b2b lead generation process.',
        'Managed research tasks with high accuracy, consistently meeting or exceeding performance targets.',
        'Coordinated with team members on Slack and Asana, ensuring alignment on project goals and timely task completion.',
        'Built targeted lists of companies based on client briefs and intent to facilitate sending personalized emails.',
        'Conducted AI research to craft personalized email content, leveraging AI technology to enhance engagement with potential leads.'
      ],
      expanded: false
    },
    {
      id: 4,
      title: 'Office Admin and Accountant',
      company: 'EcoViz - Lenore Industries AWLC Division - Kochi',
      period: 'Jul 2022 - Mar 2023',
      responsibilities: [
        'Managed day-to-day office operations, accounting(atACC ERP), and administrative tasks, ensuring smooth workflow and timely completion.'
      ],
      expanded: false
    },
    {
      id: 5,
      title: 'Freelance Article Writer',
      company: 'For a client',
      period: 'May 2022 - May 2023',
      responsibilities: [
        'Produced quality articles tailored to client specifications, demonstrating adaptability in diverse writing styles.'
      ],
      expanded: false
    },
    {
      id: 6,
      title: 'Associate Operations',
      company: 'Invisor Global Education Pvt Ltd - Kochi',
      period: 'Sep 2021 - Jan 2022',
      responsibilities: [
        'Provided operational support in a CMA and ACCA educational setting by efficiently handling student inquiries and resolving support tickets.',
        'Assisted in onboarding new students by facilitating enrollment and addressing initial setup queries.',
        'Coordinated with academic staff to ensure the timely dispatch and delivery of study materials and resources to students.',
        'Maintained accurate records of student interactions and support tasks, contributing to a seamless learning experience.',
        'Performed data entry and administrative duties to support day-to-day operations.'
      ],
      expanded: false
    },
    {
      id: 7,
      title: 'Project Sales Coordinator cum Content Writer',
      company: '50 Concepts/Odroo Technologies Pvt Ltd.',
      period: 'Feb 2021 - Sep 2021',
      responsibilities: [
        'Coordinated sales projects and created content to support marketing initiatives.',
        'Collaborated with technical teams to ensure accurate representation of products in marketing materials.'
      ],
      expanded: false
    },
    {
      id: 8,
      title: 'Content Writer',
      company: 'Hemito Digital Pvt Ltd',
      period: 'Feb 2020 - Jul 2020',
      responsibilities: [
        'Created engaging digital content for various marketing channels.',
        'Researched industry trends to keep content relevant and impactful.'
      ],
      expanded: false
    },
    {
      id: 9,
      title: 'Front Office Administrator',
      company: 'Eyelink Systems',
      period: 'Jan 2019 - Jan 2020',
      responsibilities: [
        'Managed front desk operations, including greeting visitors and handling phone inquiries.',
        'Maintained office supplies and coordinated with vendors for regular deliveries.',
        'Assisted in organizing meetings and maintained executive calendars.'
      ],
      expanded: false
    },
    {
      id: 10,
      title: 'Process Voice Associate',
      company: 'Aabasoft Technologies Pvt Ltd',
      period: 'Oct 2018 - Jan 2019',
      responsibilities: [
        'Handled customer inquiries via phone, providing accurate information and resolving issues.',
        'Maintained detailed records of customer interactions and followed up on unresolved issues.',
        'Collaborated with team members to ensure high-quality customer service.'
      ],
      expanded: false
    },
  ]);

  const toggleJobExpansion = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, expanded: !job.expanded } : job
    ));
  };

  return (
    <section 
      id="experience" 
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>
            
            {/* Timeline Items */}
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'
                } md:w-1/2 pl-12`}
              >
                {/* Timeline Dot - Left Side */}
<div className={`absolute left-full top-12 translate-x-[-50%] w-4 h-4 rounded-full border-2 z-10 ${theme === 'dark' ? 'border-gray-800 bg-blue-500' : 'border-white bg-blue-500'} ${index % 2 === 0 ? 'hidden' : ''}`} />

{/* Timeline Dot - Right Side */}
<div className={`absolute right-full top-12 translate-x-[50%] w-4 h-4 rounded-full border-2 z-10 ${theme === 'dark' ? 'border-gray-800 bg-blue-500' : 'border-white bg-blue-500'} ${index % 2 !== 0 ? 'hidden' : ''}`} />

                {/* Content */}
                <div 
                  className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-650' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <button 
                      onClick={() => toggleJobExpansion(job.id)}
                      className={`p-1 rounded-full transition-colors duration-200 ${
                        theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                      }`}
                      aria-label={job.expanded ? 'Collapse details' : 'Expand details'}
                    >
                      {job.expanded ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Building size={16} className="mr-2 text-blue-500" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span>{job.period}</span>
                  </div>
                  
                  {job.expanded && (
                    <div className="mt-4 space-y-2 animate-fadeIn">
                      <h4 className="font-medium">Key Responsibilities:</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
