'use client';
import Banner from 'components/admin/profile/Banner';
import General from 'components/admin/profile/General';
import Notification from 'components/admin/profile/Notification';
import Project from 'components/admin/profile/Project';
import Storage from 'components/admin/profile/Storage';
import Upload from 'components/admin/profile/Upload';

import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

Amplify.configure({
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
});

// Amplify.configure({
//   Auth: {
//     region: process.env.NEXT_PUBLIC_AWS_REGION,
//     userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
//     userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
//     mandatorySignIn: false,
//     authenticationFlowType: 'USER_PASSWORD_AUTH',
//     oauth: {
//       domain: `${process.env.NEXT_PUBLIC_OAUTH_DOMAIN}`,
//       scope: ['openid', 'email', 'phone', 'profile'],
//       redirectSignIn: 'http://localhost:3000/',
//       redirectSignOut: 'http://localhost:3000/',
//       responseType: 'code',
//     },
//   },
//   ssr: true,
// });

const ProfileOverview = ({ user }: WithAuthenticatorProps) => {
  return (
    <div className="flex w-full flex-col gap-5 lg:gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
      {/* all project & ... */}

      <div className="mb-4 grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>

        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(ProfileOverview);
