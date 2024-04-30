import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page3() {
  const navigate = useNavigate();
  const yawn = new Audio("/yawn.mp3");
  const handleButtonClick = (answer) => {
    console.log(`You clicked on option: ${answer}`);
    // Example navigation logic based on the button clicked
    switch (answer) {
      case "A":
        navigate("/4"); // Change to your desired route for option A
        break;
      case "B":
        navigate("/supervise"); // Change to your desired route for option B
        yawn.play();
        break;
      default:
        // Optional: handle any other cases or default behavior
        console.log("Other option selected");
    }
  };
  return (
    <div className="custom-bg flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="custom-bg flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
            Snow White shared her{" "}
            <span className="text-4xl text-blue-700">vision</span> with the
            seven gnomes. She didn’t have much time, so she quickly{" "}
            <span className="text-4xl text-blue-700">improvised</span> a very
            ___ pitch.
          </p>
          <div class="flex items-center justify-center h-full">
            <img src="/3.png" alt="3" />
          </div>
          <div className="w-full max-w-md mx-auto">
            <button
              onClick={() => handleButtonClick("A")}
              className="font-poor-story bg-pink-500 text-white font-semibold py-2 px-4 border border-pink-600 rounded shadow mb-4 w-full hover:bg-pink-600 transition-colors"
            >
              A. Visual
            </button>
            <button
              onClick={() => handleButtonClick("B")}
              className="font-poor-story bg-purple-500 text-white font-semibold py-2 px-4 border border-purple-600 rounded shadow w-full hover:bg-purple-600 transition-colors"
            >
              B. Supervised
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
