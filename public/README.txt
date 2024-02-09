
# Running The Bot

> Instructions for running the bot **outside** of development.

---

1. Register a twitch application https://dev.twitch.tv/console/apps

2. Get an oauth password https://twitchapps.com/tmi/

3. Edit the `settings.json` file to include your oauth, nick, channel, and prefix. 

 - The channel is the channel name, not the whole url. Example:
 ❌ ~~https://www.twitch.tv/torch_of_fire~~
 ✅ torch_of_fire
 
 - The prefix is what the chat uses for commands

4. Optional: Change out the character images in `character-images`

 - There at least needs to be 1 and you can have as many as you'd like. You ***need*** to edit the `imageIndex.json` file with your changes!

5. Run the local webserver by running the provided `localserver.exe`

 - Or, just run any random local webserver on this directory (.../twitch_bot_vX.X.X).

6. Pay attention to the port the server is running on. Open your broadcasting software and add a browser instance. Input the URL as `http://localhost:PORT`. Any resolution that isn't really small works.

> Note that if you make any file changes you will need to restart the server and refresh the browser instance.

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
