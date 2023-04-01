import Navbar from "./componenets/navbar/Navbar"
import LeftBar from "./componenets/leftBar/LeftBar";
import RightBar from "./componenets/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
// React Router
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {

  const currentUser = false;

  const Layout = ()=>{
    return(
      <div>
        <Navbar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  // If User isn't logged in, user will be navigated to Home Page
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/home" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        ),
      children:[
        {
          path:"/home",
          element:<Home />,
        },
        {
          path:"/profile/:id",
          element:<Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
