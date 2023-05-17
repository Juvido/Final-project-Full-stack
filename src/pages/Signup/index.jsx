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
      console.log (api.data)
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
    <h2 class="text-base font-semibold leading-7 text-gray-900">Crie aqui o seu perfil</h2>
      {/*<p class="mt-1 text-sm leading-6 text-gray-600">*nao usaremos seus dados para publicidade</p>*/}

      <label htmlFor="formName">Seu nome:</label>
      <input
        id="formName"
        name="name"
        type="text"
        required={true}
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} />

      <label htmlFor="formEmail">Seu email:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        required={true}
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Sua senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        required={true}
        value={form.password}
        onChange={handleChange}
      />
    </div>  
      <button
        type="submit"
        className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold
      text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-indigo-600"
      > Cadastrar
      </button>
    </form>
  );
}
