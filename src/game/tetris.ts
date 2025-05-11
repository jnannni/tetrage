const pxSize = 40;

export class Tetromino {
    color: string;
    tetromino: number[][];
    position: { x: number; y: number };    
    constructor(color: string, tetromino: number[][], posX: number, posY: number) {
        this.color = color;
        this.tetromino = tetromino;        
        this.position = { x: posX, y: posY };
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.tetromino.length; i++) {
            for (let j = 0; j < this.tetromino[i].length; j++) {
                const y = this.position.y + i * pxSize;
                ctx.fillStyle = this.color;
                if (this.tetromino[i][j] === 1) {
                    ctx.fillRect(this.position.x + j * pxSize, y, pxSize - 1, pxSize - 1);    
                }
            }
        }
    }

    rotate() {
        const n = this.tetromino.length;
        const newTetromino: number[][] = [];
        for (let y = 0; y < n; y++) {
            newTetromino[y] = [];
            for (let x = 0; x < n; x++) {
                newTetromino[y][x] = this.tetromino[n - x - 1][y];
            }
        }
        this.matrixShiftToTopLeft(newTetromino);
    }

    matrixShiftToTopLeft(matrix: number[][]) {
        const n = matrix.length;
        let minRow = n, minCol = n;
        for (let y = 0; y < n; y++) {
            for (let x = 0; x < n; x++) {
            if (matrix[y][x] === 1) {
                if (y < minRow) minRow = y;
                if (x < minCol) minCol = x;
            }
            }
        }

        const shifted = Array.from({ length: n }, () => Array(n).fill(0));
        for (let y = minRow; y < n; y++) {
            for (let x = minCol; x < n; x++) {
            if (matrix[y][x] === 1) {
                shifted[y - minRow][x - minCol] = 1;
            }
            }
        }
        this.tetromino = shifted;
    }

    moveToRight() {
        // move tetromino to the right
        this.position.x += pxSize;
    }

    moveToLeft() {
        // move tetromino to the left
        this.position.x -= pxSize;
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