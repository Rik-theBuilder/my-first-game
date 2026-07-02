let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// 1. Create variables for the player's tracking box
let playerX = 150;
let playerY = 150;
let playerSize = 50;
let coinX = 300;
let coinY = 100;
let coinSize = 20;
let score = 0;

// 2. The core drawing function
function drawGame() {
    // Clear the whole board from top-left (0,0) to bottom-right so old blocks vanish!
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Paint our moving player block
    ctx.fillStyle = "cyan";
    ctx.fillRect( playerX, playerY, playerSize, playerSize );

    ctx.fillStyle = "yellow";
    ctx.fillRect(coinX, coinY, coinSize, coinSize);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);


}

// 3. Listen for keyboard key presses on the webpage
window.addEventListener("keydown", function(event) {
    // If user presses the Right Arrow key, increase X position!
    if (event.key === "ArrowRight") {
        playerX = playerX + 10;
    }
    // If user presses the Left Arrow key, decrease X position!
    if (event.key === "ArrowLeft") {
        playerX = playerX - 10;
    }
    
    if (event.key === "ArrowUp") {
        playerY = playerY - 10;
    }

     if (event.key === "ArrowDown") {
        playerY = playerY + 10;
    }
    // Call our drawing function to update the screen with the new position!
    
    // Simple collision check: Are the player and coin overlapping closely?
    if (Math.abs(playerX - coinX) < 40 && Math.abs(playerY - coinY) < 40) {
    score = score + 1; // Increase the score!
    
    // Teleport the coin to a random spot within our 400x400 canvas!
    coinX = Math.floor(Math.random() * 350);
    coinY = Math.floor(Math.random() * 350);
    
}
 drawGame();
});

// Run the function once at the start so the player is drawn on load
drawGame();
