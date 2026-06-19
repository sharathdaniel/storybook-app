import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { ComponentsDemo } from './pages/ComponentsDemo';
import { IconRegistry } from './icons/IconRegistry';

// Vite injects BASE_URL ('/' in dev, '/storybook-app/' for the Pages build).
// React Router wants a basename without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<ComponentsDemo />} />
        </Route>
      </Routes>
      {/* Global SVG sprite - hidden; <use href="#icon-*"> references it. */}
      <IconRegistry className="u-d-none" />
    </BrowserRouter>
  );
}
