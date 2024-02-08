// Mystery Game 1: The Lost Artifact

// Function to initialize the game
function initGame() {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <div class="game1">
            <h2>The Lost Artifact</h2>
            <p>Welcome, detective! An ancient artifact has been stolen from the museum. Your task is to find clues, solve puzzles, and recover the artifact.</p>
            <div id="clue-area">
                <p>Clues will appear here as you find them.</p>
            </div>
            <button id="start-game">Start Investigation</button>
        </div>
    `;

    document.getElementById('start-game').addEventListener('click', startInvestigation);
}

// Function to start the investigation
function startInvestigation() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML = `
        <p>You found a mysterious note left behind by the thief. It reads, "The artifact's secret lies within the stars."</p>
        <button onclick="solvePuzzle()">Solve Puzzle</button>
    `;
}

// Function to solve the puzzle
function solvePuzzle() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML += `
        <p>After examining the stars, you realize the artifact is hidden in the Planetarium.</p>
        <button onclick="findArtifact()">Find Artifact</button>
    `;
}

// Function to find the artifact
function findArtifact() {
    const clueArea = document.getElementById('clue-area');
    clueArea.innerHTML += `
        <p>Congratulations! You've found the lost artifact hidden behind the Saturn display. The museum is grateful for your help.</p>
    `;
}

// Initialize the game when the script is loaded
initGame();
