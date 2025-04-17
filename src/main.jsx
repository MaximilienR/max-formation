import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Formprovider from './components/Providers/FormProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formprovider>
    <App />
    </Formprovider>
  </StrictMode>,
)
