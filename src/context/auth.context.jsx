import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [loggenIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = async (body) => {
        try {
            const response = await api.post("/user/signup", body)

            if (response.status == 201 || response.status === 200){
                setUser(response.data.user);
                setLoggedIn(true);
                localStorage.setItem("authToken", response.data.authToken);
                navigate("/");
            }
        } catch (error) {
            setUser(null);
            setLoggenIn(false);
            localStorage.clear();
            console.log("error while logging in", error);
            return error;
        }
    };

    const signup = async (body) => {
       try {
            const response = await api.post("/user/signup", body);

            if (response.status == 201 || response.status === 200){
                navigate("/login");
            }
       } catch (error) {
            console.log("error while signing up", error);
            return error;
       } 
    };

    const verify = async () => {
        try {
            const response = await api.get("/user/verify");
            setUser(response.data.user);
            setLoggenIn(true);
        } catch (error) {
            setUser(null);
            setLoggedIn(false);
            localStorage.clear();
            console.log("error while verifying user",error);
            return error;
        }
    };

    useEffect(() => {
        verify();
    }, []);


    return (
        <AuthContext.Provider value={{ user, login, signup, loggenIn }}>
            {children}
        </AuthContext.Provider>
   );
}

export { AuthContext, AuthProvider };