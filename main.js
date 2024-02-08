// Function to dynamically load the selected game script
function loadGame(gameScript) {
    // Check if there's already a script loaded, remove it if exists
    const existingScript = document.getElementById('game-script');
    if (existingScript) {
        existingScript.remove();
    }

    // Create a new script element
    const script = document.createElement('script');
    script.src = gameScript;
    script.id = 'game-script';
    script.onload = () => {
        // Once the script is loaded, call the init function if it exists
        if (typeof initGame === 'function') {
            initGame();
        }
    };
    document.body.appendChild(script);
}

// Optional: Function to initialize the game area or UI before loading a game
function initGameArea() {
    const gameArea = document.getElementById('game-area');
    // Clear previous game content or messages
    gameArea.innerHTML = '<h2>Game is loading...</h2>';
}

// Add event listeners to buttons (alternative to inline onclick attributes for better practices)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#game-list button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const gameScript = this.getAttribute('onclick').replace("loadGame('", "").replace("')", "");
            initGameArea(); // Initialize or clear the game area
            loadGame(gameScript); // Load the selected game
        });
    });
});
