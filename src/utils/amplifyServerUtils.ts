import { createServerRunner } from '@aws-amplify/adapter-nextjs';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
        loginWith: {
          oauth: {
            domain: `${process.env.NEXT_PUBLIC_OAUTH_DOMAIN}`,
            scopes: ['openid', 'email', 'phone', 'profile'],
            redirectSignIn: ['http://localhost:3000/'],
            redirectSignOut: ['http://localhost:3000/'],
            responseType: 'code',
          },
        },
      },
    },
  },
});
