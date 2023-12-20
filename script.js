document.addEventListener("DOMContentLoaded", function () {
   
    const welcomeScreen = document.getElementById("welcome-screen");
    const gameScreen = document.getElementById("game-screen");
    const successScreen = document.getElementById("success-screen");

    // Тоглоомын элемэнтүүд
    const shapes = document.getElementById("shapes");
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const triangle = document.getElementById("triangle");
    const instructions = document.getElementById("instructions");


    const playAgain = document.getElementById("play-again");

    welcomeScreen.addEventListener("click", startGame);
    playAgain.addEventListener("click", resetGame);

    function startGame() {
        welcomeScreen.style.display = "none";
        gameScreen.style.display = "flex";
        addShapeClickHandlers();
    }

    function addShapeClickHandlers() {
        circle.addEventListener("click", handleShapeClick);
        square.addEventListener("click", handleShapeClick);
        triangle.addEventListener("click", handleShapeClick);
    }

    function handleShapeClick(event) {
        const clickedShape = event.target;

        if (isCorrectFriend(clickedShape)) {
            clickedShape.classList.add("found-friend");
            checkGameCompletion();
        } else {
 
            instructions.textContent = "Oops!дахиад оролдоорой!";
        }
    }


    function isCorrectFriend(clickedShape) {
        const correctFriend = shapes.querySelector(`#${clickedShape.id}`);
        return correctFriend;
    }

    function checkGameCompletion() {
        const foundFriends = document.querySelectorAll(".found-friend");
        if (foundFriends.length === 3) {
            gameScreen.style.display = "none";
            successScreen.style.display = "block";
        }
    }

    function resetGame() {
        successScreen.style.display = "none";
        welcomeScreen.style.display = "block";
        const allShapes = document.querySelectorAll("#shapes img");
        allShapes.forEach(shape => {
            shape.classList.remove("found-friend");
        });


        instructions.textContent = "Click on the shape's friend to help them!";
    }
});
