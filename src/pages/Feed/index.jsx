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
      <div class="flex overflow-hidden bg-gray-100 h-screen pt-5 ">
        <div class="ml-1">
          <h1 class="ml-2 text-2xl font-bold tracking-tight text-gray-900">
            Olá,{" "}
            {loggedInUser ? <strong>{loggedInUser.user.name}</strong> : null}
          </h1>

          <div class="mt-5 mb-5 flex items-center justify-start gap-x-6">
            <Link
              to="/postar"
              class="mt-2 rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold text-yellow-700 shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              <button> Nova postagem </button>
            </Link>
            <Link
              to="/dashboard"
              class="mt-2 rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold text-yellow-700 shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              <button> Minhas postagens </button>
            </Link>
          </div>
          <div class="flex  pt-5 w-screen justify-center bg-yellow-100">
            <h2 class="text-center text-gray-900 mb-4 text-lg">
              {" "}
              Confira o que temos de novidade por aqui{" "}
            </h2>
          </div>

          <div class="grid grid-cols-1 pt-6 gap-x-5 gap-y-8 sm:grid-cols-3 ">
            {posts.map((currentPost) => {
              return (
                <>
                  <div class="flex flex-col rounded-md mr-2 items-center justify-center border border-gray-300 p-3">
                    <Link to={`/post/${currentPost._id}`} key={currentPost._id}>
                      <h3  class="text-md text-gray-700 mb-1">
                        {currentPost.name}
                      </h3>
                    </Link>
                    <div class="flex justify-center">
                      <p class="text-sm rounded-md bg-yellow-200 font-medium text-gray-900 px-5">
                        Nota: {currentPost.score}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
