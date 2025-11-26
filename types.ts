export interface ServicePack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string[];
  icon: 'message' | 'process' | 'chart';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  interest: string;
}