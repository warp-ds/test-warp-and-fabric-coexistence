import { RouterProvider } from "react-router-dom";
import Sidebar from './components/sidebar';
import { router } from './router';

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
