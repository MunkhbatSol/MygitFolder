document.addEventListener('DOMContentLoaded', function () {
    // Elements
    var welcomeScreen = document.getElementById('welcome-screen');
    var gameScreen = document.getElementById('game-screen');
    var successScreen = document.getElementById('success-screen');
    var shapesContainer = document.getElementById('shapes');
    var instructions = document.getElementById('instructions');
    var successMessage = document.getElementById('success-message');

    // Shapes
    var shapes = ['circle', 'square', 'triangle'];

    // Event listener for the "Start Game" button
    document.getElementById('start-button').addEventListener('click', startGame);

    // Event listeners for shape clicks
    shapesContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            checkAnswer(event.target.id);
        }
    });

    // Function to start the game
    function startGame() {
        // Show the game screen and hide others
        welcomeScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        successScreen.style.display = 'none';

        // Generate a random shape
        var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        // Set the correct shape as a data attribute
        shapesContainer.setAttribute('data-correct-shape', randomShape);

        // Update instructions
        instructions.innerHTML = 'Найздаа ' + randomShape + ' олж өгөөрэй';
    }

    // Function to check the clicked shape
    function checkAnswer(clickedShape) {
        // Get the correct shape from the data attribute
        var correctShape = shapesContainer.getAttribute('data-correct-shape');

        // Check if the clicked shape is correct
        if (clickedShape === correctShape) {
            // Show success screen
            gameScreen.style.display = 'none';
            successScreen.style.display = 'block';
            successMessage.innerHTML = 'Баяр хүргэе найзаа зөв дүрсийг оллоо!';
        } else {
            // Provide feedback for incorrect answer (optional)
            alert('Буруу байна. Дахин оролдоно уу!');
        }
    }
});
