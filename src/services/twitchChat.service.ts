import { Chat } from 'twitch-js';
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

        chat.on('PRIVMSG', data => {
            const character = this.getCharacter(data.username);
            if (data.message.startsWith(settings.prefix)) {
                if (data.message.includes('left')) character.move('left');
                if (data.message.includes('right')) character.move('right');
                if (data.message.includes('jump')) character.jump();
                return;
            }
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
