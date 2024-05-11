import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { FavoriteExerciseProvider } from './components/hooks/FavoriteExerciseContext.tsx'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
   <BrowserRouter>
   <FavoriteExerciseProvider>
      <App />
    </FavoriteExerciseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
