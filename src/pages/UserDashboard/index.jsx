import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";


export function UserDashboard () {

    const { loggedInUser } = useContext(AuthContext)

    return <>
        <h1> Ola, {loggedInUser.user.name} </h1>
        <button> Fazer nova postagem </button>
        <h2> Minhas postagens</h2>
    </>
}