import { Outlet } from 'react-router-dom';
import { MainHeader } from '../MainHeader/MainHeader';
import { Sidebar } from '../Sidebar/Sidebar';
import './MainLayout.scss';

export function MainLayout() {
  return (
    <div className="app-c-main-layout">
      <MainHeader />
      <div className="app-c-layout-body">
        <Sidebar />
        <main className="app-c-layout-content u-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
