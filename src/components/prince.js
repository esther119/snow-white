import React from "react";

export default function Prince() {
  return (
    <div className="custom-bg flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="custom-bg flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
            And then, Snow White married the prince. NOT sure it is a wise
            choice given that he kissed you while you were pronounced DEAD!!!
          </p>
          <div class="flex items-center justify-center h-full">
            <img src="/prince.png" alt="prince" />
          </div>
          <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
            GAME OVER
          </p>
        </div>
      </div>
    </div>
  );
}
