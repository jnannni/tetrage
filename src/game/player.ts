export class Player {
    id: string;
    height: number;
    width: number;
    playerSprite: HTMLImageElement;
    src: string;
    isLoaded: boolean = false;
    constructor(id: string, width: number, height: number, src: string) {
        this.height = height;
        this.width = width;
        this.id = id;
        this.src = src;
        this.playerSprite = new Image();
        this.playerSprite.src = src;

        this.playerSprite.onload = () => {
            this.isLoaded = true;
        };

        this.playerSprite.onerror = () => {
            console.error("Error loading player sprite");
        };
    }

    drawPlayer(ctx: CanvasRenderingContext2D, sX: number, sY: number, dX: number, dY: number, dW: number, dH: number): void { 
        if(this.isLoaded) {
            ctx.drawImage(this.playerSprite, 0, 0, this.width, this.height, dX, dY, dW, dH);
        }       
    }
}