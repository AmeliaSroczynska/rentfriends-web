// Both association files must be served as application/json for iOS and
// Android to accept them. They can't just sit in public/: the Vercel adapter
// emits a Build Output API bundle, which ignores vercel.json, and the AASA file
// has no extension for Vercel to infer a type from. Serving them from a
// function is the only place where we control the header.
export function json(payload: unknown): Response {
    return new Response(JSON.stringify(payload, null, 2), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
