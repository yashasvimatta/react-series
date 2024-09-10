import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(     // in index.htmol we have div with id root that is being referenced here
    <App />  
) 