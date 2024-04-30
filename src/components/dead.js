import React, { useState } from "react";

const HangmanGame = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const correctWord = "revise";
  const stages = [
    "inset(100% 0 0 0)", // Initial state, nothing shown
    "inset(80% 0 0 0)", // First wrong guess reveals the feet
    "inset(60% 0 0 0)", // Second wrong guess reveals the legs
    "inset(40% 0 0 0)", // Third wrong guess reveals the torso
    "inset(20% 0 0 0)", // Fourth wrong guess reveals the arms
    "inset(0 0 0 0)", // Fifth wrong guess reveals the head and completes the figure
  ];
  const correctSound = new Audio("/correct.mp3");
  const gameOverSound = new Audio("/dead.mp3");
  const typingSound = new Audio("/typing.mp3");

  const handleGuess = (event) => {
    const letter = event.target.value.toLowerCase();
    typingSound.play();
    if (letter.trim() !== "" && letter === correctWord[currentGuess.length]) {
      const newGuess = currentGuess + letter;
      setCurrentGuess(newGuess);
      if (newGuess === correctWord) {
        correctSound.play(); // Play winning sound
      }
    } else {
      if (wrongGuesses < stages.length - 1) {
        setWrongGuesses(wrongGuesses + 1);
      } else {
        gameOverSound.play(); // Play game over sound
      }
    }
    event.target.value = ""; // Clear the input after the guess
  };

  return (
    <div className="p-10">
      <span className="font-poor-story text-center font-semibold text-xl">
        Review time!
      </span>
      <p className="font-poor-story text-center text-xl mb-2 font-semibold">
        So she <span className="text-2xl text-blue-700">___d</span> her plan and
        asked the prince for{" "}
        <span className="text-2xl text-blue-700">provisional</span> seed money,
        so that Snow White and her team could buy the basic supplies they needed
        to get started.
      </p>
      <div className="flex flex-col items-center">
        <div
          className="p-10 inline-block relative"
          style={{ width: "100px", height: "200px", overflow: "hidden" }}
        >
          <img
            src="./dead.png"
            alt="Hangman"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ clipPath: stages[wrongGuesses] }}
          />
          {wrongGuesses === stages.length - 1 && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-50">
              <span className="font-poor-story font-semibold text-white text-2xl">
                Game Over
              </span>
            </div>
          )}
          {currentGuess === correctWord && (
            <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75">
              <span className="font-poor-story font-semibold text-white text-2xl">
                You got it!
              </span>
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            className="mt-4 px-3 py-2 border rounded font-poor-story"
            placeholder="Enter next letter"
            maxLength="1"
            onKeyUp={(event) => event.key === "Enter" && handleGuess(event)}
          />
          <p className="font-poor-story">
            Your Guess (r is the first letter): {currentGuess}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HangmanGame;
