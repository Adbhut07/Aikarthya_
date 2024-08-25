import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import LoginSection from './components/LoginSection';
import ErrorElement from './components/ErrorElement';
import Acceptance from './components/Acceptance';
import TeacherForm from './components/TeacherForm';
import StudentForm from './components/StudentForm';
import SignUp from './components/SignUp';
import SideBarLayout from './components/SideBarLayout'; // Import the new layout
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import Inbox from './components/Inbox';
import AddProject from './components/AddProject';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />, // Moved inside the root route configuration
    children: [
      {
        path: "",
        element: <LoginSection />,
      },
      {
        path: "acceptance",
        element: <Acceptance />,
      },
      {
        path: "teacher-form",
        element: <TeacherForm />,
      },
      {
        path: "student-form",
        element: <StudentForm />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <SideBarLayout />, // Add a new layout for routes with the sidebar
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "inbox",
            element: <Inbox />,
          },
        ],
      },
      {
        path: "add-project",
        element: <AddProject />,
      },
    ],
  },
]);

export { appRouter };
