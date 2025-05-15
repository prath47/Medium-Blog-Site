import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    
    const navigate = useNavigate(); 
    
    useEffect(()=> {
        const token = localStorage.getItem("token");
        if (token) {
            localStorage.removeItem("token");
        }
        navigate("/signin")
    }, [])
  return (
    <div>Loggin Out</div>
  )
}

export default Logout