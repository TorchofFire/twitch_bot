import Matter from 'matter-js';
import { world } from '../main';

class MapService {

    collisionBodies: Matter.Body[] = [];

    public createMap(): void {
        this.addRect({ x: window.innerWidth / 2, y: window.innerHeight + 75 }, window.innerWidth, 150, { isStatic: true });
        this.addRect({ x: window.innerWidth / 2, y: -75 }, window.innerWidth, 150, { isStatic: true });
        this.addRect({ x: -75, y: window.innerHeight / 2 }, 150, window.innerHeight + 100, { isStatic: true });
        this.addRect({ x: window.innerWidth + 75, y: window.innerHeight / 2 }, 150, window.innerHeight + 100, { isStatic: true });
    }

    private addRect(position: Matter.Vector, width: number, height: number, options?: Matter.IChamferableBodyDefinition): Matter.Body {
        const rect = Matter.Bodies.rectangle(position.x, position.y, width, height, options);
        Matter.World.add(world, rect);
        this.collisionBodies.push(rect);
        return rect;
    }

    // private addCirc(position: Matter.Vector, radius: number, options?: Matter.IChamferableBodyDefinition): Matter.Body {
    //     const circ = Matter.Bodies.circle(position.x, position.y, radius, options);
    //     Matter.World.add(world, circ);
    //     this.collisionBodies.push(circ);
    //     return circ;
    // }

    // private addTrap(position: Matter.Vector, width: number, height: number, slope: number, options?: Matter.IChamferableBodyDefinition): Matter.Body {
    //     const trap = Matter.Bodies.trapezoid(position.x, position.y, width, height, slope, options);
    //     Matter.World.add(world, trap);
    //     this.collisionBodies.push(trap);
    //     return trap;
    // }
}

export const mapService = new MapService();
