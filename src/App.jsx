import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import { UserDashboard } from "./pages/UserDashboard";
import { CreatePost } from "./pages/CreatePost";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AuthRouteProtector component={UserDashboard}/>} />
          <Route path="/postar" element={<AuthRouteProtector component={CreatePost}/>} />
          
          
          {/*<Route
            path="/profile"
            element={<AuthRouteProtector component={Profile} />}
          />*/}

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
