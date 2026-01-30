// FIX: Import React to use React.ElementType type.
import React from 'react';

export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  icon: React.ElementType;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  tech: string[];
}

export interface Certification {
    id: number;
    logo: React.ElementType;
    title: {
      pt: string;
      en: string;
    };
    issuer: string;
    date: {
      pt: string;
      en: string;
    };
    skills: {
      pt: string[];
      en: string[];
    };
    credentialUrl: string;
}
