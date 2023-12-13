'use client';
import tableDataDevelopment from 'variables/data-tables/tableDataDevelopment';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import CheckTable from 'components/admin/data-tables/CheckTable';
import tableDataColumns from 'variables/data-tables/tableDataColumns';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import DevelopmentTable from 'components/admin/data-tables/DevelopmentTable';
import ColumnsTable from 'components/admin/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/data-tables/ComplexTable';

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

const Tables = ({}) => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable tableData={tableDataDevelopment} />
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable tableData={tableDataColumns} />

        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default withAuthenticator(Tables);
