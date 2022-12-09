import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider
} from 'react-router-dom';
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/Rightbar';

function App() {

  const Layout = () => {
    return(
      <div>
        <NavBar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
