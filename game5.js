// game5.js - Mystery Game 5

// Function to initialize the game once the script is loaded
function initGame() {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>Mystery of the Lost Artifact</h2>
        <p>Welcome to the final mystery game. Can you find the lost artifact before time runs out?</p>
        <div id="game5-content">
            <p>Your journey begins in an ancient library...</p>
            <button id="start-game5">Start the Search</button>
        </div>
        <div id="clue-area"></div>
    `;

    document.getElementById('start-game5').addEventListener('click', startGame5);
}

// Function to start the game
function startGame5() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>You find a dusty old book with a cryptic message on its cover. What do you do?</p>
        <button onclick="examineBook()">Examine the book</button>
        <button onclick="lookAround()">Look around for more clues</button>
    `;
}

// Function to examine the book
function examineBook() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>As you open the book, a hidden compartment reveals a map with a marked location. It's the old mansion at the edge of town.</p>
        <button onclick="goToMansion()">Go to the mansion</button>
    `;
}

// Function to look around for more clues
function lookAround() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>You notice a strange pattern on the floor, leading towards a seemingly ordinary shelf.</p>
        <button onclick="examineShelf()">Examine the shelf</button>
    `;
}

// Function to examine the shelf
function examineShelf() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>Behind a row of books, you find an old key with an inscription "To the heart of the mansion".</p>
        <button onclick="goToMansion()">Go to the mansion</button>
    `;
}

// Function to go to the mansion
function goToMansion() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>You arrive at the mansion. The key you found fits the door. As you step inside, the search for the lost artifact continues...</p>
        <p><strong>End of Game 5. Congratulations on starting your adventure! The full story awaits in the next chapter...</strong></p>
    `;
}

// Ensure the initGame function is called when the script is loaded
if (document.readyState === 'complete') {
    initGame();
} else {
    document.addEventListener('DOMContentLoaded', initGame);
}
