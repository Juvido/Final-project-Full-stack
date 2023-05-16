import { api } from "../../api/api.js";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { ConfirmationButton } from "../../components/ConfirmationButton/index.jsx";

export function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({
    comments: [],
  });
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ deleteStatus, setDeleteStatus ] = useState(false);

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
      setPost((currentState)=> {
        currentState.comments.splice(currentIndex, 1)
        return {...currentState }
      })
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
      <p>{post.score}</p>
      <Link to={`/comentarios/${params.id}`}>
        <button> Comentar</button>
      </Link>
      <h3> Comentarios: </h3>

      {post.comments.length ? (
        <ul>
          {post.comments.map((currentComment, currentIndex) => {
            return (
              <>
                <li> {currentComment.text}</li>
                {currentComment.creator === loggedInUser.user._id ||
                post.creator === loggedInUser.user._id ? (
                  <ConfirmationButton
                    confirmationText="Tem certeza que deseja apagar o conteudo?"
                    functionForExecution={()=>{
                      handleDelete(currentComment._id, currentIndex)
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
        <p> Nao ha comentarios. Deixe o seu!</p>
      )}
    </>
  );
}
