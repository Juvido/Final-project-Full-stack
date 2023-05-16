import { api } from "../../api/api.js";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({
    comments: [],
  });
  //const navigate = useNavigate();

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
      <h3> Comentarios</h3>

      {post.comments.length ? (
        <ul>
          {post.comments.map((currentComment) => {
            return (
              <>
                <li> {currentComment.text}</li>
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
