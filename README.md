# iOS Android React Native Mobile App

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/ThryvLabs/CommandCenterMobile/releases)

[![Build Number](https://img.shields.io/badge/build-1-brightgreen.svg)](https://github.com/ThryvLabs/CommandCenterMobile/actions/workflows/build.yml)

[Products Available Here](docs/products.md)

# Getting Started

## Step 2: Setup

```zsh
nvm use
rvm use
gem install bundler
bundle install
yarn
(cd ios && pod install)
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```zsh
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```zsh
yarn android
```

### For iOS

```zsh
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
