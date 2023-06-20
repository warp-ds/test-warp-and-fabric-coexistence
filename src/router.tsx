import { createBrowserRouter } from "react-router-dom";
import Alert from "./components/alert";
import Button from './components/Button';
import Pill from "./components/pill";
import Steps from './components/steps';
import Combobox from './components/combobox';
import Select from './components/select';
import Slider from './components/slider';
import Switch from './components/switch';
import Textarea from "./components/textarea";
import Textfield from "./components/textfield";
import Toggle from "./components/toggle";
import Box from "./components/box";

export const router = createBrowserRouter([
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
  {
    path: "/switch",
    element: <Switch />,
  },
  {
    path: "/textarea",
    element: <Textarea />,
  },
  {
    path: "/textfield",
    element: <Textfield />,
  },
  {
    path: "/toggle",
    element: <Toggle />,
  },
  {
    path: "/box",
    element: <Box />,
  },
]);