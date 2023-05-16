import { useContext , useState, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js"

export function UserDashboard () {

    const { loggedInUser } = useContext(AuthContext);
    const [ posts, setPosts] = useState([]);
    
    useEffect (() => {
        async function fetchPosts() {
            try {
                const response = await api.get("/post/meus-posts")
                
                setPosts([...response.data])

            } catch (e) {
                console.log(e);
              }
        };
        fetchPosts()
    }, [])

    return <>
        <h1> Ola, {loggedInUser ? <strong>{loggedInUser.user.name}</strong> : null} </h1>
        <Link to="/postar">
        <button> Nova postagem </button>
        </Link> {' '}

        <h2> Minhas postagens: </h2>

        <ul>
        {posts.map((currentPost) => {
            return <Link to={`/post/${currentPost._id}`} key={currentPost._id}>
            <li >{currentPost.name}</li>
            </Link>
        })}
        </ul>
    </>
}