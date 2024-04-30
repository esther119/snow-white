import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page0 from "./components/0";
import Page1 from "./components/1";
import Page2 from "./components/2.1";
import Page3 from "./components/3";
import Page4 from "./components/4";
import Page5 from "./components/5";
import Page6 from "./components/6";
import Page7 from "./components/7";
import Page8 from "./components/8";
import Page9 from "./components/9";
import Page10 from "./components/10";
import Page11 from "./components/11";
import Page2point1 from "./components/2";
import Prince from "./components/prince";
import Supervised from "./components/supervised";
import HangmanGame from "./components/dead";
import NavigationLayout from "./NavigationLayout";

function App() {
  const routes = [
    { path: "/", component: Home, leftRoute: "", rightRoute: "/0" },
    { path: "/0", component: Page0, leftRoute: "/", rightRoute: "/1" },
    { path: "/1", component: Page1, leftRoute: "/0", rightRoute: "/2" },
    { path: "/2", component: Page2, leftRoute: "/1", rightRoute: "/2.1" },
    {
      path: "/2.1",
      component: Page2point1,
      leftRoute: "/2.1",
      rightRoute: "/3",
    },
    { path: "/3", component: Page3, leftRoute: "/2", rightRoute: "/4" },
    { path: "/4", component: Page4, leftRoute: "/3", rightRoute: "/5" },
    { path: "/5", component: Page5, leftRoute: "/4", rightRoute: "/6" },
    { path: "/6", component: Page6, leftRoute: "/5", rightRoute: "/7" },
    { path: "/7", component: Page7, leftRoute: "/6", rightRoute: "/8" },
    { path: "/8", component: Page8, leftRoute: "/7", rightRoute: "/9" },
    { path: "/9", component: Page9, leftRoute: "/8", rightRoute: "/10" },
    { path: "/10", component: Page10, leftRoute: "/9", rightRoute: "/11" },
    { path: "/11", component: Page11, leftRoute: "/10", rightRoute: "/dead" }, // No right route for the last page
    { path: "/prince", component: Prince, leftRoute: "/2", rightRoute: "" },
    {
      path: "/supervise",
      component: Supervised,
      leftRoute: "/3",
      rightRoute: "",
    },
    { path: "/dead", component: HangmanGame, leftRoute: "/11", rightRoute: "" },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component, leftRoute, rightRoute }) => (
          <Route
            key={path}
            path={path}
            element={
              <NavigationLayout leftRoute={leftRoute} rightRoute={rightRoute}>
                {React.createElement(component)}
              </NavigationLayout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
