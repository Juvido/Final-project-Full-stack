import { useState } from "react";
import { api } from "../../api/api.js";
import { useParams, useNavigate } from "react-router-dom";

export function CreateComment() {
  const navigate = useNavigate();
    const params = useParams();
  const [form, setForm] = useState({
    text: "",
    score: ""
  });

  function handleChange(e) {
    setForm((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  }

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
      <label> Comentário: </label>
      <input
        type="text"
        required={true}
        onChange={(e) => {
          setForm({ text: e.target.value });
        }}
        value={form.text}
      />
      <label>Nota de avaliação:</label>
        <select name="score" onChange={handleChange} value={form.score}>
          <option value="0"> - </option>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
        </select>
      <button>Enviar</button>
    </form>
  );
}
