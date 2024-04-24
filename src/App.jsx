import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffectOnce } from 'react-use'
import { useRef } from 'react'
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
  const lenisRef = useRef()
  useEffectOnce(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 700)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  })

  useEffectOnce(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      visible: true,
      speed: 0.9,
      skewing: 2,
      container: document.body,
    });

    return () => cursor.destroy();
  })

  return (
    <>
      <ReactLenis ref={lenisRef} autoRaf={false} root>
        <RouterProvider router={router} />
      </ReactLenis>
    </>
  );
}

export default App
