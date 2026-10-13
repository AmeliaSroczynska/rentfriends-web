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
import tvpInfoLogo from '../assets/press/tvpinfo.png';
import teleexpressLogo from '../assets/press/teleexpress.png';
import polsatLogo from '../assets/press/polsat.png';
import wyborczaLogo from '../assets/press/wyborcza.png';
import witLogo from '../assets/press/wit.png';
import dswLogo from '../assets/press/dsw.png';
import pytanieNaSniadanieLogo from '../assets/press/pytanienasniadanie.png';
import dzienDobryTvnLogo from '../assets/press/dziendobrytvn.png';
import faktArticleImage from '../assets/press-articles/fakt.jpg';
import gazetaPrawnaArticleImage from '../assets/press-articles/gazetaprawna.webp';
import pwrArticleImage from '../assets/press-articles/pwr.jpg';
import radioWroclawArticleImage from '../assets/press-articles/radiowroclaw.jpg';
import wrocLifeArticleImage from '../assets/press-articles/wroclife.jpg';
import dswArticleImage from '../assets/press-articles/dsw.jpg';
import polsatArticleImage from '../assets/press-articles/polsat.jpg';
import wyborczaArticleImage from '../assets/press-articles/wyborcza-photo.jpg';
import innPolandArticleImage from '../assets/press-articles/innpoland-photo.jpg';
import naukaWPolsceArticleImage from '../assets/press-articles/naukawpolsce-photo.jpg';
import bankierArticleImage from '../assets/press-articles/bankier-photo.jpg';
import tvp3ArticleImage from '../assets/press-articles/tvp3.jpg';
import dziennikNaukowyArticleImage from '../assets/press-articles/dzienniknaukowy-photo.jpg';
import witArticleImage from '../assets/press-articles/wit-photo.jpg';
import wroclawskieFaktyArticleImage from '../assets/press-articles/wroclawskiefakty-photo.jpg';
import mniswArticleImage from '../assets/press-articles/mnisw.jpg';
import tvpInfoArticleImage from '../assets/press-articles/tvpinfo.jpg';
import teleexpressArticleImage from '../assets/press-articles/teleexpress.jpg';
import dzienDobryTvnArticleImage from '../assets/press-articles/dziendobrytvn.jpg';
import tvp3PrzyszloscArticleImage from '../assets/press-articles/tvp3-przyszlosc.jpg';
import pytanieNaSniadanieArticleImage from '../assets/press-articles/pytanienasniadanie.jpg';

export type PressOutletType = 'tv' | 'radio' | 'press' | 'portal' | 'university' | 'institution';

export interface PressMention {
    name: string;
    url: string;
    type: PressOutletType;
    logo?: ImageMetadata;
}

