import { Link } from "react-router-dom";

export function Home() {
  return (
    <div class="relative isolate overflow-hidden bg-gray-100 h-screen py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div class="max-w-xl lg:max-w-lg">
            <h2 class="text-4xl font-bold tracking-tight text-yellow-700 sm:text-5xl">
              Em busca da pizza perfeita
            </h2>

            <dl class="grid grid-cols-3 gap-x-2 gap-y-10  lg:pt-2 m-10">
              <p class="mt-4 font-semibold text-black bg-red-100 text-center justify-center p-5 ">
                Onde encontrar a melhor pizza?
              </p>
              <p class="mt-4 font-semibold text-black bg-red-100 text-center justify-center p-5 ">
                Pesquise e encontre!
              </p>
              <p class="mt-4 font-semibold text-black bg-red-100 text-center justify-center p-5 ">
                Avalie e comente
              </p>
            </dl>

            <div class="mt-10 flex items-center justify-around gap-x-6">
            <Link to="/signup" class="mt-6 rounded-md border border-gray-400 px-3 py-2 text-sm font-semibold text-yellow-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <button> Cadastro </button>
            </Link>
            <Link to="/login" class="mt-6 rounded-md border border-gray-400 px-3 py-2 text-sm font-semibold text-yellow-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <button> Entrar </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
