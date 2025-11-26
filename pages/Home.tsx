import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Heart, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-sm font-semibold mb-8 backdrop-blur-sm animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-lime-400 mr-2 animate-pulse"></span>
              L'IA au service de l'Afrique
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Propulsez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">croissance</span> par l'IA
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              DOULIA rend l'IA accessible et profitable pour les PME au Cameroun.
              Pas de jargon complexe, juste des résultats concrets pour votre business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-lime-500 hover:bg-lime-600 text-night font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-lime-500/25 flex items-center justify-center gap-2"
              >
                Demander un diagnostic
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/connect"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Découvrir nos solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-midnight/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                La touche DOULIA : <br />
                <span className="text-lime-400">Tomber amoureux de son client</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Notre particularité est de savoir organiser des conditions permettant de produire chez vos clients le sentiment de pleinement compter humainement pour vous.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                La différence ne se fait plus seulement sur les produits, mais sur l'émotion et la relation. DOULIA propose de passer à une gestion de l'attention client assistée par l'IA qui secondarise subtilement la recherche du gain immédiat.
              </p>
              <div className="flex items-center gap-4 text-lime-400 font-semibold">
                <Heart className="fill-current" />
                <span>Hyper-personnalisation de la relation</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-lime-500 blur-3xl opacity-20 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                alt="Intelligence Artificielle et Connexions"
                className="relative rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Packs de Croissance</h2>
            <p className="text-gray-400">Trois solutions adaptées aux défis majeurs des PME camerounaises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-lime-500/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 text-lime-400 group-hover:bg-lime-500 group-hover:text-night group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">DOULIA Connect</h3>
                <p className="text-lime-400 text-sm font-semibold mb-4 uppercase tracking-wider">Relation Client 24/7</p>
                <p className="text-gray-400 mb-6">Ne perdez plus jamais un client. Transformez votre WhatsApp en un service client automatique.</p>
                <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Réponses instantanées</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Prise de RDV auto</li>
                </ul>
                <Link to="/connect" className="text-white font-semibold hover:text-lime-400 flex items-center gap-2 transition-colors">
                  En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-lime-500/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 text-lime-400 group-hover:bg-lime-500 group-hover:text-night group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">DOULIA Process</h3>
                <p className="text-lime-400 text-sm font-semibold mb-4 uppercase tracking-wider">Automatisation</p>
                <p className="text-gray-400 mb-6">Libérez vos employés de la paperasse. Automatisez les rapports et tâches répétitives.</p>
                <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Zéro erreur de saisie</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Gain de temps mesurable</li>
                </ul>
                <Link to="/process" className="text-white font-semibold hover:text-lime-400 flex items-center gap-2 transition-colors">
                  En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/5 hover:border-lime-500/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:to-transparent transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 text-lime-400 group-hover:bg-lime-500 group-hover:text-night group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">DOULIA Insight</h3>
                <p className="text-lime-400 text-sm font-semibold mb-4 uppercase tracking-wider">Business Intelligence</p>
                <p className="text-gray-400 mb-6">Arrêtez de naviguer à vue. Analysez vos données pour prendre des décisions factuelles.</p>
                <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Prédiction des ventes</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-lime-500" /> Marketing ciblé</li>
                </ul>
                <Link to="/insight" className="text-white font-semibold hover:text-lime-400 flex items-center gap-2 transition-colors">
                  En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;