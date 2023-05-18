import { useState } from "react";
import { api } from "../../api/api.js";
import { useParams, useNavigate, Link } from "react-router-dom";

export function CreateComment() {
  const navigate = useNavigate();
  const params = useParams();
  const [form, setForm] = useState({
    text: "",
    score: "",
  });

  function handleChange(e) {
    setForm((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await api.post(`/comment/${params.postId}`, form);
      navigate(`/post/${params.postId}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Link to={`/feed`}>
        <button class="m-3 rounded-sm px-2 py-1 text-sm font-semibold text-orange-800 bg-orange-100 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100">
          Voltar
        </button>
      </Link>
      <h2 class="ml-10 mt-10 text-base font-bold text-xl leading-10 text-gray-900">
        Deixe seu Comentário:
      </h2>

      <form onSubmit={handleSubmit} class="space-y-12 m-4">
        <div class="flex mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Texto:
            </label>
            <div class="mt-2">
              <div>
                <input
                  type="text"
                  required={true}
                  onChange={(e) => {
                    setForm({ text: e.target.value });
                  }}
                  value={form.text}
                  class="block h-10 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Nota de avaliação:
            </label>
            <select
              name="score"
              onChange={handleChange}
              value={form.score}
              class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="0"> - </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
          </div>

          <div class="mt-6 flex items-center justify-start ">
            <button class="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
