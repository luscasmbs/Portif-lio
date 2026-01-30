
import { portfolioData } from '../data/portfolioData';

const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const age = calculateAge('2009-09-02');

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      certifications: 'Certificados',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Lucas Miguel',
      title: 'Desenvolvedor de Software & Inovador',
      description: 'Transformando ideias complexas em soluções tecnológicas impactantes que resolvem problemas do mundo real.',
      contact: 'Entre em contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: `Um desenvolvedor de ${age} anos apaixonado por tecnologia, atualmente no último ano do ensino médio e do curso técnico em Análise e Desenvolvimento de Sistemas. Minha jornada é impulsionada pela curiosidade e pelo desejo de criar soluções que façam a diferença.`,
      p2: 'Com experiência em palestras e competições, incluindo o prêmio Top 3 no NASA Space Apps Recife e o 1º lugar no Early Stage SESC, desenvolvi uma forte habilidade em transformar conceitos em projetos funcionais, tanto de forma independente quanto em equipe.',
      p3: 'Estou sempre em busca de novos desafios para expandir meu conhecimento e aplicar minhas habilidades em projetos inovadores.',
    },
    projects: {
      title: 'Meus Projetos',
    },
    certifications: {
        title: 'Licenças & Certificados',
        viewCredential: 'Exibir credencial',
        skills: 'Competências',
    },
    footer: {
        text: 'Criado com paixão por Lucas Miguel. Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      certifications: 'Certifications',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Lucas Miguel',
      title: 'Software Developer & Innovator',
      description: 'Transforming complex ideas into impactful technological solutions that solve real-world problems.',
      contact: 'Get in touch',
    },
    about: {
      title: 'About Me',
      p1: `A ${age}-year-old developer passionate about technology, currently in my final year of high school and a technical course in Analysis and Systems Development. My journey is driven by curiosity and a desire to create solutions that make a difference.`,
      p2: 'With experience in public speaking and competitions, including the Top 3 award at NASA Space Apps Recife and 1st place at Early Stage SESC, I have developed a strong ability to turn concepts into functional projects, both independently and as part of a team.',
      p3: "I'm always seeking new challenges to expand my knowledge and apply my skills to innovative projects.",
    },
    projects: {
      title: 'My Projects',
    },
    certifications: {
        title: 'Licenses & Certifications',
        viewCredential: 'View credential',
        skills: 'Skills',
    },
     footer: {
        text: 'Crafted with passion by Lucas Miguel. All rights reserved.'
    }
  },
};
