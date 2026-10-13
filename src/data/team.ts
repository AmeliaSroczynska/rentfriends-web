import type { ImageMetadata } from 'astro';
import marvinPhoto from '../assets/marvin.jpeg';
import olaPhoto from '../assets/ola.png';

export interface TeamMember {
    name: string;
    role: string;
    linkedin: string;
    photo?: ImageMetadata;
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Aleksandra Kaziniec',
        role: 'Co-Founder & CEO',
        linkedin: 'https://www.linkedin.com/in/aleksandra-kaziniec/',
        photo: olaPhoto,
    },
    {
        name: 'Marvin Ruciński',
        role: 'Co-Founder & CTO',
        linkedin: 'https://www.linkedin.com/in/marvin-rucinski/',
        photo: marvinPhoto,
    },
];
