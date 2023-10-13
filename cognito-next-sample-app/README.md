<img width="1400" alt="Monosnap Github Profile Header Generator 2023-07-20 23-09-34" src="https://github.com/descope-sample-apps/cognito-next-sample-app/assets/32936811/5eeb4ba7-638d-444b-a431-4b6749af1cbe">

---

This sample app is an open-source sample app, built with Next 13 and the Amplify SDK. You can deploy this SSR app in Amplify with the button below. This project also showcases how to store and display user information on a dashboard page and use Next 13's app routing with the Amplify SDK.

You can one-click deploy this app in Amplify, but you'll also need to set up your Cognito User Pool and Amplify Settings in order for the app to work properly. You can do so by following the guide [here]().

[![amplifybutton](https://res.cloudinary.com/practicaldev/image/fetch/s--ubBy37ks--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/descope-sample-apps/cognito-next-sample-app/)

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
npm install
```

3. Setup environment variables:

Use the `.env.example` file in the repo, and change the name to `.env`. Then, fill in the following variables with your own information:

1. **Client ID** - This will be your Descope Project ID, which you can find under [Project Settings](https://app.descope.com/settings/project), in the console.

2. **Client Secret** - A Descope Access Key you can generate under [Access Keys](https://app.descope.com/accesskeys), in the console.

## Running the Application 🚀

To start the application, run:

```bash
npm run dev
```

Navigate to `http://localhost:3000/` in your browser.

## Issue Reporting ⚠️

For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
