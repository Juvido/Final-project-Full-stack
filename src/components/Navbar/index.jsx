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
      <div className="mx-auto flex py-10 bg-quadriculado items-center justify-around p-6 lg:px-8 quad-background h-auto">
        <img src={Image} alt="pizzas" className="flex w-12" />

        {location.pathname === "/login" ? (
          <h2 className="flex p-2 items-center gap-x-1 text-4xl font-bold leading-6 text-gray-900">
            Em busca da pizza perfeita
          </h2>
        ) : loggedInUser ? (
          <>
            <h2 className="flex p-2 items-center gap-x-1 text-4xl font-bold leading-6 text-gray-900">
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
            <h2 className="flex p-2  items-center gap-x-1 text-4xl font-bold leading-6 text-gray-900">
              Em busca da pizza perfeita
            </h2>
            <Link to="/login">
              <button className="-m-2.5 bg-green-200 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ">
                Entrar
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
