import type { APIRoute } from 'astro';

import appleAppSiteAssociation from './apple-app-site-association.json';
import { json } from './serve';

export const prerender = false;

export const GET: APIRoute = () => json(appleAppSiteAssociation);
