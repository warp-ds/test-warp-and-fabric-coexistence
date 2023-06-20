import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/***
 * Change order to see how the order affects the styling
 * Currently importing uno.css last breaks some fabric components
 */

import './index.css' // Imports Fabric styling
import 'uno.css' // Warp styling 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
