# Sidekick Sensor Example Node

The is a very simple sensor to use as a starting point. This sensor simply emits a text event every 3 seconds containing a timestamp.

## Developers

### Install

Ensure NodeJS is installed and working ([Instructions](https://nodejs.org/en/download/package-manager/)).  Node v10 or higher is reccomended.

To install dependencies, run the following command:
```
npm i
```

### Build

Build will compile an executable and output it to the `/build` directory.

Run the following command to build:
```
npm run build
```

### Deploy

Deploying will first build, then copy the built files to the correct location for Sidekick to use them. You do not need to run the build command first, deploying will do it automatically.

This is useful for testing with Sidekick.

Run the following command to deploy:
```
npm run deploy
```
