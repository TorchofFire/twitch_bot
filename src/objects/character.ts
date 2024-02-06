import Matter from 'matter-js';
import { graphicsService } from '../services/graphics.service';
import { world } from '../main';

export default class Character {

    constructor(x: number, y: number, nick: string) {
        this.username = nick;
        this.color = `rgb(${Math.random() * 150 + 105}, ${Math.random() * 150 + 105}, ${Math.random() * 150 + 105})`;
        console.log(this.color);
        const characterCollisionGroup = Matter.Body.nextGroup(true);
        this.body = Matter.Bodies.rectangle(x, y, 40, 120, {
            restitution: 0,
            friction: 0,
            collisionFilter: {
                group: characterCollisionGroup,
                category: 0x0002,
                mask: 0x0001
            }
        });
    }

    say(message: string): void {
        const textMessage = document.createElement('div');
        textMessage.className = 'textMessage';
        textMessage.textContent = message;
        textMessage.style.color = this.color;
        graphicsService.graphicsDiv.appendChild(textMessage);
        graphicsService.moveDivToPosition(textMessage, this.body.position);
    }

    move(direction: string): void {
        if (direction === 'right') {
            Matter.Body.setVelocity(this.body, { x: Math.random() * 10, y: this.body.velocity.y });
            return;
        }
        Matter.Body.setVelocity(this.body, { x: Math.random() * -10, y: this.body.velocity.y });
    }

    jump(): void {
        const collisions = Matter.Query.collides(this.body, world.bodies);
        collisions.pop();
        if (collisions.length < 1) return;
        let onFloor = false;
        for (const collision of collisions) {
            if (collision.normal.y > 0.5) {
                onFloor = true;
            }
        }
        if (!onFloor) return;
        Matter.Body.setVelocity(this.body, { x: this.body.velocity.x, y: -10 });
    }

    username: string;

    color: string;

    body: Matter.Body;

}
