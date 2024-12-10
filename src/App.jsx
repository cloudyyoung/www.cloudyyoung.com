import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Lenis from 'lenis'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import './App.css'
import 'mouse-follower/dist/mouse-follower.min.css'

import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  }
]);

function App() {
  new Lenis({
    autoRaf: true,
  });

  useGSAP(() => {
    MouseFollower.registerGSAP(gsap);
    new MouseFollower({
      visible: true,
      speed: 0.9,
      skewing: 2,
      container: document.body,
    });
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
