import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import {useEffectOnce} from 'react-use'
import MouseFollower from "mouse-follower";
import gsap from "gsap";

import './App.css'
import 'mouse-follower/dist/mouse-follower.min.css'

import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  useEffectOnce(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      visible: true,
      speed: 0.9,
      skewing: 2,
      container: document.body,
    });
  })

  return (
    <>
      <ReactLenis lenis={lenis} root>
        <RouterProvider router={router} />
      </ReactLenis>
    </>
  );
}

export default App
