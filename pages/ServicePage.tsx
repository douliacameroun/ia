import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { ServicePack } from '../types';

interface ServicePageProps {
  pack: ServicePack;
}

const ServicePage: React.FC<ServicePageProps> = ({ pack }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-midnight py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-lime-400 font-bold tracking-wide uppercase mb-2 text-sm">{pack.subtitle}</h2>
            <h1 className="text-5xl font-bold text-white mb-6">{pack.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{pack.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Avantages pour votre PME</h3>
            <div className="space-y-6">
              {pack.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/20 flex items-center justify-center text-lime-400 mt-1">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 hover:bg-lime-600 text-night font-bold rounded-xl transition-all duration-300 shadow-lg shadow-lime-500/20"
              >
                Commander ce pack
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Idéal pour :</h3>
            <div className="flex flex-wrap gap-3">
              {pack.idealFor.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-lime-900/20 to-transparent rounded-xl border border-lime-500/20">
              <h4 className="text-lime-400 font-bold mb-2">Pourquoi DOULIA ?</h4>
              <p className="text-sm text-gray-400">
                Nous ne vendons pas juste de la technologie. Nous vendons une solution clé en main qui s'intègre à votre réalité camerounaise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;