import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Phone, Mail, MapPin, Send, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    emailjs.send(
      'service_69wo80g',
      'template_kij1ks4',
      formData,
      'aM4W47X_gVwJoK4ck'
    ).then(
      () => {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setFormStatus({
          submitted: true,
          error: true,
          message: 'Something went wrong. Please try again later.'
        });
      }
    );
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        {/* ... UI remains the same as before ... */}
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            {/* ... form inputs ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`} />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`} />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">Your Message *</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}></textarea>
            </div>

            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.error ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'}`}>
                {formStatus.message}
              </div>
            )}

            <button type="submit" className={`px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
