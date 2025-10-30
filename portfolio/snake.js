const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("resetButton");
const modal = document.getElementById('modal');
const modalScoreText = modal.querySelector('#scoreText')
const closeBtn = document.getElementById('closeModalBtn');
const pauseButton = document.querySelector('#pauseButton');
const playButton = document.querySelector('#playButton');
const boardBackground = "white";
const snakeColor = "green";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX, foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0}, // Head
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0} // tail
]
let head; // Used for checkGameOver

window.addEventListener("keydown", changeDirection);

gameStart();


function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    nextTick();
    
};  

function drawGrid(){ // For visuals
    context.strokeStyle = "white"; 
    context.lineWidth = 1;
    
    // Draw vertical lines
    for(let x = 0; x <= gameBoard.width; x += unitSize){
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, gameBoard.height);
        context.stroke();
    }
    
    // Draw horizontal lines  
    for(let y = 0; y <= gameBoard.height; y += unitSize){
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(gameBoard.width, y);
        context.stroke();
    }
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
            //drawGrid(); If you want to see the grid lines.
        }, 75)
    }
    else{
        displayGameOver();
    }
};

function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameBoard.width, gameBoard.height)
};

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }

    foodX = randomFood(0, gameBoard.width - unitSize);
    foodY = randomFood(0, gameBoard.height - unitSize);

};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};
    snake.unshift(head);
    snake.forEach(snakePart => {
    
    // so it can wrap to the other side
    snakePart.x = ((snakePart.x % gameBoard.width) + gameBoard.width) % gameBoard.width;
    snakePart.y = ((snakePart.y % gameBoard.height) + gameBoard.height) % gameBoard.height;
    })

    // if food is eaten
    if(head.x == foodX && head.y == foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop();
    }
};
function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    const UP = 87;
    const LEFT = 65;
    const DOWN = 83;
    const RIGHT = 68;
    const arrowL = 37;
    const arrowR = 39;
    const arrowU = 38;
    const arrowD = 40;

    const goingUP = (yVelocity == -unitSize);
    const goingDOWN = (yVelocity == unitSize);
    const goingRIGHT = (xVelocity == unitSize);
    const goingLEFT = (xVelocity == -unitSize);

    switch(true){
        case((keyPressed == LEFT || keyPressed == arrowL) && !goingRIGHT):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case((keyPressed == UP || keyPressed == arrowU) && !goingDOWN):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case((keyPressed == RIGHT || keyPressed == arrowR) && !goingLEFT):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case((keyPressed == DOWN || keyPressed == arrowD) && !goingUP):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};
function checkGameOver(){
    const collision = snake.slice(1).some(body => body.x === head.x && body.y === head.y);
    //console.log(collision);
    if (collision == true){
        modal.style.display = 'block';
        running = false;
        modalScoreText.textContent = 'Score: ' + score;
        
    }
};

function resetGame(clicked){
    if (clicked == 'reset'){
        score = 0;
        xVelocity = unitSize;
        yVelocity = 0;
        snake = [
                {x:unitSize * 4, y:0}, // Head
                {x:unitSize * 3, y:0},
                {x:unitSize * 2, y:0},
                {x:unitSize, y:0},
                {x:0, y:0}
                ];
        modal.style.display = 'none';
        gameStart();
        
    }
};

function pauseGame(paused){
    if (paused == 'true'){
        running = false;
    }
};

function playGame(play){
    if (play == 'true'){
        running = true;
        nextTick();
    }
};