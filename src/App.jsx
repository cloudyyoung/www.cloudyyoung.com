import { useRef } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

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

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

function App() {
  const container = useRef(null);
  const content = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: container.current,
      content: content.current,
      smooth: 0.8,
      effects: true,
    });
  }, { dependencies: [], scope: container });

  return (
    <>
      <div ref={container}>
        <div ref={content}>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App
