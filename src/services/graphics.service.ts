import Matter from 'matter-js';
import { render } from '../main';

class GraphicsService {

    graphicsDiv = document.querySelector('.graphics') as HTMLDivElement;

    zoom = 0;
    centerOfBounds: Matter.Vector = { x: 0, y: 0 };

    public updateViewportCalculations(): void {
        if (!render.options.width) return;
        this.zoom = (render.options.width / Math.abs(render.bounds.min.x - render.bounds.max.x));
        this.centerOfBounds = Matter.Vector.div(Matter.Vector.add(render.bounds.min, render.bounds.max), 2);
    }

    public moveDivToPosition(div: HTMLDivElement, position: Matter.Vector, radian?: number, offset?: {x: number; y: number}): void {
        const divPositionViewport = Matter.Vector.sub(position, this.centerOfBounds);

        div.style.position = 'fixed';
        div.style.transform = 'translate(-50%, -50%)';
        if (radian) div.style.rotate = `${radian}rad`;
        if (offset) {
            divPositionViewport.x += offset.x;
            divPositionViewport.y += offset.y;
        }
        div.style.left = `${divPositionViewport.x * this.zoom + window.innerWidth / 2}px`;
        div.style.top = `${divPositionViewport.y * this.zoom + window.innerHeight / 2}px`;
    }
}

export const graphicsService = new GraphicsService();
