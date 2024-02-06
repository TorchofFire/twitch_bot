import Matter from 'matter-js';

export default class Character {

    constructor(x: number, y: number, nick: string) {
        this.username = nick;
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
        console.log(message);
    }

    username: string;

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
