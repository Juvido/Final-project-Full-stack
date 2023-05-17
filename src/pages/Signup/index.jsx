import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api.js";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const imgURL = await handleUpload();

      await api.post("/user/signup", { ...form, img: imgURL });
      console.log(api.data);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-12 m-4">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-bold font-lg leading-10 text-gray-900">
          Crie aqui o seu perfil
        </h2>
        {/*<p class="mt-1 text-sm leading-6 text-gray-600">*nao usaremos seus dados para publicidade</p>*/}
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label
              htmlFor="formName"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Seu nome:
            </label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="formName"
                  name="name"
                  type="text"
                  required={true}
                  value={form.name}
                  onChange={handleChange}
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="nome de usuario"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label
              htmlFor="formEmail"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              {" "}
              Email:{" "}
            </label>
            <div class="mt-2">
              <input
                id="formEmail"
                name="email"
                type="email"
                required={true}
                value={form.email}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="exemplo@dominio.com"
              />
            </div>

            <div class="sm:col-span-4 ">
              <label
                htmlFor="formPassword"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha:
              </label>
              <div class="mt-2">
                <input
                  id="formPassword"
                  name="password"
                  type="password"
                  required={true}
                  value={form.password}
                  onChange={handleChange}
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Mínimo de 8 caracteres, incluindo letras maiúsculas, minúsculas e números"
                />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label
              htmlFor="formImg"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Sua foto de perfil:
            </label>
            <div class="mt-2 flex items-center gap-x-3">
              <svg
                class="h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="file"
                id="formImg"
                onChange={handleImage}
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              class="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {" "}
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
