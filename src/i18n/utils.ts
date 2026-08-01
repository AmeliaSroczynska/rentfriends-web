import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export const locales = Object.keys(ui) as Lang[];

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as Lang;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function stripLocale(pathname: string) {
    const [, maybeLang, ...rest] = pathname.split('/');
    if (maybeLang in ui && maybeLang !== defaultLang) {
        return '/' + rest.join('/');
    }
    return pathname;
}

export function localizePath(pathname: string, lang: Lang) {
    if (lang === defaultLang) return pathname;
    return pathname === '/' ? `/${lang}/` : `/${lang}${pathname}`;
}

export interface AlternateLink {
    hreflang: Lang | 'x-default';
    href: string;
}

export function getAlternateLinks(url: URL, site: URL | string): AlternateLink[] {
    const basePath = stripLocale(url.pathname);
    const links: AlternateLink[] = locales.map((lang) => ({
        hreflang: lang,
        href: new URL(localizePath(basePath, lang), site).toString(),
    }));

    links.push({
        hreflang: 'x-default',
        href: new URL(localizePath(basePath, defaultLang), site).toString(),
    });

    return links;
}