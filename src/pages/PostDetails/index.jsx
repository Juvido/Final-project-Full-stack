import { api } from "../../api/api.js";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.jsx";
import { ConfirmationButton } from "../../components/ConfirmationButton/index.jsx";

export function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({ score: [], comments: [] });
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/post/${params.id}`);
        console.log(response.data);
        setPost({ ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, []);

  async function handleDelete(commentId, currentIndex) {
    try {
      await api.delete(`/comment/${commentId}`);
      setPost((currentState) => {
        currentState.comments.splice(currentIndex, 1);
        return { ...currentState };
      });
    } catch (e) {
      console.log(e);
    }

    async function handlePostDelete(postId, currentIndex) {
      try {
        await api.delete(`/post/${postId}`);
        setPost((currentState) => {
          currentState.posts.splice(currentIndex, 1);
          return { ...currentState };
        });
      } catch (e) {
        console.log(e);
      }
  }
}
  return (
    <>
      <div class="ml-12">
        <div class="m-5 px-4 sm:px-0">
          <h2 class="text-3xl  font-semibold leading-7 text-gray-900">
            🍕 {post.name}
          </h2>
        </div>
        <Link to={`/feed`}>
          <button class="m-1 rounded-sm px-2 py-1 text-sm font-semibold text-orange-800 bg-orange-100 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100">
            Voltar
          </button>
        </Link>
        <div class="mt-6 border-t border-red-100">
          <dl class="divide-y divide-red-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Observações:
              </dt>
              <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {post.notes}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Principais ingredientes utilizados:
              </dt>
              <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {post.ingredients}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Loja onde foi comprada:
              </dt>
              <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {post.store}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Nota media:
              </dt>
              <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {(post.score.reduce((acc, currentScore) => {
                  return acc + currentScore;
                }, 0) / post.score.length).toFixed(1)}
              </dd>
            </div>

            <Link to={`/comentarios/${params.id}`}>
              <button class="m-6 rounded-md border border-orange-500 px-3 py-2 text-xl font-semibold text-white bg-orange-400 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100">
                Comentar
              </button>
            </Link>

            <div class=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-lg font-medium leading-6 text-gray-900">
                Comentários:
              </dt>

              {post.comments.length ? (
                <ul>
                  {post.comments.map((currentComment, currentIndex) => {
                    return (
                      <>
                        <dd
                          key={currentComment._id} 
                          class="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-orange-100"
                        >
                          {currentComment.text}
                        </dd>

                        {currentComment.creator === loggedInUser.user._id ||
                        post.creator === loggedInUser.user._id ? (
                          <ConfirmationButton
                            confirmationText="Tem certeza que deseja apagar?"
                            functionForExecution={() => {
                              handleDelete(currentComment._id, currentIndex);
                            }}
                            className="mt-2 mb-4 rounded-md border border-gray-400 px-3 py-2 text-lg text-yellow-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                          >
                            Deletar
                          </ConfirmationButton>
                        ) : null}

                        {currentPost.creator === loggedInUser.user._id ||
                        post.creator === loggedInUser.user._id ? (
                          <ConfirmationButton
                            confirmationText="Tem certeza que deseja apagar?"
                            functionForExecution={() => {
                            

                              
                              handlePostDelete(currentPost._id, currentIndex);
                            }}
                            className="mt-2 mb-4 rounded-md border border-gray-400 px-3 py-2 text-lg text-yellow-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                          >
                            Deletar
                          </ConfirmationButton>
                        ) : null}
                      </>
                    );
                  })}
                </ul>
              ) : (
                <p> Não há comentários. Deixe o seu!</p>
              )}
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
