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
            ctx.fillStyle = this.color;
            if (cell[0] === 1) {
                ctx.fillRect(startX, y, pxSize, pxSize);    
            }
            if (cell[1] === 1) {
                ctx.fillRect(startX + 40, y, pxSize, pxSize);    
            }
        })
    }
}

export class GameField {
    width: number;
    height: number;
    pxPerCell: number;
    tiles: number[][];

    constructor(width: number, height: number, pxPerCell: number) {
        this.width = width;
        this.height = height;
        this.pxPerCell = pxPerCell;
        this.tiles = new Array(width / pxPerCell).fill(0).map(() => new Array(height / pxPerCell).fill(0));
    }
 
    isWall(x: number, y: number) {        
        return (x === 0 || x === this.width / this.pxPerCell - 1 || y === this.height / this.pxPerCell - 1);
    }

    drawField(ctx: CanvasRenderingContext2D, startX: number, startY: number) {
        for (let x = 0; x < this.width / this.pxPerCell; x++) {
            for (let y = 0; y < this.height / this.pxPerCell; y++) {
                const fieldX = startX + x * this.pxPerCell;
                const fieldY = startY + y * this.pxPerCell;
                if (this.isWall(x, y)) {                    
                    this.drawTile(ctx, fieldX, fieldY, 'gray');
                } else {                    
                    this.drawTile(ctx, fieldX, fieldY, 'white');
                }
            }
        }
    }

    drawTile(ctx: CanvasRenderingContext2D, fieldX: number, fieldY: number, color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(fieldX, fieldY, this.pxPerCell - 1, this.pxPerCell - 1);
    }
}