import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { ConfirmationButton } from "../ConfirmationButton/index";
import Image from "../../assets/images/images.png";

export function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    setLoggedInUser("");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <div className="mx-auto flex max-w-7xl bg-yellow-200 items-center justify-around p-6 lg:px-8 ">
        <img src={Image} alt="pizzas" className="flex w-10" />

        {location.pathname === "/login" ? (
          <h2 class="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
            
            Em busca da pizza perfeita
          </h2>
        ) : loggedInUser ? (
          <>
        
            <h2 class="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              
              Em busca da pizza perfeita
            </h2>

            <ConfirmationButton
              functionForExecution={handleLogout}
              confirmationText="Tem certeza que deseja sair?"
            >
              Sair
            </ConfirmationButton>
          </>
        ) : (
          <>
            <h2 class="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
              
              Em busca da pizza perfeita
            </h2>
            <Link to="/login">
              <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 border border-gray-400">
                Entrar
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
