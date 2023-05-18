import { Link } from "react-router-dom";

export function Home() {
  return (
    <div class="relative isolate overflow-hidden bg-gray-100 h-screen py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <h2 class="text-5xl text-center justify-center font-bold tracking-tight text-green-700 ml-6 sm:text-5xl">
            Em busca da pizza perfeita! 
            <p class="text-2xl text-center justify-center font-bold tracking-tight text-green-700 ml-8 mt-8 sm:text-2xl">Consulte aqui antes da compra</p>
          </h2>
         

          <div class="max-w-xl lg:max-w-lg">
            <dl class="grid grid-cols-3 gap-x-2 gap-y-10  lg:pt-2 m-10">
              <p class="mt-1 rounded-md font-semibold text-black bg-red-100 text-center justify-center p-5 ">
                Onde encontrar a melhor pizza?
              </p>
              <p class="mt-1 rounded-md font-semibold text-black bg-red-100 text-center justify-center pt-9 ">
                Pesquise e encontre!
              </p>
              <p class="mt-1 rounded-md font-semibold text-black bg-red-100 text-center justify-center pt-9 pl-2 pr-2 ">
                Avalie e comente
              </p>
            </dl>
          </div>
        </div>
        <div class="mt-10 flex items-center justify-around gap-x-6">
          <Link
            to="/signup"
            class="mt-6 rounded-md border border-gray-400 px-3 py-2 text-2xl font-semibold text-yellow-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            <button> Cadastro </button>
          </Link>
          <Link
            to="/login"
            class="mt-6 rounded-md border border-gray-400 px-3 py-2 text-2xl font-semibold text-yellow-700 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            <button> Entrar </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
