import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
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
