
import type { Project, Certification } from '../types';
import { BrainIcon } from '../components/icons/BrainIcon';
import { CodeIcon } from '../components/icons/CodeIcon';
import { HeartbeatIcon } from '../components/icons/HeartbeatIcon';
import { NasaLogo } from '../components/icons/NasaLogo';
import { CiscoLogo } from '../components/icons/CiscoLogo';
import { MemakerLogo } from '../components/icons/MemakerLogo';

export const portfolioData = {
    projects: [
        {
            id: 'terra-segura',
            icon: CodeIcon,
            title: {
                pt: 'Terra Segura',
                en: 'Terra Segura'
            },
            description: {
                pt: 'Sistema com microcontrolador ESP32 e sensores de solo para detectar umidade e outros dados, alertando residentes sobre riscos de deslizamento através de um site.',
                en: 'A system with an ESP32 microcontroller and soil sensors to detect humidity and other data, alerting residents to landslide risks via a website.'
            },
            tech: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Firebase', 'ESP32']
        },
        {
            id: 'lembra-mais',
            icon: BrainIcon,
            title: {
                pt: 'Lembra+',
                en: 'Lembra+'
            },
            description: {
                pt: 'Aplicativo para retardar o avanço do Alzheimer através de estímulos cognitivos, com monitoramento em tempo real da localização e atividades do paciente pelo cuidador.',
                en: "An app to slow the progression of Alzheimer's through cognitive stimulation, with real-time monitoring of the patient's location and activities by the caregiver."
            },
            tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
        },
        {
            id: 'senz',
            icon: HeartbeatIcon,
            title: {
                pt: 'Senz',
                en: 'Senz'
            },
            description: {
                pt: 'Pulseira inteligente que detecta ansiedade e intervém em tempo real com estímulos vibrotérmicos, complementada por um app com IA para monitoramento e suporte.',
                en: 'A smart wristband that detects anxiety and intervenes in real-time with vibro-thermal stimuli, complemented by an app with AI for monitoring and support.'
            },
            tech: ['Flutter', 'Firebase', 'ESP32', 'HTML', 'CSS', 'JavaScript', 'AI']
        }
    ] as Project[],
    certifications: [
        {
            id: 1,
            logo: NasaLogo,
            title: { pt: 'Galactic Problem Solver', en: 'Galactic Problem Solver' },
            issuer: 'NASA International Space Apps Challenge',
            date: { pt: 'Verificação emitida em out de 2025', en: 'Verification issued in Oct 2025' },
            skills: { pt: ['Gestão de projetos'], en: ['Project Management'] },
            credentialUrl: 'https://drive.google.com/file/d/1LXunld5R1bbI03DH-LD55mGLIMJnWcpx/view?usp=sharing'
        },
        {
            id: 2,
            logo: CiscoLogo,
            title: { pt: 'Gerenciamento de ameaças cibernéticas', en: 'Cyber Threat Management' },
            issuer: 'Cisco Networking Academy',
            date: { pt: 'Verificação emitida em set de 2025', en: 'Verification issued in Sep 2025' },
            skills: { pt: ['Gestão de vulnerabilidade e ameaça'], en: ['Vulnerability and Threat Management'] },
            credentialUrl: 'https://drive.google.com/file/d/1l9VkN-tx93J-3TP_Bi1731-F8HxqUdi2/view?usp=sharing'
        },
        {
            id: 3,
            logo: CiscoLogo,
            title: { pt: 'CCNA: Redes', en: 'CCNA: Networking' },
            issuer: 'Cisco Networking Academy',
            date: { pt: 'Emitido em jun de 2025 · Expira em jun de 2028', en: 'Issued Jun 2025 · Expires Jun 2028' },
            skills: { pt: ['Redes'], en: ['Networking'] },
            credentialUrl: 'https://drive.google.com/file/d/1-zYR3wfgdUAKF4hP22RfbMQrhWyc7-JG/view?usp=sharing'
        },
        {
            id: 4,
            logo: CiscoLogo,
            title: { pt: 'Defesa de rede', en: 'Network Defense' },
            issuer: 'Cisco Networking Academy',
            date: { pt: 'Verificação emitida em mar de 2025', en: 'Verification issued in Mar 2025' },
            skills: { pt: ['Defesa de redes'], en: ['Network Defense'] },
            credentialUrl: 'https://drive.google.com/file/d/1gnGZb65ENsfzg0uJe0XPJKE9SlDvVPYY/view?usp=sharing'
        },
        {
            id: 5,
            logo: NasaLogo,
            title: { pt: 'Galactic Problem Solver', en: 'Galactic Problem Solver' },
            issuer: 'NASA International Space Apps Challenge',
            date: { pt: 'Verificação emitida em out de 2024', en: 'Verification issued in Oct 2024' },
            skills: { pt: [], en: [] },
            credentialUrl: '#'
        },
        {
            id: 6,
            logo: MemakerLogo,
            title: { pt: 'Projeto Technomaker', en: 'Technomaker Project' },
            issuer: 'INSTITUTO MEMAKER',
            date: { pt: 'Verificação emitida em out de 2024', en: 'Verification issued in Oct 2024' },
            skills: { pt: ['soft skills'], en: ['Soft Skills'] },
            credentialUrl: 'https://drive.google.com/file/d/13iAmtsECxS8B8g0JY4qWHZKsEa8Nvgbb/view?usp=sharing'
        },
        {
            id: 7,
            logo: CiscoLogo,
            title: { pt: 'Fundamentos do Hardware do Computador', en: 'Computer Hardware Fundamentals' },
            issuer: 'Cisco Networking Academy',
            date: { pt: 'Verificação emitida em ago de 2024', en: 'Verification issued in Aug 2024' },
            skills: { pt: ['Hardware'], en: ['Hardware'] },
            credentialUrl: 'https://drive.google.com/file/d/18NqmsW2TK_7v7K5mwMEwqGLHPOKl1xav/view?usp=sharing'
        },
    ] as Certification[]
};
