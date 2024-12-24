import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface ComponentProps {
  children?: ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink extends NavigationItem {
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}