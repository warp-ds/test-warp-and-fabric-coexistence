import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Button from './components/Button';
import Sidebar from './components/sidebar';

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
