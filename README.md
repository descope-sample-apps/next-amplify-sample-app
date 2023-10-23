<img width="1400" alt="Cognito and Descope Banner" src="https://github.com/descope-sample-apps/next-amplify-sample-app/assets/32936811/7bf0734b-3253-4582-b3e4-95e83310cbc5">

---


This sample app is an open-source sample app, built with Next 13 and the Amplify SDK. You can deploy this SSR app in Amplify with the button below. This project also showcases how to store and display user information on a dashboard page and use Next 13's app routing with the Amplify SDK.

You can one-click deploy this app in Amplify, but you'll also need to set up your Cognito User Pool and Amplify Settings in order for the app to work properly. You can do so by following the guide [here]().

[![amplifybutton](https://res.cloudinary.com/practicaldev/image/fetch/s--ubBy37ks--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/descope-sample-apps/next-amplify-sample-app)

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Issue Reporting](#issue-reporting)

## Features ✨

- **Descope Login**: Users can log in with their Descope credentials.
- **User Dashboard**: After logging in, users are redirected to a dashboard that displays the information of the logged-in user.

## Installation 💿

1. Clone the repository:

```bash
git clone https://github.com/descope-sample-apps/cognito-next-sample-app.git
```

2. Install dependencies:

```bash
yarn install
```

3. Setup environment variables:

Use the `.env.example` file in the repo, and change the name to `.env`. Then, fill in the following variables with your own information:

1. **NEXT_PUBLIC_USER_POOL_ID** - This will be your [User Pool ID](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) from Cognito (e.g. us-west-2_ifNfd3LI)

<img width="1097" alt="Monosnap App integration   sample-app-prod   User pools 2023-10-23 09-31-40" src="https://github.com/descope-sample-apps/next-amplify-sample-app/assets/32936811/41a5062d-eeaf-465c-8f9a-326a3accf833">

2. **NEXT_PUBLIC_AWS_REGION** - Your [AWS Region](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) (e.g. us-west-1)

<img width="462" alt="Monosnap App integration   sample-app-prod   User pools 2023-10-23 09-32-24" src="https://github.com/descope-sample-apps/next-amplify-sample-app/assets/32936811/e64647aa-7dd1-407f-9e5d-0f7a1ef12895">

3. **NEXT_PUBLIC_USER_POOL_CLIENT_ID** - Your [User Pool Client ID](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html) of the app that you created in your user pool settings.

<img width="1078" alt="Monosnap App integration   sample-app-prod   User pools 2023-10-23 09-33-00" src="https://github.com/descope-sample-apps/next-amplify-sample-app/assets/32936811/8de6b19a-750b-4024-832e-ba3547223986">

4. **NEXT_PUBLIC_OAUTH_DOMAIN** - This is the [Cognito domain](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html) of your user pool. (e.g. `next-1-dev.auth.us-west-2.amazoncognito.com`)

<img width="1086" alt="Monosnap App integration   sample-app-prod   User pools 2023-10-23 09-31-09" src="https://github.com/descope-sample-apps/next-amplify-sample-app/assets/32936811/5a39d6fc-aca2-4859-a263-341026c9522e">

## Running the Application 🚀

To start the application, run:

```bash
yarn dev
```

Navigate to `http://localhost:3000/` in your browser.

## Issue Reporting ⚠️

For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
