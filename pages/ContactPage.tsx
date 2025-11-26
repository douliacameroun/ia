import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'Consultation Générale'
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-]{8,}$/; // Basic validation, at least 8 chars

    if (!formData.name.trim()) newErrors.name = "Le nom complet est requis.";
    
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!formData.message.trim()) newErrors.message = "Veuillez saisir votre message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Simulate submission
      console.log('Form Submitted:', formData);
      setSubmittedName(formData.name);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: 'Consultation Générale'
      });
      setErrors({});
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-midnight py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contactez-nous</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Prêt à transformer votre entreprise ? Remplissez le formulaire ci-dessous pour réserver une démo ou obtenir un devis.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Nos Coordonnées</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center text-lime-400 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Téléphone</h3>
                  <p className="text-gray-400 mt-1">Service Commercial & Support</p>
                  <a href="tel:+237673043127" className="block text-lime-400 hover:text-lime-300 mt-1 font-mono">+237 6 73 04 31 27</a>
                  <a href="tel:+237688954053" className="block text-lime-400 hover:text-lime-300 font-mono">+237 6 88 95 40 53</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center text-lime-400 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-400 mt-1">Écrivez-nous à tout moment</p>
                  <a href="mailto:contact@douliacameroun.com" className="block text-lime-400 hover:text-lime-300 mt-1">contact@douliacameroun.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center text-lime-400 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Localisation</h3>
                  <p className="text-gray-400 mt-1">Douala, Cameroun</p>
                  <p className="text-gray-500 text-sm mt-2">Nous nous déplaçons également dans vos locaux pour les diagnostics.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-800/30 rounded-2xl border border-white/5">
              <h3 className="text-white font-bold mb-4">Besoin d'une réponse immédiate ?</h3>
              <p className="text-gray-400 mb-4">Notre assistant IA est disponible 24/7 en bas à droite de votre écran, ou contactez-nous directement sur WhatsApp.</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center text-night mb-6 shadow-lg shadow-lime-500/50">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Merci {submittedName} !</h3>
                <p className="text-gray-300 mb-6">Votre message a été envoyé avec succès. Un expert de l'équipe DOULIA analysera votre demande et vous recontactera sous 24h.</p>
                <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-4 mb-8">
                  <p className="text-sm text-lime-400">Un e-mail de confirmation vient de vous être envoyé.</p>
                </div>
                <button 
                  onClick={() => { setSubmitted(false); setSubmittedName(''); }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom Complet <span className="text-lime-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-night/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-slate-600 focus:border-lime-500 focus:ring-lime-500'
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-lime-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-night/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-slate-600 focus:border-lime-500 focus:ring-lime-500'
                      }`}
                      placeholder="vous@exemple.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Téléphone <span className="text-lime-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-night/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-slate-600 focus:border-lime-500 focus:ring-lime-500'
                      }`}
                      placeholder="+237..."
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-night/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">Je suis intéressé par</label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-night/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors appearance-none"
                    >
                      <option value="Consultation Générale">Consultation Générale</option>
                      <option value="DOULIA Connect">DOULIA Connect (Chatbots)</option>
                      <option value="DOULIA Process">DOULIA Process (Automatisation)</option>
                      <option value="DOULIA Insight">DOULIA Insight (Data)</option>
                      <option value="Demande de Démo">Demande de Démo</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-lime-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-night/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-slate-600 focus:border-lime-500 focus:ring-lime-500'
                    }`}
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                   {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-night font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-lime-500/20 transform hover:-translate-y-1"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;