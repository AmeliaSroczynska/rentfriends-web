import type { APIRoute } from 'astro';

import assetlinks from './assetlinks.json';
import { json } from './serve';

export const prerender = false;

export const GET: APIRoute = () => json(assetlinks);
