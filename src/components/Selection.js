import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function Selection() {
  const { swipeHandlers } = useSwipeNavigation("/patriachy", "/quiz");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center mb-4 text-2xl font-semibold">
            She didn’t have much time, so she quickly improvised a very ______
            pitch.
          </p>
          <img
            src="/pie.png"
            alt="Strong and confident female"
            className="mb-4"
          />

          <p className="text-center text-purple-700 font-semibold text-2xl mb-2">
            only 10 % of fortune 500 CEOS are females
          </p>
        </div>
      </div>
    </div>
  );
}

export default Selection;
