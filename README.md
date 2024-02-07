[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.4-yellow?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Twitch.js](https://img.shields.io/badge/Twitch.js-2.0.0--beta.45-purple?style=for-the-badge&logo=twitch&logoColor=white)](https://github.com/twitch-js/twitch-js)
[![Matter.js](https://img.shields.io/badge/Matter.js-0.19.0-green?style=for-the-badge&logoColor=white)](https://github.com/liabru/matter-js)

# Torch's Twitch Chatbot

> This twitch chat bot when ran on a (local) webserver lets you add your twitch chat as characters to your stream. It currently functions as only an overlay that can read twitch chat. It utilizes Matter-js, and Twitch-js.

![OBS Screenshot](https://cdn.discordapp.com/attachments/781570753073774642/1204597222700744744/image.png?ex=65d54f96&is=65c2da96&hm=d4307102ba4fbd27d12e6406f6f28e19f9395137c7588e2f31955dca57e53e94&)
---

Looking to use it without setting it up the project for development?
Download [the latest release](https://github.com/TorchofFire/twitch_bot/releases/latest)

---

## Viewer Commands

| Command |      Description      |
| ------- | --------------------- |
| !left   | moves character left  |
| !right  | moves character right |
| !jump   | character jumps       |
| !leave  | character deletes     |

> Note that you can combine commands. Example: `!leftjump`. It just needs the prefix first and key words after. Prefix can be set as anything else by the host!

## Getting Started With Development

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

### Setup Settings

In the Public folder, copy the `settings.json.example` file and rename it to `settings.json`. Input your settings. Your settings are set to not be tracked by git.

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
This will run the built project. Pay attention to the port hosted since it will most likely be different than development.

## Contributing
I don't have much experience with contributions, but feel free to contribute to this project by opening issues or pull requests.

## Credits
- Damian Borowiak for the art https://free3d.com/user/damianb
- Inspired by [Pirate Software's](https://www.twitch.tv/piratesoftware) ferrets on his stream
