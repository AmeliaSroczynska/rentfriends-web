import type { ImageMetadata } from 'astro';
import bankierLogo from '../assets/press/bankier.png';
import dziennikNaukowyLogo from '../assets/press/dzienniknaukowy.webp';
import faktLogo from '../assets/press/fakt.svg';
import gazetaPrawnaLogo from '../assets/press/gazetaprawna.png';
import innPolandLogo from '../assets/press/innpoland.png';
import mniswLogo from '../assets/press/mnisw.png';
import naukaWPolsceLogo from '../assets/press/naukawpolsce.svg';
import pwrLogo from '../assets/press/pwr.png';
import radioWroclawLogo from '../assets/press/radiowroclaw.svg';
import regioDomLogo from '../assets/press/regiodom.svg';
import tvp3Logo from '../assets/press/tvp3.svg';
import wnpLogo from '../assets/press/wnp.svg';
import wroclawskieFaktyLogo from '../assets/press/wroclawskiefakty.svg';
import wrocLifeLogo from '../assets/press/wroclife.png';

export type PressOutletType = 'tv' | 'radio' | 'press' | 'portal' | 'university' | 'institution';

export interface PressMention {
    name: string;
    url: string;
    type: PressOutletType;
    logo?: ImageMetadata;
}

export const pressMentions: PressMention[] = [
    {
        name: 'TVP3 Wrocław',
        url: 'https://fb.watch/I-YF2Q7lKr/',
        type: 'tv',
        logo: tvp3Logo,
    },
    {
        name: 'Fakt',
        url: 'https://www.fakt.pl/pieniadze/aplikacja-rentfriends-laczy-studentow-i-mieszkania-tworcy-inspiruja-sie-tinderem/z7wl3hv',
        type: 'press',
        logo: faktLogo,
    },
    {
        name: 'Gazeta Prawna',
        url: 'https://www.gazetaprawna.pl/nowe-technologie/ai/artykuly/11279670,rentfriends-aplikacja-do-szukania-wspollokatorow-mieszkan-pwr-dsw-2026.html',
        type: 'press',
        logo: gazetaPrawnaLogo,
    },
    {
        name: 'Radio Wrocław',
        url: 'https://www.radiowroclaw.pl/articles/view/162970/Dziala-jak-Tinder-ale-pomaga-znalezc-mieszkanie-Studenci-z-Wroclawia-stworzyli-nietypowa-aplikacje',
        type: 'radio',
        logo: radioWroclawLogo,
    },
    {
        name: 'Bankier.pl',
        url: 'https://www.bankier.pl/wiadomosc/Tinder-dla-szukajacych-mieszkania-Wroclawska-aplikacja-zrewolucjonizuje-studencki-wynajem-9172447.html',
        type: 'portal',
        logo: bankierLogo,
    },
    {
        name: 'Nauka w Polsce',
        url: 'https://naukawpolsce.pl/aktualnosci/news%2C114097%2Cstudenci-stworzyli-aplikacje-pomagajaca-znalezc-wspollokatora-i-mieszkanie',
        type: 'portal',
        logo: naukaWPolsceLogo,
    },
    {
        name: 'INNPoland',
        url: 'https://innpoland.pl/231151,aplikacja-studenci-rentfriends',
        type: 'portal',
        logo: innPolandLogo,
    },
    {
        name: 'WNP.PL',
        url: 'https://www.wnp.pl/tech/studenci-stworzyli-aplikacje-pomagajaca-znalezc-wspollokatora-i-mieszkanie,1083910.html',
        type: 'portal',
        logo: wnpLogo,
    },
    {
        name: 'Ministerstwo Nauki i Szkolnictwa Wyższego',
        url: 'https://www.facebook.com/photo?fbid=1339506008351457&set=a.101319708836766',
        type: 'institution',
        logo: mniswLogo,
    },
    {
        name: 'Politechnika Wrocławska',
        url: 'https://pwr.edu.pl/uczelnia/aktualnosci/aplikacja-studentow-pwr-pomoze-w-znalezieniu-idealnych-wspollokatorow-oraz-mieszkania-14250.html',
        type: 'university',
        logo: pwrLogo,
    },
    {
        name: 'Wrocławskie Fakty',
        url: 'https://wroclawskiefakty.pl/szukasz-mieszkania-we-wroclawiu-ta-aplikacja-ma-rozwiazac-problem-wyboru-wspollokatora/',
        type: 'portal',
        logo: wroclawskieFaktyLogo,
    },
    {
        name: 'wroclife',
        url: 'https://wroclife.pl/artykul/8354/wroclawscy-studenci-stworzyli-aplikacje-ktora-pomaga-znalezc-mieszkanie-i-wspollokatora/',
        type: 'portal',
        logo: wrocLifeLogo,
    },
    {
        name: 'RegioDom',
        url: 'https://regiodom.pl/koniec-z-pieklem-lokatorskim-studenci-stworzyli-tindera-do-szukania-mieszkan/ar/c9p2-29206451',
        type: 'portal',
        logo: regioDomLogo,
    },
    {
        name: 'Dziennik Naukowy',
        url: 'https://dzienniknaukowy.pl/studenci-stworzyli-aplikacje-pomagajaca-znalezc-wspollokatora-i-mieszkanie',
        type: 'portal',
        logo: dziennikNaukowyLogo,
    },
];
