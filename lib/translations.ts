
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
      title: 'Desenvolvedor de Software',
      description: 'Unindo tecnologia, criatividade e propósito para desenvolver soluções que fazem a diferença.',
      contact: 'Entre em contato',
    },
    about: {
      title: 'Sobre Mim',
      p1: `Desenvolvedor de ${age} anos, que gosta muito de  tecnologia e inovação, atualmente cursando o 3º ano do ensino médio integrado ao curso técnico em Análise e Desenvolvimento de Sistemas. Minha trajetória é movida pela curiosidade, pelo aprendizado contínuo e pelo propósito de criar soluções que gerem impacto real na vida das pessoas.`,
      p2: 'Ao longo da minha formação, venho participando de competições, projetos e iniciativas de destaque, como o Top 3 no NASA Space Apps Recife, o 1º lugar no programa Early Stage Sebrae e a participação na WorldSkills, competição internacional de educação profissional que estimula excelência técnica, inovação e desenvolvimento de habilidades práticas. Essas experiências fortaleceram minha capacidade de transformar ideias em projetos funcionais, tanto individualmente quanto em equipe.',
      p3: 'Estou em constante busca por novos desafios que me permitam evoluir tecnicamente, ampliar minha visão sobre tecnologia e contribuir com projetos inovadores, unindo desenvolvimento, criatividade e impacto social.',
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
        text: 'Criado por Lucas Miguel. Todos os direitos reservados.'
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
      title: 'Software Developer',
      description: 'Combining technology, creativity, and purpose to develop solutions that make a difference.',
      contact: 'Get in touch',
    },
    about: {
      title: 'About Me',
      p1: `A ${age}-year-old developer, passionate about technology and innovation, currently in my 3rd year of integrated high school and technical course in Analysis and Systems Development. My trajectory is driven by curiosity, continuous learning, and the purpose of creating solutions that generate real impact in people's lives.`,
      p2: 'Throughout my education, I have been participating in competitions, projects and outstanding initiatives, such as Top 3 at NASA Space Apps Recife, 1st place in the Early Stage Sebrae program and participation in WorldSkills, an international professional education competition that promotes technical excellence, innovation and development of practical skills. These experiences have strengthened my ability to transform ideas into functional projects, both individually and as part of a team.',
      p3: 'I am constantly seeking new challenges that allow me to evolve technically, expand my vision of technology and contribute to innovative projects, combining development, creativity and social impact.',
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
        text: 'Crafted by Lucas Miguel. All rights reserved.'
    }
  },
};
