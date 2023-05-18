import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api.js";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

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
      navigate("/feed");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-12 m-4">
      <div class="p-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label class="block text-lg text-2xl leading-6 text-gray-900">
              Seu email:
            </label>
            <input
              type="email"
              name="email"
              required={true}
              value={form.email}
              onChange={handleChange}
              class="rounded-md block flex-1 border border-gray-400 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
              placeholder="email cadastrado"
            />
          </div>
          <div class="sm:col-span-4 mb-6">
            <label class="block text-lg font-medium leading-6 text-gray-900">
              Sua senha:
            </label>
            <input
              type="password"
              name="password"
              required={true}
              value={form.password}
              onChange={handleChange}
              class="rounded-md block flex-1 border border-gray-400 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
              placeholder="insira sua senha"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            class="rounded-md bg-orange-500 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Entrar
          </button>

          <Link to="/">
            <button class="rounded-md px-3 py-2 text-xl font-semibold text-orange-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
