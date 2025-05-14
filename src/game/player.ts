export class Player {
    id: string;
    height: number;
    width: number;
    playerSprite: HTMLImageElement;
    constructor(id: string, width: number, height: number, playerSprite: HTMLImageElement) {
        this.height = height;
        this.width = width;
        this.id = id;
        this.playerSprite = new Image();
        this.playerSprite.src = "";
    }

    drawPlayer(ctx: CanvasRenderingContext2D, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(this.playerSprite, 0, 0, this.width, this.height);
    }
}