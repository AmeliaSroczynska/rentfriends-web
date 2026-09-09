const API_BASE = (
    import.meta.env.PUBLIC_API_BASE_URL ?? 'https://api.rentfriends.app'
).replace(/\/$/, '');

export interface PublicRoom {
    id: number;
    label: string;
    price: string | number | null;
    room_type: string | null;
    available_from: string | null;
    order: number;
    photo: string | null;
    photos: { id: number; photo: string | null; order: number }[];
}

export interface PublicListing {
    id: number;
    share_uuid: string;
    user_id: number;
    owner_share_uuid?: string;
    card_type: 'apartment';
    city: string;
    district: string;
    occupants_count: number;
    bio: string;
    photo: string | null;
    photos: (string | null)[];
    rooms: PublicRoom[];
    owner_name: string;
    owner_photo: string | null;
    created_at: string;
}

export interface PublicLandlord {
    user_id: number;
    share_uuid: string;
    name: string;
    photo: string | null;
    city: string;
    listings: PublicListing[];
}

async function getJson<T>(path: string): Promise<T | null> {
    try {
        const response = await fetch(`${API_BASE}${path}`, {
            headers: { Accept: 'application/json' },
        });
        if (!response.ok) return null;
        return (await response.json()) as T;
    } catch {
        // A share link must degrade to a 404 page rather than a 500 when the
        // API is unreachable.
        return null;
    }
}

export function fetchListing(id: string | number) {
    return getJson<PublicListing>(`/api/matcher/public/listing/${id}/`);
}

export function fetchLandlord(id: string | number) {
    return getJson<PublicLandlord>(`/api/matcher/public/landlord/${id}/`);
}

export function listingPhotos(listing: PublicListing): string[] {
    const urls = [
        ...listing.photos,
        ...listing.rooms.flatMap((room) => room.photos.map((p) => p.photo)),
    ];
    return [...new Set(urls.filter((url): url is string => Boolean(url)))];
}

export function priceRange(listing: PublicListing): { min: number; max: number } | null {
    const prices = listing.rooms
        .map((room) => Number(room.price))
        .filter((price) => Number.isFinite(price) && price > 0);
    if (!prices.length) return null;
    return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function formatPriceRange(listing: PublicListing, suffix: string): string | null {
    const range = priceRange(listing);
    if (!range) return null;
    return range.min === range.max
        ? `${range.min} ${suffix}`
        : `${range.min}–${range.max} ${suffix}`;
}

export function locationLabel(listing: PublicListing): string {
    return [listing.city, listing.district].filter(Boolean).join(', ');
}

export function formatDate(raw: string | null, lang: string): string | null {
    if (!raw) return null;
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return null;
    return date.toLocaleDateString(lang === 'en' ? 'en-GB' : 'pl-PL', {
        day: 'numeric',
        month: 'long',
    });
}
