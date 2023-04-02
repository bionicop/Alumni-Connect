import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Alumni from "./pages/alumni/Alumni";
import Awards from "./pages/awards/Awards";
import Events from "./pages/events/Events";
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
      <div className="$themes">
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: 10}}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
/*
  // If User isn't logged in, user will be navigated to Home Page
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/home" /> // with the help of React Router
    }
    return children;
  }*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        //<ProtectedRoute>
          <Layout />
        //</ProtectedRoute>
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
      path:"/alumni",
      element:<Alumni />,
    },
    {
      path:"/awards",
      element:<Awards />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/events",
      element: <Events />,
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