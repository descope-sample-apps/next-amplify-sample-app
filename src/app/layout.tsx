import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { Amplify, withSSRContext } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    mandatorySignIn: false,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    oauth: {
      domain: `${process.env.NEXT_PUBLIC_OAUTH_DOMAIN}`,
      scope: ['openid', 'email', 'phone', 'profile'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code',
    },
  },
  ssr: true,
});

// Amplify.configure({ ...awsExports, ssr: true });

const { Auth } = withSSRContext();

Auth.configure({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
  mandatorySignIn: false,
});

export const metadata = {
  title: 'Descope + Cognito Next Sample App',
  description:
    'A Next.js App that shows you how to use Descope and Cognito as the federated IdP, with the Amplify SDK',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
