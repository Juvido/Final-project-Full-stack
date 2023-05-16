import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AuthHomeProtector (props) {
    const { component: Component } = props;
    const navigate = useNavigate();
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedLoggedInUser = JSON.parse(storedUser || '""');

    useEffect(() => {
        if (!parsedLoggedInUser.token) {
            navigate("/dashboard")
                    }
    }, []);
    return <Component />
}