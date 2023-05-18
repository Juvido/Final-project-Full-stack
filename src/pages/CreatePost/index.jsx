import { useState } from "react";
import { api } from "../../api/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <button class="mt-3 ml-3 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Voltar </button>
      </Link>

      <h2 class="ml-10 mt-10 text-base font-bold font-lg leading-10 text-gray-900">
        Crie sua postagem:
      </h2>

      <form onSubmit={handleSubmit} class="space-y-12 m-4">
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Nome da Pizza:
            </label>
            <div class="mt-2">
              <div >
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Observações:
            </label>
            <input
              type="text"
              name="notes"
              onChange={handleChange}
              value={form.notes}
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Principais ingredientes:
            </label>
            <input
              type="text"
              name="ingredients"
              onChange={handleChange}
              value={form.ingredients}
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Loja onde comprou:
            </label>
            <input
              type="text"
              name="store"
              onChange={handleChange}
              value={form.store}
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Nota de avaliação:
            </label>
            <select
              name="score"
              onChange={handleChange}
              value={form.score}
              class="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="0"> - </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
          </div>

          <div class="mt-6 flex items-center justify-start gap-x-4">
            <button class="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
