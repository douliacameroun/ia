import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/237673043127"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact sur WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="absolute right-full mr-3 bg-white text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Discutez avec nous
      </span>
    </a>
  );
};

export default WhatsAppButton;