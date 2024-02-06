import { Chat, ChatEvents } from 'twitch-js';
import settings from '../../settings.json';
import Character from '../objects/character';
import { charactersService } from './characters.service';

class TwitchChatService {

    public async init(): Promise<void> {
        const chat = new Chat({
            username: settings.nick,
            token: settings.oauth
        });

        await chat.connect();
        await chat.join(settings.channel);

        chat.on(ChatEvents.CONNECTED, data => {
            this.getCharacter(data.username);
        });
        chat.on('PRIVMSG', data => {
            const character = this.getCharacter(data.username);
            character.say(data.message);
        });
    }

    private getCharacter(username: string): Character {
        let character = charactersService.charactersMap.get(username);
        if (!character) character = charactersService.newCharacter(username);
        return character;
    }
}

export const twitchChatService = new TwitchChatService();
