import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Project specific styling
import './index.css'

// Fabric styling is now impored in index.html to be able to control the order of imports

// Warp: Currently it contians the reset - will contain whatever we are using in this project
import 'uno.css' 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
