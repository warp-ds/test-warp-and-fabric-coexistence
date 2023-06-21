import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/***
 * Change order to see how the order affects the styling.
 */
import './index.css'
// Fabric styling
import '@fabric-ds/css';
// Warp styling
import 'uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
