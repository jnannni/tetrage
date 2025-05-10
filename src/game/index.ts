import { GameField } from "./tetris";
import { Tetromino } from "./tetris";

const straightTetromino = [[1, 0], [1, 0], [1, 0], [1, 0]];
const squareTetromino = [[1, 1], [1, 1]];
const tTetromino = [[1, 0], [1, 1], [1, 0]];
const lTetromino = [[0, 1], [0, 1], [1, 1]];
const skewTetromino = [[1, 0], [1, 1], [0, 1]];

export const startGame = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');    
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const widthxl = (innerWidth - 984) / 2;
    const field = new GameField(480, 560, 40);
    const tetromino = new Tetromino('red', straightTetromino);
    if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(277, 20, 984, 600);
        field.drawField(ctx, 377, 40);
    }
}