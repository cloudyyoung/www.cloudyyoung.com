import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './App.css'

import Home from "./pages/Home";
import Lifeline from "./pages/Lifeline";
import Footer from './components/Footer';


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
    path: "/lifeline",
    element: <Lifeline />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App
