import React from "react";
import { useSwipeNavigation } from "./useSwipeNavigation";

const NavigationLayout = ({
  children,
  leftRoute,
  rightRoute,
  leftState,
  rightState,
}) => {
  const { swipeHandlers, simulateSwipeLeft, simulateSwipeRight } =
    useSwipeNavigation(leftRoute, rightRoute, leftState, rightState);

  return (
    <div
      {...swipeHandlers}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      {children} {/* Render the child components */}
      <div className="fixed inset-x-0 bottom-10 flex justify-center space-x-4">
        <button
          onClick={simulateSwipeLeft}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        {rightRoute && ( // Check if rightRoute exists before rendering the button
          <button
            onClick={simulateSwipeRight}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationLayout;

// import React from "react";
// import { useSwipeNavigation } from "./useSwipeNavigation";

// const NavigationLayout = ({
//   children,
//   leftRoute,
//   rightRoute,
//   leftState,
//   rightState,
// }) => {
//   const { swipeHandlers, simulateSwipeLeft, simulateSwipeRight } =
//     useSwipeNavigation(leftRoute, rightRoute, leftState, rightState);

//   return (
//     <div
//       {...swipeHandlers}
//       className="flex flex-col items-center justify-center min-h-screen"
//     >
//       {children}{" "}
//       {/* Render the child components above the buttons if needed or adjust as per design requirements */}
//       <div className="fixed inset-x-0 bottom-10 flex justify-center space-x-4">
//         {" "}
//         {/* Adjusts button positioning */}
//         <button
//           onClick={simulateSwipeLeft}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Prev
//         </button>
//         <button
//           onClick={simulateSwipeRight}
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavigationLayout;
