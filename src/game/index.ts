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
    if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(widthxl, 20, 984, 600);
        ctx.fillStyle = 'white';
        ctx.fillRect(widthxl + 100, 40, 400, 560);
    }
}