import { GameField } from "./tetris";
import { Tetromino } from "./tetris";

const straightTetromino = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const squareTetromino = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const tTetromino = [[1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const lTetromino = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]];
const skewTetromino = [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const pxPerCell = 40;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let field: GameField;
let tetromino: Tetromino;

export const startGame = (canvasID: HTMLCanvasElement) => {
    canvas = canvasID;
    ctx = canvas.getContext('2d');    
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    field = new GameField(480, 560, pxPerCell); 
    tetromino = new Tetromino('red', tTetromino, 417, 40);
    if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(277, 20, 984, 600);
        field.drawField(ctx, 377, 40);                       
    }
    gameLoop();
}

function gameLoop() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(277, 20, 984, 600);
        field.drawField(ctx, 377, 40);
        tetromino.draw(ctx);
    }
    requestAnimationFrame(gameLoop);
}