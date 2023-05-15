import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api.js";
import { AuthContext } from "../../contexts/authContext";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        required={true}
        value={form.email}
        onChange={handleChange}
      />
      <label>Senha:</label>
      <input
        type="password"
        name="password"
        required={true}
        value={form.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
      text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600"
      >
        Entrar
      </button>
    </form>
  );
}
