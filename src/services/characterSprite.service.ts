import { render } from '../main';
import { charactersService } from './characters.service';
import { graphicsService } from './graphics.service';

class CharacterSpriteService {
    sprites: HTMLImageElement[] = [];
    spritesMap: Map<string, HTMLImageElement> = new Map();

    characterImageIndex: string[] | undefined;

    public moveSpritesToCharacters(): void {
        for (const sprite of this.sprites) {
            if (!sprite.id) continue;
            const character = charactersService.charactersMap.get(sprite.id);
            if (!character || !render.options.width) return;
            graphicsService.moveDivToPosition(sprite, character.body.position, character.body.angle);
        }
    }

    public newSprite(characterName: string): void {
        if (this.spritesMap.has(characterName) || !this.characterImageIndex) return;
        const sprite = document.createElement('img');
        sprite.className = 'sprite';
        sprite.id = characterName;
        sprite.src = `/character-images/${this.characterImageIndex[
            Math.floor(Math.random() * this.characterImageIndex.length)
        ]}`;
        sprite.style.transformOrigin = 'top left';
        graphicsService.graphicsDiv.appendChild(sprite);
        this.sprites.push(sprite);
        this.spritesMap.set(characterName, sprite);
        sprite.onload = (): void => {
            const naturalRatio = sprite.naturalWidth / sprite.naturalHeight;
            const targetHeight = 125;
            sprite.style.height = `${targetHeight}px`;
            sprite.style.width = `${Math.round(targetHeight * naturalRatio)}px`;
        };
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
