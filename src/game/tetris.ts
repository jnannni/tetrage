const pxSize = 40;

export class Tetromino {
    color: string;
    tetromino: number[][];
    constructor(color: string, tetromino: number[][]) {
        this.color = color;
        this.tetromino = tetromino;
    }

    draw(ctx: CanvasRenderingContext2D, startX: number, startY: number): void {
        this.tetromino.forEach((cell, i) => {
            const y = startY + i * pxSize;
            if (cell[0] === 1) {
                ctx.fillRect(startX, y, pxSize, pxSize);    
            }
            if (cell[1] === 1) {
                ctx.fillRect(startX + 40, y, pxSize, pxSize);    
            }
        })
    }
}