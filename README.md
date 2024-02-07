[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.4-yellow?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Twitch.js](https://img.shields.io/badge/Twitch.js-2.0.0--beta.45-purple?style=for-the-badge&logo=twitch&logoColor=white)](https://github.com/twitch-js/twitch-js)
[![Matter.js](https://img.shields.io/badge/Matter.js-0.19.0-green?style=for-the-badge&logoColor=white)](https://github.com/liabru/matter-js)

# Torch's Twitch Chatbot

> This twitch chat bot when ran on a (local) webserver lets you add your twitch chat as characters to your stream. It utilizes Matter-js, and Twitch-js.

---

Looking to use it without setting it up the project for development?
Download [the latest release](https://github.com/TorchofFire/twitch_bot/releases/latest)

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TorchofFire/twitch_bot.git
    ```

2. Navigate to the project folder:

    ```bash
    cd twitch_bot
    ```

3. Install dependencies:

    ```bash
    yarn install
    ```

### Usage

1. Start the development server:

    ```bash
    yarn dev
    ```

   This will launch Vite with hot reloading whenever you save.

2. Open your browser and go to [http://localhost:1420](http://localhost:1420) to see the application.

### Build

To build the project for production, use the following command:

```bash
yarn build
```
This will generate optimized and minified production-ready files in the dist folder.

### Preview

To preivew the project after building, use the following command:

```bash
yarn preview
```
This will run the built project. Pay attention to the port hosted since it will most likely be different then development.

## Contributing
I don't have much experience with contributions, but feel free to contribute to this project by opening issues or pull requests.
