import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const SideBarLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarLayout;
