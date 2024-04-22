import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import './App.css'

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

  return (
    <>
      <ReactLenis lenis={lenis} root>
        <RouterProvider router={router} />
      </ReactLenis>
    </>
  );
}

export default App
