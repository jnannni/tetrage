type AnimationState = {
    image: HTMLImageElement;
    frameCount: number;
    frameWidth: number;
    frameHeight: number;
    frameY: number;
    frameInterval: number;
}

export class Player {
    animStates: Record<string, AnimationState>;
    currentState: string = '';
    id: string;
    height: number;
    width: number;
    playerSprite: HTMLImageElement;
    src: string;
    isLoaded: boolean = false;
    frameX: number = 0;
    maxFrame: number = 8;
    frameTime: number = 0;
    posX: number;
    posY: number;
    constructor(id: string, width: number, height: number, src: string, posX: number, posY: number) {
        this.height = height;
        this.width = width;
        this.id = id;
        this.src = src;
        this.playerSprite = new Image();
        this.playerSprite.src = src;
        this.animStates = {};
        this.posX = posX;
        this.posY = posY;

        this.playerSprite.onload = () => {
            this.isLoaded = true;
        };

        this.playerSprite.onerror = () => {
            console.error("Error loading player sprite");
        };
    }

    addAnimationState(name: string, config: {
        image: HTMLImageElement;
        frameCount: number;
        frameWidth: number;
        frameHeight: number;
        frameY: number;
        frameInterval: number;
    }) {
        this.animStates[name] = {
            image: config.image,
            frameCount: config.frameCount,
            frameWidth: config.frameWidth,  
            frameHeight: config.frameHeight,
            frameY: config.frameY,
            frameInterval: config.frameInterval
        };
    }

    setAnimationState(stateName: string) {
        if (this.currentState !== stateName) {
            this.currentState = stateName;
            this.frameX = 0;
            this.frameTime = 0;
            this.maxFrame = this.animStates[stateName].frameCount;
        }
    }

    animate(deltaTime: number) {
        if(!this.isLoaded) return;
        this.frameTime += deltaTime;
        if (this.frameTime > this.animStates[this.currentState].frameInterval) {
            this.frameX = (this.frameX + 1) % this.maxFrame;
            this.frameTime = 0;
        }

    }

    drawPlayer(ctx: CanvasRenderingContext2D, scale: number = 1): void { 
        if (!this.isLoaded) return;
        const state = this.animStates[this.currentState];
        if (!state) return;

        const sX = this.frameX * state.frameWidth;
        const sY = state.frameY;
        const sW = state.frameWidth;
        const sH = state.frameHeight; 
        const dW = sW * scale;
        const dH = sH * scale;

        ctx.drawImage(state.image, sX, sY, sW, sH, this.posX, this.posY, dW, dH);
    }

    moveLeft() {
        this.posX -= 5;
    }

    moveRight() {
        this.posX += 5;
    }
}