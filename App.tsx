import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AIAssistant from './components/AIAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import { ServicePack } from './types';

// SEO Configuration
const seoConfig: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: "DOULIA - Solutions d'Intelligence Artificielle pour PME au Cameroun",
    description: "Propulsez votre croissance avec DOULIA. Experts en IA à Douala : chatbots WhatsApp, automatisation des processus et analyse de données pour les entreprises camerounaises.",
    keywords: "IA Cameroun, Intelligence Artificielle Douala, Agence IA Cameroun, Solutions IA PME, Transformation Numérique Afrique"
  },
  '/connect': {
    title: "DOULIA Connect - Chatbots WhatsApp et Service Client IA",
    description: "Transformez votre service client avec DOULIA Connect. Assistants virtuels 24/7 sur WhatsApp et Web pour prise de RDV et qualification de prospects.",
    keywords: "Chatbot WhatsApp Cameroun, Service Client Automatisé, Assistant Virtuel IA, Chatbot Douala, Qualification Prospects IA"
  },
  '/process': {
    title: "DOULIA Process - Automatisation et RPA pour Entreprises",
    description: "Réduisez la paperasse et les tâches répétitives. DOULIA Process déploie des agents IA pour automatiser vos rapports et opérations internes.",
    keywords: "RPA Cameroun, Automatisation Processus Métier, Logiciel Gestion PME, IA Productivité Entreprise, Digitalisation Administrative"
  },
  '/insight': {
    title: "DOULIA Insight - Business Intelligence et Analyse de Données",
    description: "Exploitez vos données pour vendre mieux. Prédiction des ventes, optimisation des stocks et marketing ciblé grâce à l'IA.",
    keywords: "Business Intelligence Douala, Analyse de Données PME, Prédiction Ventes IA, Big Data Cameroun, Marketing Prédictif"
  },
  '/contact': {
    title: "Contactez DOULIA - Devis et Démo Solutions IA",
    description: "Demandez votre diagnostic gratuit ou une démo de nos solutions IA. Basé à Douala, Cameroun. Contactez-nous sur WhatsApp ou par email.",
    keywords: "Contact Agence IA, Devis Chatbot, Expert IA Douala, Consultation Intelligence Artificielle, Démo Solution IA"
  }
};

// Component to handle SEO and Scroll behavior
const PageHandler = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);

    // 2. Update SEO Metadata
    const config = seoConfig[pathname] || seoConfig['/'];
    
    // Update Title
    document.title = config.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);

  }, [pathname]);

  return null;
};

// Data for service pages
const services: Record<string, ServicePack> = {
  connect: {
    id: 'connect',
    title: 'DOULIA Connect',
    subtitle: 'Service Client & Vente',
    description: "Transformez votre WhatsApp et votre site web en un commercial qui ne dort jamais. Notre assistant virtuel intelligent gère 80% des interactions clients sans intervention humaine.",
    features: [
      "Réponse instantanée 24/7 (Français, Anglais)",
      "Prise de rendez-vous automatique",
      "Qualification de prospects (profilage)",
      "Zéro client perdu ou frustré par l'attente",
      "Augmentation directe des ventes"
    ],
    idealFor: ["Etablissements financiers", "Cliniques", "Hôtels", "Restaurants", "Avocats", "E-commerce"],
    icon: 'message'
  },
  process: {
    id: 'process',
    title: 'DOULIA Process',
    subtitle: 'Automatisation Intelligente',
    description: "Vos employés passent-ils trop de temps sur des tâches répétitives ? Nous déployons des agents IA qui automatisent la paperasse et les rapports.",
    features: [
      "Automatisation des rapports",
      "Réduction drastique des erreurs de saisie",
      "Libération des employés pour tâches à forte valeur",
      "Veille concurrentielle automatisée",
      "Gain de temps immédiat"
    ],
    idealFor: ["Finances", "Logistique", "Administration", "Services B2B"],
    icon: 'process'
  },
  insight: {
    id: 'insight',
    title: 'DOULIA Insight',
    subtitle: 'Analyse de Données',
    description: "Vos données clients valent de l'or. Nous les analysons pour révéler des tendances cachées, optimiser votre marketing et prédire vos stocks.",
    features: [
      "Compréhension fine du comportement client",
      "Prédiction des ventes et optimisation des stocks",
      "Campagnes marketing ciblées",
      "Augmentation de la fidélité client",
      "Prise de décision factuelle"
    ],
    idealFor: ["Commerce de détail", "Industrie", "Marketing", "Santé"],
    icon: 'chart'
  }
};

const App: React.FC = () => {
  return (
    <Router>
      <PageHandler />
      <div className="bg-night min-h-screen text-white font-sans selection:bg-lime-500 selection:text-night">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<ServicePage pack={services.connect} />} />
            <Route path="/process" element={<ServicePage pack={services.process} />} />
            <Route path="/insight" element={<ServicePage pack={services.insight} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <AIAssistant />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;