// Vercel serverless function: exchanges the OAuth code for a token and
// returns it to Decap CMS. Requires GITHUB_OAUTH_CLIENT_ID/SECRET env vars.

export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    res.status(400).send('Missing code or OAuth env vars');
    return;
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await response.json();

  if (!data.access_token) {
    res.status(401).send('OAuth token exchange failed');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const params = new URLSearchParams({
    token: data.access_token,
    provider: 'github',
  });

  res.statusCode = 302;
  res.setHeader('Location', `https://${host}/admin/#access_token=${params.get('token')}&token_type=bearer&provider=github`);
  res.end();
}
