import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export function useSwipeNavigation(
  leftRoute,
  rightRoute,
  leftState = {},
  rightState = {}
) {
  const navigate = useNavigate();

  // Updated handlers for swipe gestures to include state
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped Left");
      navigate(rightRoute, { state: rightState });
    },
    onSwipedRight: () => {
      console.log("Swiped Right");
      navigate(leftRoute, { state: leftState });
    },
  });

  // Updated functions for simulating swipe with buttons to include state
  const simulateSwipeLeft = () => navigate(leftRoute, { state: leftState });
  const simulateSwipeRight = () => navigate(rightRoute, { state: rightState });

  return { swipeHandlers, simulateSwipeLeft, simulateSwipeRight };
}
