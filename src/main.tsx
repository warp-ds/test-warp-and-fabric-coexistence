import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Project specific styling
import './index.css'

/**
 * uno.css contains the uno generated css based on what classes that are used in this project.
 * Because we have set the skipResets flag in uno.config.js, the warp reset is not included here.
 */
//import 'uno.css' 


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
