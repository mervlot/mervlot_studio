
import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from 'react-dom/client'
 import'./index.css'

const App = lazy(() => import( './App.jsx'))

createRoot(document.getElementById('root')).render(
    
    <Suspense><App /></Suspense>
)
