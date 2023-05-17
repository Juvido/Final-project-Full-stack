import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js";

export function Feed() {
  const { loggedInUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/post/all-posts");
        setPosts([...response.data]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div class="relative isolate overflow-hidden bg-gray-100 h-screen py-16 sm:py-24 lg:py-32">
        <div class="ml-2">
          <h1 class="ml-2 text-2xl font-bold tracking-tight text-gray-900">
            Olá,{" "}
            {loggedInUser ? <strong>{loggedInUser.user.name}</strong> : null}
          </h1>
          <Link to="/postar">
            <button> Nova postagem </button>
          </Link>
          <Link to="/dashboard">
            <button> Minhas postagens </button>
          </Link>

          <h2> Para voce: </h2>
          <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              {/*<div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img />
              </div>*/}
              <div class="mt-4 flex justify-between">
                <div>
                  {posts.map((currentPost) => {
                    return (
                      <>
                        {" "}
                        <Link to={`/post/${currentPost._id}`}>
                          <h3
                            key={currentPost._id}
                            class="text-md text-gray-700"
                          >
                            {currentPost.name}
                          </h3>
                        </Link>
                        <div class="mt-1 mb-4 flex justify-between">
                          <p class="text-sm bg-yellow-200 font-medium text-gray-900">
                            {currentPost.score}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
