import { useState } from "react";
import { api } from "../../api/api.js";
import { useParams, useNavigate } from "react-router-dom";

export function CreateComment() {
  const navigate = useNavigate();
    const params = useParams();
  const [form, setForm] = useState({
    text: "",
  });

  async function handleSubmit(e) {
    try {
        e.preventDefault();
        await api.post(`/comment/${params.postId}`, form)
        navigate(`/post/${params.postId}`)

    } catch (e) {
        console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Comentario: </label>
      <input
        type="text"
        required={true}
        onChange={(e) => {
          setForm({ text: e.target.value });
        }}
        value={form.text}
      />
      <button>Enviar</button>
    </form>
  );
}
