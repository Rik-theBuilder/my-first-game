let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// 1. Create variables for the player's tracking box
let player = {
    x: 150,
    y: 150,
    size: 50,
    color: "cyan",
};
let  coin = {
    x: 300,
    y: 100,
    size: 20,
    color: "yellow",
};
let score = 0;

// 2. The core drawing function
function drawGame() {
    // Clear the whole board from top-left (0,0) to bottom-right so old blocks vanish!
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Paint our moving player block
    ctx.fillStyle = player.color;
    ctx.fillRect( player.x, player.y, player.size, player.size );

    ctx.fillStyle = coin.color;
    ctx.fillRect(coin.x, coin.y, coin.size, coin.size);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);


}

// 3. Listen for keyboard key presses on the webpage
window.addEventListener("keydown", function(event) {
    
    if (event.key === "ArrowRight") {   player.x = player.x + 10;}

    if (event.key === "ArrowLeft") { player.x = player.x - 10;}
    
    if (event.key === "ArrowUp") { player.y = player.y - 10;}

    if (event.key === "ArrowDown") { player.y = player.y + 10;}
    // Call our drawing function to update the screen with the new position!
    
    // Simple collision check: Are the player and coin overlapping closely?
    if (Math.abs(player.x - coin.x) < 40 && Math.abs(player.y - coin.y) < 40) {
    score = score + 1; // Increase the score!
    
    player.color = "magenta";

    setTimeout(function() {
            player.color = "cyan"; // Turn back to cyan!
            drawGame();            // Redraw the screen to show the color change
        }, 200);
    // Teleport the coin to a random spot within our 400x400 canvas!
    coin.x = Math.floor(Math.random() * 350);
    coin.y = Math.floor(Math.random() * 350);
    
}
 drawGame();
});

// Run the function once at the start so the player is drawn on load
drawGame();
