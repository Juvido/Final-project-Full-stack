import { Route, Routes } from "react-router-dom";
import { AuthRouteProtector } from "./components/AuthRouteProtector";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserDashboard } from "./pages/UserDashboard";
import { CreatePost } from "./pages/CreatePost";
import { Navbar } from "./components/Navbar";
import { PostDetails } from "./pages/PostDetails";
import { CreateComment } from "./pages/Comment";
import { Feed } from "./pages/Feed";
//import { AuthHomeProtector } from "./components/AuthHomeProtector";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<AuthRouteProtector component={UserDashboard} />}
          />
          <Route
            path="/feed"
            element={<AuthRouteProtector component={Feed} />}
          />
          <Route
            path="/postar"
            element={<AuthRouteProtector component={CreatePost} />}
          />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route
            path="/comentarios/:postId"
            element={<AuthRouteProtector component={CreateComment} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
