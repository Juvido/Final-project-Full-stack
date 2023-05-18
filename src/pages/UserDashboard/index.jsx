import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js";

export function UserDashboard() {
  const { loggedInUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/post/meus-posts");
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
          <h1 class="ml-10 text-2xl font-bold tracking-tight text-gray-900">
            Olá,{" "}
            {loggedInUser ? <strong>{loggedInUser.user.name}</strong> : null}
          </h1>
          <div class="mt-5 mb-5 ml-6 flex items-center justify-start gap-x-6">
            <Link
              to="/postar"
              class="mt-2 rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold text-yellow-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              <button> Nova postagem </button>
            </Link>
            <Link to="/feed">
              <button class="m-1 rounded-sm px-2 py-1 text-sm font-semibold text-orange-800 bg-orange-50 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100">
                Voltar
              </button>
            </Link>
          </div>
          <div class="flex  pt-5 w-screen justify-center bg-yellow-100">
            <h2 class="text-center text-green-800 mb-4 text-xl">
              Minhas postagens:
            </h2>
          </div>

          <div class="m-5 grid grid-cols-1 pt-6 gap-x-5 gap-y-8 sm:grid-cols-3 ">
            {posts.map((currentPost) => {
              return (
                <>
                  <div class="flex flex-col rounded-md mr-2 items-center justify-center border border-gray-300 p-3">
                    <Link to={`/post/${currentPost._id}`} key={currentPost._id}>
                      <h3 class="text-2xl text-black-700 bold mb-1">
                        {currentPost.name}
                      </h3>
                    </Link>
                    <div class="flex justify-center">
                    <p class="text-sm rounded-sm bg-yellow-200 font-medium text-gray-900 px-2">Nota media: </p>
                      <p class="text-sm rounded-sm bg-green-200 font-medium text-gray-900 px-2">
                        {currentPost.score.reduce((acc, currentScore) => {
                          return acc + currentScore;
                        }, 0) / currentPost.score.length}
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
