
# Running The Bot

> Instructions for running the bot **outside** of development.

---

1. Register a twitch application https://dev.twitch.tv/console/apps

2. Get an oauth password https://twitchapps.com/tmi/

3. Rename the `settings.json.example` file to `settings.json`

4. Edit the `settings.json` file to include your oauth, nick, channel, and prefix. 

 - The channel is the channel name, not the whole url. Example:
 ❌ ~~https://www.twitch.tv/torch_of_fire~~
 ✅ torch_of_fire
 
 - The prefix is what the chat uses for commands

5. Run a local webserver on this directory (.../twitch_bot_vX.X.X)

 - What I use is Nodejs + http-server. Download https://nodejs.org/en (restart might be required), then in the command prompt use `npm install -g http-server`. Make sure you are in the correct directory and run `http-server`.

6. Pay attention to the port the server is running on. Open your broadcasting software and add a browser instance. Input the URL as `http://localhost:PORT`. Any resolution that isn't really small works.

---

And that's it! Check if it worked by chatting in your stream.


---

## Viewer Commands

| Command |      Description      |
| ------- | --------------------- |
| !left   | moves character left  |
| !right  | moves character right |
| !jump   | character jumps       |
| !leave  | character deletes     |

> Note that you can combine commands. Example: `!leftjump`. It just needs the prefix first and key words after. Prefix can be set as anything else by the host!
