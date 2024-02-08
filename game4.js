// Mystery Game 4: The Secret of the Locked Room

// Function to initialize the game
function initGame() {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>Mystery Game 4: The Secret of the Locked Room</h2>
        <p>You find yourself locked in a mysterious room. Can you find your way out?</p>
        <div id="game4-content">
            <p>Look around the room for clues. What do you want to inspect first?</p>
            <button onclick="inspect('desk')">Desk</button>
            <button onclick="inspect('bookshelf')">Bookshelf</button>
            <button onclick="inspect('painting')">Painting</button>
        </div>
        <div id="clue-area"></div>
    `;
}

// Function to handle inspection of objects
function inspect(item) {
    const clueArea = document.getElementById('clue-area');
    switch(item) {
        case 'desk':
            clueArea.innerHTML = `<p>You found a key inside the desk drawer!</p><button onclick="unlockDoor('key')">Use Key</button>`;
            break;
        case 'bookshelf':
            clueArea.innerHTML = `<p>Nothing but dusty books here. Keep looking.</p>`;
            break;
        case 'painting':
            clueArea.innerHTML = `<p>The painting looks odd. You adjust it and find a safe behind it! It's locked.</p>`;
            break;
        default:
            clueArea.innerHTML = `<p>Keep looking...</p>`;
    }
}

// Function to attempt to unlock the door
function unlockDoor(tool) {
    const gameArea = document.getElementById('game-area');
    if(tool === 'key') {
        gameArea.innerHTML += `<p>You've used the key to unlock the door. Congratulations, you've escaped the room!</p>`;
    } else {
        gameArea.innerHTML += `<p>The door won't budge. Keep looking for a way to open it.</p>`;
    }
}

// Call initGame to setup the game
initGame();
