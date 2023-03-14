import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import InputText from './components/InputText/InputText'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <InputText />
  </React.StrictMode>,
)