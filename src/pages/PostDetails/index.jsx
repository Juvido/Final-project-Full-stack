import { api } from "../../api/api.js";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.jsx";
import { ConfirmationButton } from "../../components/ConfirmationButton/index.jsx";

export function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({
    comments: [],
  });
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
  }
  return (
    <>
      <h2>{post.name} </h2>
      <h4>{post.notes}</h4>
      <p>{post.ingredients}</p>
      <p>{post.store}</p>
      <p> {post.score}
        {/*{
          (post.score.reduce((acc, currentScore)=>{
        return acc + currentScore.score }, 0) / post.score.length)
         
        }*/}
      </p>
      <Link to={`/comentarios/${params.id}`}>
        <button> Comentar</button>
      </Link>
      <h3> Comentários: </h3>

      {post.comments.length ? (
        <ul>
          {post.comments.map((currentComment, currentIndex) => {
            return (
              <>
                <li key={currentComment._id}> {currentComment.text}</li>
                {currentComment.creator === loggedInUser.user._id ||
                post.creator === loggedInUser.user._id ? (
                  <ConfirmationButton
                    confirmationText="Tem certeza que deseja apagar?"
                    functionForExecution={() => {
                      handleDelete(currentComment._id, currentIndex);
                    }}
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
    </>
  );
}
