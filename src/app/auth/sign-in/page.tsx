'use client';
import { useState } from 'react';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Image from 'next/image';
import DescopeLogo from '/public/img/auth/descope-logo.png';
import Checkbox from 'components/checkbox';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../../../aws-exports';

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

export type FederatedSignInOptionsCustom = {
  customProvider: string;
  customState?: string;
};

function SignInDefault() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      // handle successful sign in, perhaps by redirecting the user or changing the component state
      console.log('User signed in:', user);
    } catch (err) {
      // handle errors, maybe set to a state variable and display to user
      console.error('Error signing in:', err);
      setError(err.message || 'An error occurred during sign-in.');
    }
  };

  return (
    <Default
      maincard={
        <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            <button
              onClick={() =>
                Auth.federatedSignIn({ customProvider: 'Descope' })
              }
              className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white"
            >
              <div className="rounded-full text-xl"></div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                Sign In with
              </p>
              <Image width="25" height="25" src={DescopeLogo} alt="Elon Musk" />
            </button>
            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600"> or </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleSignIn}
              className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Sign In
            </button>
          </div>
        </div>
      }
    />
  );
}

export default SignInDefault;
