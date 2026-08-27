// Vercel serverless function: starts the GitHub OAuth flow for Decap CMS.
// Setup:
//  1. Create a GitHub OAuth App (https://github.com/settings/developers)
//     - Homepage URL:    https://YOUR-DOMAIN
//     - Callback URL:    https://YOUR-DOMAIN/api/oauth/callback
//  2. In Vercel, set env vars GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET.

export default function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/oauth/callback`;

  if (!clientId) {
    res.status(500).send('Missing GITHUB_OAUTH_CLIENT_ID env var');
    return;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo',
    state: Math.random().toString(36).slice(2),
  });

  res.statusCode = 302;
  res.setHeader('Location', `https://github.com/login/oauth/authorize?${params}`);
  res.end();
}
