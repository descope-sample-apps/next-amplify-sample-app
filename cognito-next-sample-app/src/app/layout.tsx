import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure({ ...awsExports, ssr: true });

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
