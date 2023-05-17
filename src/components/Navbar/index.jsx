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
    <div className="flex center max-w-9xl p-4 bg-yellow-100" >
    <img src={Image} alt="pizzas" className="flex w-14"/>{" "}{" "}

      {location.pathname === "/login" ? null : loggedInUser ? (
        <>
          <Link to="/postar">
            <button>Nova postagem</button>
          </Link>{" "}{" "}

          <ConfirmationButton
            functionForExecution={handleLogout}
            confirmationText="Tem certeza que deseja sair?"
          >
            Sair
          </ConfirmationButton>
        </>
      ) : (
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      )}
      </div>
    </>
  );
}