import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter/Counter.jsx';
import Form from './Form/Form';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Counter/>
      <Form/>
    </App>
  </StrictMode>
)
