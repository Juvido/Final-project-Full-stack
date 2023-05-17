import { useState } from "react";
import { api } from "../../api/api.js";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    ingredients: "",
    store: "",
    score: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await api.post("/post", form);
      navigate("/feed");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Link to="/feed">
        <button> Voltar </button>
      </Link>{" "}
      <form onSubmit={handleSubmit}>
        <label>Nome da Pizza:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <label>Observações:</label>
        <input
          type="text"
          name="notes"
          onChange={handleChange}
          value={form.notes}
        />
        <label>Principais ingredientes:</label>
        <input
          type="text"
          name="ingredients"
          onChange={handleChange}
          value={form.ingredients}
        />
        <label>Loja onde comprou:</label>
        <input
          type="text"
          name="store"
          onChange={handleChange}
          value={form.store}
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
    </>
  );
}
