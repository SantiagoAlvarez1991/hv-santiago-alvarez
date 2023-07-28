import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import GlobalStyles from './globalStyles.ts'
import Theme from './Theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      
    <Theme>
      <GlobalStyles/>
      <App />
    </Theme>
  </React.StrictMode>,
)
