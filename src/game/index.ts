import { GameField } from "./tetris";
import { Tetromino } from "./tetris";
import { Player } from "./player";

const straightTetromino = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const squareTetromino = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const tTetromino = [[1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const lTetromino = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]];
const skewTetromino = [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const pxPerCell = 40;
let start = 0;
const animTime = 2000;
let count = 0;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let field: GameField;
let tetromino: Tetromino;
let player: Player;

export const startGame = (canvasID: HTMLCanvasElement) => {
    canvas = canvasID;
    ctx = canvas.getContext('2d');    
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    field = new GameField(480, 560, pxPerCell); 
    tetromino = new Tetromino('red', tTetromino, 417, 40);
    player = new Player('player', 128, 128, "/shinobi.png");

    if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(277, 20, 984, 600);
        field.drawField(ctx, 377, 40);                     
    }
    
    const waitForSprites = setInterval(() => {
        if (player.isLoaded) {
            clearInterval(waitForSprites);
            requestAnimationFrame(gameLoop);
        }
    }, 50);
}

function gameLoop(timestamp: number = 0) {
    const deltaTime = timestamp - start;
    start = timestamp;
    count += deltaTime;
    // if (count > animTime) {
    //     tetromino.moveDown();
    //     count = 0;
    // }
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(277, 20, 984, 600);
        field.drawField(ctx, 377, 40);
        player.drawPlayer(ctx, 0, 0, 0, 0, 128, 128);
        tetromino.draw(ctx);
    }
    requestAnimationFrame(gameLoop);
}