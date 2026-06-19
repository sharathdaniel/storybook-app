import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { ComponentsDemo } from './pages/ComponentsDemo';
import { IconRegistry } from './icons/IconRegistry';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<ComponentsDemo />} />
        </Route>
      </Routes>
      {/* Global SVG sprite — hidden; <use href="#icon-*"> references it. */}
      <IconRegistry className="u-d-none" />
    </BrowserRouter>
  );
}
