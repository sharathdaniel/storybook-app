import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Global StyleBase design system (tokens, themes, components, utilities) + Kendo theme.
import './scss/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
