import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Alumni from "./pages/alumni/Alumni";
import Awards from "./pages/awards/Awards";
import JobsAndIntern from "./pages/jobsAndIntern/JobsAndIntern";
import Posts from "../src/components/posts/Posts";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import "./style.scss"

// React Router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {

  const currentUser = useContext(AuthContext);
  const queryClient = new QueryClient();
  const { darkMode } = useContext(DarkModeContext);

  const Layout = ()=>{
    return(
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "default"}`}>
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: 10}}>
            <Outlet />
          </div>
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  // If User isn't logged in, user will be navigated to Home Page
  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate to="/home"/> // with the help of React Router
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
          path:"/",
          element:<Home />,
        },
        {
          path:"/home",
          element:<Home />,
        },
        {
          path:"/posts",
          element:<Posts />,
        },
        {
          path: "/events",
          element: <Events />,
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
          path: "/jobsAndIntern",
          element: <JobsAndIntern />,
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