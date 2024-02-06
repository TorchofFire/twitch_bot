import Matter from 'matter-js';
import { graphicsService } from '../services/graphics.service';

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

    username: string;

    color: string;

    onFloor = false;

    actions: {
        [key: string]: boolean;
    } = {
        jump: false,
        left: false,
        right: false
    };

    body: Matter.Body;

}
