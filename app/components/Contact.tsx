import React from 'react';
import '../styles/For-Responsiveness.css'

const Contact: React.FC = () => {
  return (
    <div className="max-w-[600px] mx-auto p-5 bg-[#f9f9f9] rounded-lg shadow-md">
      <h1 className="text-center text-2xl mb-5 text-[#333]">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-base text-[#666] mb-1">Your Name</label>
          <input type="text" id="name" className="p-2 text-base border border-[#ddd] rounded-md outline-none transition-all duration-300 ease-in-out focus:border-[#0070f3]" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="text-base text-[#666] mb-1">Your Email</label>
          <input type="email" id="email" className="p-2 text-base border border-[#ddd] rounded-md outline-none transition-all duration-300 ease-in-out hover:border-[#0070f3]" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-base text-[#666] mb-1">Your Message</label>
          <textarea id="message" className="p-2 text-base border border-[#ddd] rounded-md outline-none transition-all duration-300 ease-in-out focus:border-[#0070f3] resize-y min-h-[100px]" />
        </div>
        
        <button type="submit" className="p-2.5 px-3 text-base text-white bg-[#0070f3] border-none rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#005bb5]">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;