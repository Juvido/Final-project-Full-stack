import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

export function UserDashboard () {

    const { loggedInUser } = useContext(AuthContext)

    return <>
        <h1> Ola, {loggedInUser.user.name} </h1>
        <Link to="/postar">
        <button> Fazer nova postagem </button>
        </Link>
        <h2> Minhas postagens</h2>
    </>
}