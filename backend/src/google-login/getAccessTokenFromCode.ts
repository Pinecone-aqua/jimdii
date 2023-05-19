import fetch from 'node-fetch';
import * as queryString from 'query-string';

export async function getAccessTokenFromCode(code: any) {
  console.log('access token');

  const postData = queryString.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.BACKEND_URL}/google/callback`,
    code,
  });

  const { access_token }: any = await fetch(
    'https://oauth2.googleapis.com/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length + '',
      },
      body: postData,
    },
  ).then((response) => response.json());

  return access_token;
}
