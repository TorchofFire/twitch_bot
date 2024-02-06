import characterImages from '../constants/characterImages.constant';
import { render } from '../main';
import { charactersService } from './characters.service';
import { graphicsService } from './graphics.service';

class CharacterSpriteService {
    sprites: HTMLDivElement[] = [];
    spritesMap: Map<string, HTMLDivElement> = new Map();

    public moveSpritesToCharacters(): void {
        for (const sprite of this.sprites) {
            if (!sprite.id) continue;
            const character = charactersService.charactersMap.get(sprite.id);
            if (!character || !render.options.width) return;
            graphicsService.moveDivToPosition(sprite, character.body.position, character.body.angle);
        }
    }

    public newSprite(characterName: string): void {
        if (this.spritesMap.has(characterName)) return;
        const sprite = document.createElement('img');
        sprite.className = 'sprite';
        sprite.id = characterName;
        sprite.style.width = '190px';
        sprite.style.height = '125px';
        sprite.style.transformOrigin = 'top left';
        sprite.src = characterImages[Math.floor(Math.random() * characterImages.length)];
        graphicsService.graphicsDiv.appendChild(sprite);
        this.sprites.push(sprite);
        this.spritesMap.set(characterName, sprite);
    }

    public removeSprite(characterName: string): void {
        const sprite = this.spritesMap.get(characterName);
        if (!sprite) return;
        this.sprites = this.sprites.filter(tag => tag !== sprite);
        this.spritesMap.delete(characterName);
        sprite.remove();
    }
}

export const characterSpriteService = new CharacterSpriteService();
