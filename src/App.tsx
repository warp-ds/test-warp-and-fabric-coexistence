import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Alert from "./components/alert";
import Button from './components/Button';
import Pill from "./components/pill";
import Sidebar from './components/sidebar';
import Steps from './components/steps';
import Combobox from './components/combobox';
import Select from './components/select';
import Slider from './components/slider';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <p>
        Change the order of the css imports in main.tsx to check if the order of warp and fabric affects the components.
    </p>
    ),
  },
  {
    path: "/button",
    element: <Button />,
  },
  {
    path: "/pill",
    element: <Pill />,
  },
  {
    path: "/alert",
    element: <Alert />,
  },
  {
    path: "/steps",
    element: <Steps />,
  },
  {
    path: "/combobox",
    element: <Combobox />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
]);

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <h1>Fabric + Warp </h1>
        <RouterProvider router={router} />
      </main> 
      
    </>
  )
}

export default App
