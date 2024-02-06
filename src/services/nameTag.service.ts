import { render } from '../main';
import { charactersService } from './characters.service';
import { graphicsService } from './graphics.service';

class NameTagService {
    nametags: HTMLDivElement[] = [];
    nametagsMap: Map<string, HTMLDivElement> = new Map();

    public moveTagsToCharacters(): void {
        for (const nametag of this.nametags) {
            if (!nametag.textContent) continue;
            const character = charactersService.charactersMap.get(nametag.textContent);
            if (!character || !render.options.width) return;
            graphicsService.moveDivToPosition(nametag, character.body.position, 0, { x: 0, y: -70 });
        }
    }

    public newTag(playerName: string): void {
        if (this.nametagsMap.has(playerName)) return;
        const nametag = document.createElement('div');
        nametag.className = 'nametag';
        nametag.textContent = playerName;
        graphicsService.graphicsDiv.appendChild(nametag);
        this.nametags.push(nametag);
        this.nametagsMap.set(playerName, nametag);
    }

    public removeTag(playerName: string): void {
        const nametag = this.nametagsMap.get(playerName);
        if (!nametag) return;
        this.nametags = this.nametags.filter(tag => tag !== nametag);
        this.nametagsMap.delete(playerName);
    }
}

export const nameTagService = new NameTagService();
