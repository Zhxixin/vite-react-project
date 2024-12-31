import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { debounceSetRem, setRem } from './util/rem.ts';

setRem({});
// window.addEventListener('resize', () => { debounceSetRem({ baseSize: 16 }); });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
