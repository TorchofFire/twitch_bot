import Matter from 'matter-js';
import { timeManagerService } from './services/timeManager.service';
import { mapService } from './services/map.service';
import { charactersService } from './services/characters.service';
import { graphicsService } from './services/graphics.service';
import { twitchChatService } from './services/twitchChat.service';

// eslint-disable-next-line import/no-mutable-exports
export let settings = { oauth: '', nick: '', channel: '', prefix: '' };

const init = async (): Promise<void> => {
    const response = await fetch('/settings.json');
    settings = await response.json();
    await twitchChatService.init();
};

init();

const engine = Matter.Engine.create();
export const world = engine.world;
engine.gravity.y = 0.5;

export const render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
        background: 'transparent',
        wireframeBackground: 'transparent'
    }
});

// Matter.Render.run(render); // debugging

mapService.createMap();

graphicsService.updateViewportCalculations();

function loop(): void {

    charactersService.updateCharacters();

    timeManagerService.logic();
    Matter.Engine.update(engine, timeManagerService.deltaTime * 2500);

    requestAnimationFrame(loop);
}
loop();
