import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page2point1() {
  const navigate = useNavigate();
  const wedding = new Audio("/wedding.mp3");
  const humming = new Audio("/humming.mp3");
  const handleButtonClick = (answer) => {
    console.log(`You clicked on option: ${answer}`);
    // Example navigation logic based on the button clicked
    switch (answer) {
      case "A":
        humming.play();
        navigate("/3"); // Change to your desired route for option A
        break;
      case "B":
        wedding.play();
        navigate("/prince"); // Change to your desired route for option B
        break;
      default:
        // Optional: handle any other cases or default behavior
        console.log("Other option selected");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans p-6">
      <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
        She <span className="text-4xl text-blue-700">envisioned</span> a great
        future, where no-one need to pull the weeds by hands. She also{" "}
        <span className="text-4xl text-blue-700">envisioned</span> making a lot
        of money and finally being free
      </p>
      <div class="flex items-center justify-center h-full">
        <img src="/2.1.png" alt="2.1" />
      </div>

      <div className="w-full max-w-md mx-auto">
        <button
          onClick={() => handleButtonClick("A")}
          className="bg-pink-500 text-white font-semibold py-2 px-4 border border-pink-600 rounded shadow mb-4 w-full hover:bg-pink-600 transition-colors"
        >
          A. WOW THIS IS GREAT! LET’S START A WEED-KILLER BUSINESS!
        </button>
        <button
          onClick={() => handleButtonClick("B")}
          className="bg-purple-500 text-white font-semibold py-2 px-4 border border-purple-600 rounded shadow w-full hover:bg-purple-600 transition-colors"
        >
          B. I DON’T CARE. I'M GOING TO MARRY THE PRINCE WHO KISSED ME.
        </button>
      </div>
    </div>
  );
}
