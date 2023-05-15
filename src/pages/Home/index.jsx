import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <HomeIcon className="h-6 w-6 text-blue-500" />
      <h1 className="text-3xl font-bold underline">
        Em busca da pizza perfeita
      </h1>
      <p> Pesquise e encontre a melhor pizza! </p>
      <p> Deixei sua contribuição: avalie e indique </p>
      <Link to="/signup">
        <button> Cadastro </button>
      </Link>
      <Link to="/login">
      <button> Entrar </button>
      </Link>
    </div>
  );
}
