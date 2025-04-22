import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ProductProvider from './goCart/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    {/* <ProductProvider>
    <App />
    </ProductProvider> */}
    
  </StrictMode>,
)
