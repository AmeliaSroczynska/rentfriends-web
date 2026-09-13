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
import rentFriendsLogo from '../assets/logo.png';
import faktArticleImage from '../assets/press-articles/fakt.jpg';
import gazetaPrawnaArticleImage from '../assets/press-articles/gazetaprawna.webp';
import pwrArticleImage from '../assets/press-articles/pwr.jpg';
import radioWroclawArticleImage from '../assets/press-articles/radiowroclaw.jpg';
import wrocLifeArticleImage from '../assets/press-articles/wroclife.jpg';

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

export interface PressArticle {
    outlet: string;
    title: string;
    url: string;
    image?: ImageMetadata;
    logo?: ImageMetadata;
}

export const pressArticles: PressArticle[] = [
    {
        outlet: 'RentFriends',
        title: 'Chcemy ułatwić studentom wynajem i stworzyć przestrzeń, w której spotkasz osobę do dzielenia metrów',
        url: 'https://fb.watch/I-YIaMNbI9/',
        logo: rentFriendsLogo,
    },
    {
        outlet: 'TVP3 Wrocław',
        title: 'Pomaga znaleźć współlokatorów i mieszkanie pasujące do budżetu, lokalizacji i stylu życia',
        url: 'https://fb.watch/I-YF2Q7lKr/',
        logo: tvp3Logo,
    },
    {
        outlet: 'RentFriends',
        title: 'Nowy rok akademicki, nowe mieszkanie - a Ty już znalazłeś współlokatora?',
        url: 'https://fb.watch/I-YJQEax2-/',
        logo: rentFriendsLogo,
    },
    {
        outlet: 'Ministerstwo Nauki i Szkolnictwa Wyższego',
        title: 'Znaleźć mieszkanie i współlokatora idealnie dopasowanego do stylu życia? Pomoże aplikacja studentów z Wrocławia',
        url: 'https://www.facebook.com/photo?fbid=1339506008351457&set=a.101319708836766',
        logo: mniswLogo,
    },
    {
        outlet: 'Radio Wrocław',
        title: 'Działa jak „Tinder”, ale pomaga znaleźć mieszkanie. Studenci z Wrocławia stworzyli nietypową aplikację',
        url: 'https://www.radiowroclaw.pl/articles/view/162970/Dziala-jak-Tinder-ale-pomaga-znalezc-mieszkanie-Studenci-z-Wroclawia-stworzyli-nietypowa-aplikacje',
        image: radioWroclawArticleImage,
    },
    {
        outlet: 'Gazeta Prawna',
        title: 'RentFriends z AI. Nowa polska aplikacja do wynajmu mieszkań i zarządzania domem',
        url: 'https://www.gazetaprawna.pl/nowe-technologie/ai/artykuly/11279670,rentfriends-aplikacja-do-szukania-wspollokatorow-mieszkan-pwr-dsw-2026.html',
        image: gazetaPrawnaArticleImage,
    },
    {
        outlet: 'Politechnika Wrocławska',
        title: 'RentFriends - znajdź idealnego współlokatora dzięki AI',
        url: 'https://pwr.edu.pl/uczelnia/aktualnosci/aplikacja-studentow-pwr-pomoze-w-znalezieniu-idealnych-wspollokatorow-oraz-mieszkania-14250.html',
        image: pwrArticleImage,
    },
    {
        outlet: 'Fakt',
        title: 'Studenci stworzyli aplikację RentFriends do kojarzenia współlokatorów',
        url: 'https://www.fakt.pl/pieniadze/aplikacja-rentfriends-laczy-studentow-i-mieszkania-tworcy-inspiruja-sie-tinderem/z7wl3hv',
        image: faktArticleImage,
    },
    {
        outlet: 'Wrocławskie Fakty',
        title: 'Szukasz mieszkania we Wrocławiu? Ta aplikacja ma rozwiązać problem wyboru współlokatora',
        url: 'https://www.facebook.com/photo/?fbid=1460105562801999&set=a.150851773727391',
        logo: wroclawskieFaktyLogo,
    },
    {
        outlet: 'Wroclife',
        title: 'Wrocławscy studenci stworzyli aplikację, która pomaga znaleźć mieszkanie i współlokatora',
        url: 'https://wroclife.pl/amp/artykul/8354/wroclawscy-studenci-stworzyli-aplikacje-ktora-pomaga-znalezc-mieszkanie-i-wspollokatora',
        image: wrocLifeArticleImage,
    },
];
