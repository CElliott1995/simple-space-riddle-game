const buttonClickSound = document.getElementById("buttonClickSound");
const correctAnswerSound = document.getElementById("correctAnswerSound");
const incorrectAnswerSound = document.getElementById("incorrectAnswerSound");

const encodedMessage = "WW91IEhhdmUgTG9zdCBUaGUgR2FtZQ=="; // Base64 encoded message
const correctAnswer = "M"; // The answer to the riddle

function checkAnswer() {
  // Play button click sound
  buttonClickSound.play();

  const userAnswer = document
    .getElementById("riddleAnswer")
    .value.trim()
    .toUpperCase();

  if (userAnswer === correctAnswer) {
    // Play correct answer sound
    correctAnswerSound.play();

    // Show the "Congrats! Secret Message Unlocked!" message
    const congratsMessage = document.getElementById("congratsMessage");
    congratsMessage.textContent = "Congrats! Secret Message Unlocked!";
    congratsMessage.style.display = "block"; // Show the congrats message
    congratsMessage.style.opacity = "1"; // Make it visible

    // Trigger confetti animation
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 },
    });

    // Reveal the decoded hidden message after a short delay
    setTimeout(function () {
      const decodedMessage = atob(encodedMessage);
      const hiddenMessage = document.getElementById("hiddenMessage");
      hiddenMessage.textContent = decodedMessage;
      hiddenMessage.style.display = "block"; // Reveal the hidden message
      hiddenMessage.style.opacity = "1"; // Fade it in
    }, 500); // Delay before revealing the hidden message

    // Steady vanish of the congrats message
    setTimeout(function () {
      congratsMessage.style.transition = "opacity 2s ease-out";
      congratsMessage.style.opacity = "0"; // Gradually fade out the congrats message after 3 seconds
    }, 3000); // Wait 3 seconds before starting the fade out
  } else {
    // Play incorrect answer sound
    incorrectAnswerSound.play();

    alert("Incorrect answer, try again!");
  }
}
