import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter/Counter.jsx';
import Form from './Form/Form';
import FormEmail from './Form/Email/FormEmail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Counter/>
      <Form/>
      <FormEmail/>
    </App>
  </StrictMode>
)
