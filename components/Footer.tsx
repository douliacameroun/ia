import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-white/10 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">DOULIA<span className="text-lime-400">.</span></h3>
            <p className="text-sm leading-relaxed mb-4">
              Propulsez votre croissance par l'intelligence artificielle.
              Nous sommes un partenaire 100% local qui comprend les réalités du marché camerounais.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/doulia" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/connect" className="hover:text-lime-400 transition-colors">DOULIA Connect</Link></li>
              <li><Link to="/process" className="hover:text-lime-400 transition-colors">DOULIA Process</Link></li>
              <li><Link to="/insight" className="hover:text-lime-400 transition-colors">DOULIA Insight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-lime-400" />
                Douala, Cameroun
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-lime-400" />
                <a href="mailto:contact@douliacameroun.com" className="hover:text-white">contact@douliacameroun.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-lime-400" />
                <a href="tel:+237673043127" className="hover:text-white">+237 6 73 04 31 27</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-lime-400" />
                <a href="https://www.douliacameroun.com" className="hover:text-white">www.douliacameroun.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DOULIA. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;