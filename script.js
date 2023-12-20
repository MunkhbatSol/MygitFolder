document.addEventListener("DOMContentLoaded", function () {
    // Welcome Screen Elements
    const welcomeScreen = document.getElementById("welcome-screen");
    const gameScreen = document.getElementById("game-screen");
    const successScreen = document.getElementById("success-screen");

    // Game Screen Elements
    const shapes = document.getElementById("shapes");
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const triangle = document.getElementById("triangle");
    const instructions = document.getElementById("instructions");

    // Success Screen Elements
    const playAgain = document.getElementById("play-again");

    // Event Listeners
    welcomeScreen.addEventListener("click", startGame);
    playAgain.addEventListener("click", resetGame);

    // Function to start the game
    function startGame() {
        welcomeScreen.style.display = "none";
        gameScreen.style.display = "flex";
        addShapeClickHandlers();
    }

    // Function to add click handlers to shapes
    function addShapeClickHandlers() {
        circle.addEventListener("click", handleShapeClick);
        square.addEventListener("click", handleShapeClick);
        triangle.addEventListener("click", handleShapeClick);
    }

    // Function to handle shape click
    function handleShapeClick(event) {
        const clickedShape = event.target;

        // Check if the clicked shape is the correct friend
        if (isCorrectFriend(clickedShape)) {
            clickedShape.classList.add("found-friend");
            checkGameCompletion();
        } else {
            // Display a hint or encouragement for the child
            instructions.textContent = "Oops! Try again!";
        }
    }

    // Function to check if the clicked shape is the correct friend
    function isCorrectFriend(clickedShape) {
        // Logic to determine correct friend based on your game rules
        // For simplicity, let's say the correct friend is the shape with the same name
        const correctFriend = shapes.querySelector(`#${clickedShape.id}`);
        return correctFriend;
    }

    // Function to check if all shapes have found their friends
    function checkGameCompletion() {
        const foundFriends = document.querySelectorAll(".found-friend");
        if (foundFriends.length === 3) {
            // All shapes have found their friends
            gameScreen.style.display = "none";
            successScreen.style.display = "block";
        }
    }

    // Function to reset the game
    function resetGame() {
        successScreen.style.display = "none";
        welcomeScreen.style.display = "block";

        // Reset all shapes
        const allShapes = document.querySelectorAll("#shapes img");
        allShapes.forEach(shape => {
            shape.classList.remove("found-friend");
        });

        // Reset instructions
        instructions.textContent = "Click on the shape's friend to help them!";
    }
});