export const pressMentions: PressMention[] = [
    {
        name: 'Pytanie na śniadanie',
        url: 'https://www.instagram.com/rentfriends.app/reel/Ddg_Mz2IMXH/',
        type: 'tv',
        logo: pytanieNaSniadanieLogo,
    },
    {
        name: 'Dzień dobry TVN',
        url: 'https://www.instagram.com/rentfriends.app/reel/DeHktoPIX_2/',
        type: 'tv',
        logo: dzienDobryTvnLogo,
    },
    {
        name: 'TVP3 Wrocław',
        url: 'https://wroclaw.tvp.pl/94784210/sierpien-to-miesiac-w-ktorym-studenci-juz-szukaja-zakwaterowania',
        type: 'tv',
        logo: tvp3Logo,
    },
    {
        name: 'TVP Info',
        url: 'https://fb.watch/I-YIaMNbI9/',
        type: 'tv',
        logo: tvpInfoLogo,
    },
    {
        name: 'Teleexpress Extra',
        url: 'https://fb.watch/I-YJQEax2-/',
        type: 'tv',
        logo: teleexpressLogo,
    },
    {
        name: 'Polsat',
        url: 'https://www.instagram.com/reel/DdOceYaof1U/',
        type: 'tv',
        logo: polsatLogo,
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
        name: 'Gazeta Wyborcza Wrocław',
        url: 'https://wroclaw.wyborcza.pl/wroclaw/7,35771,32986280,chcesz-ze-mna-zamieszkac-zainspirowani-aplikacjami-randkowymi.html',
        type: 'press',
        logo: wyborczaLogo,
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
        name: 'Wydział Informatyki i Telekomunikacji PWr',
        url: 'https://wit.pwr.edu.pl/aktualnosci/aplikacja-wspoltworzona-przez-absolwenta-wit-pomaga-znalezc-wspollokatora-i-mieszkanie-606.html',
        type: 'university',
        logo: witLogo,
    },
    {
        name: 'Uniwersytet DSW',
        url: 'https://www.facebook.com/Uniwersytet.DSW.Ideis.Wroclaw/posts/pfbid02ETVaGYWpmJYjW7wkRJ9owJq1HUedvwZqHtf56bTXwH7YrsBaEbdrkA5AHi4gYph5l?locale=pl_PL',
        type: 'university',
        logo: dswLogo,
    },
    {
        name: 'Wrocławskie Fakty',
        url: 'https://wroclawskiefakty.pl/szukasz-mieszkania-we-wroclawiu-ta-aplikacja-ma-rozwiazac-problem-wyboru-wspollokatora/',
        type: 'portal',
        logo: wroclawskieFaktyLogo,
    },
    {
        name: 'wroclife',
        url: 'https://wroclife.pl/amp/artykul/8354/wroclawscy-studenci-stworzyli-aplikacje-ktora-pomaga-znalezc-mieszkanie-i-wspollokatora',
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
        outlet: 'Pytanie na śniadanie',
        title: 'RentFriends w Pytaniu na śniadanie',
        url: 'https://www.instagram.com/rentfriends.app/reel/Ddg_Mz2IMXH/',
        image: pytanieNaSniadanieArticleImage,
    },
    {
        outlet: 'Dzień dobry TVN',
        title: 'RentFriends w Dzień dobry TVN',
        url: 'https://www.instagram.com/rentfriends.app/reel/DeHktoPIX_2/',
        image: dzienDobryTvnArticleImage,
    },
    {
        outlet: 'TVP Info',
        title: 'Chcemy ułatwić studentom wynajem i stworzyć przestrzeń, w której spotkasz osobę do dzielenia metrów',
        url: 'https://fb.watch/I-YIaMNbI9/',
        image: tvpInfoArticleImage,
    },
    {
        outlet: 'Teleexpress Extra',
        title: 'Nowy rok akademicki, nowe mieszkanie - a Ty już znalazłeś współlokatora?',
        url: 'https://fb.watch/I-YJQEax2-/',
        image: teleexpressArticleImage,
    },
    {
        outlet: 'Ministerstwo Nauki i Szkolnictwa Wyższego',
        title: 'Znaleźć mieszkanie i współlokatora idealnie dopasowanego do stylu życia? Pomoże aplikacja studentów z Wrocławia',
        url: 'https://www.facebook.com/photo?fbid=1339506008351457&set=a.101319708836766',
        image: mniswArticleImage,
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
        title: 'Aplikacja studentów PWr pomoże w znalezieniu idealnych współlokatorów i mieszkania',
        url: 'https://pwr.edu.pl/uczelnia/aktualnosci/aplikacja-studentow-pwr-pomoze-w-znalezieniu-idealnych-wspollokatorow-oraz-mieszkania-14250.html',
        image: pwrArticleImage,
    },
    {
        outlet: 'Wrocławskie Fakty',
        title: 'Szukasz mieszkania we Wrocławiu? Ta aplikacja ma rozwiązać problem wyboru współlokatora',
        url: 'https://wroclawskiefakty.pl/szukasz-mieszkania-we-wroclawiu-ta-aplikacja-ma-rozwiazac-problem-wyboru-wspollokatora/',
        image: wroclawskieFaktyArticleImage,
    },
    {
        outlet: 'Wroclife',
        title: 'Wrocławscy studenci stworzyli aplikację, która pomaga znaleźć mieszkanie i współlokatora',
        url: 'https://wroclife.pl/amp/artykul/8354/wroclawscy-studenci-stworzyli-aplikacje-ktora-pomaga-znalezc-mieszkanie-i-wspollokatora',
        image: wrocLifeArticleImage,
    },
    {
        outlet: 'Dziennik Naukowy',
        title: 'Studenci stworzyli aplikację pomagającą znaleźć współlokatora i mieszkanie',
        url: 'https://dzienniknaukowy.pl/studenci-stworzyli-aplikacje-pomagajaca-znalezc-wspollokatora-i-mieszkanie',
        image: dziennikNaukowyArticleImage,
    },
    {
        outlet: 'Fakt',
        title: 'Aplikacja RentFriends łączy studentów i mieszkania. Twórcy inspirują się Tinderem',
        url: 'https://www.fakt.pl/pieniadze/aplikacja-rentfriends-laczy-studentow-i-mieszkania-tworcy-inspiruja-sie-tinderem/z7wl3hv',
        image: faktArticleImage,
    },
    {
        outlet: 'TVP3 Wrocław',
        title: '„Sierpień to miesiąc, w którym studenci już szukają zakwaterowania”',
        url: 'https://wroclaw.tvp.pl/94784210/sierpien-to-miesiac-w-ktorym-studenci-juz-szukaja-zakwaterowania',
        image: tvp3ArticleImage,
    },
    {
        outlet: 'Bankier.pl',
        title: '„Tinder” dla szukających mieszkania. Wrocławska aplikacja zrewolucjonizuje studencki wynajem',
        url: 'https://www.bankier.pl/wiadomosc/Tinder-dla-szukajacych-mieszkania-Wroclawska-aplikacja-zrewolucjonizuje-studencki-wynajem-9172447.html',
        image: bankierArticleImage,
    },
    {
        outlet: 'Nauka w Polsce',
        title: 'Studenci stworzyli aplikację pomagającą znaleźć współlokatora i mieszkanie',
        url: 'https://naukawpolsce.pl/aktualnosci/news%2C114097%2Cstudenci-stworzyli-aplikacje-pomagajaca-znalezc-wspollokatora-i-mieszkanie',
        image: naukaWPolsceArticleImage,
    },
    {
        outlet: 'Uniwersytet DSW',
        title: 'RentFriends - znajdź idealny wynajem dla siebie',
        url: 'https://www.facebook.com/Uniwersytet.DSW.Ideis.Wroclaw/posts/pfbid02ETVaGYWpmJYjW7wkRJ9owJq1HUedvwZqHtf56bTXwH7YrsBaEbdrkA5AHi4gYph5l?locale=pl_PL',
        image: dswArticleImage,
    },
    {
        outlet: 'Polsat',
        title: 'RentFriends w Polsacie',
        url: 'https://www.instagram.com/reel/DdOceYaof1U/',
        image: polsatArticleImage,
    },
    {
        outlet: 'INNPoland',
        title: 'Studenci z Wrocławia stworzyli apkę RentFriends. To „Tinder” dla współlokatorów',
        url: 'https://innpoland.pl/231151,aplikacja-studenci-rentfriends',
        image: innPolandArticleImage,
    },
    {
        outlet: 'Wydział Informatyki i Telekomunikacji PWr',
        title: 'Aplikacja współtworzona przez absolwenta WIT pomoże znaleźć współlokatora i mieszkanie',
        url: 'https://wit.pwr.edu.pl/aktualnosci/aplikacja-wspoltworzona-przez-absolwenta-wit-pomaga-znalezc-wspollokatora-i-mieszkanie-606.html',
        image: witArticleImage,
    },
    {
        outlet: 'Gazeta Wyborcza Wrocław',
        title: 'RentFriends. Wrocławscy twórcy uruchomili aplikację do szukania mieszkań',
        url: 'https://wroclaw.wyborcza.pl/wroclaw/7,35771,32986280,chcesz-ze-mna-zamieszkac-zainspirowani-aplikacjami-randkowymi.html',
        image: wyborczaArticleImage,
    },
    {
        outlet: 'TVP3 Wrocław - Przyszłość jest teraz',
        title: 'RentFriends w programie Przyszłość jest teraz',
        url: 'https://www.instagram.com/rentfriends.app/reel/DeZc_pBOhjg/',
        image: tvp3PrzyszloscArticleImage,
    },
];
