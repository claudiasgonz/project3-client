import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function LoginForm() {
    const [loginInfo, setLoginInfo] = useState({
        loginInfo:"",
        password: ""
    });

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setLoginInfo(prev => ({...prev, [e.target.name]: e.target.value}));
    };

  return (
    <form 
    className="center flex-col p-10 border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono"
        onSubmit={(e) => {
        e.preventDefault();
        login(loginInfo);
    }}
    >   <h1 className="font-mono text-center py-10 font-bold text-5xl">log in</h1>
        <label htmlFor="LoginInfo">username / email</label>
        <input 
            type="text" 
            name="loginInfo" 
            value={loginInfo.loginInfo} 
            onChange={handleChange}
            placeholder="email"
            className="border border-black py-2 mb-2"
        />

        <label htmlFor="password">password</label>
        <input 
            type="password" 
            name="password" 
            value={loginInfo.password} 
            onChange={handleChange}
            placeholder="password"
            className="border border-black py-2 mb-2"
        />
        <button 
        type="submit" 
        className="p-2 m-2 border-1 border-2 border-black rounded-full hover:bg-blue-600 hover:text-white"
        >
        log in
        </button>

        <p className="mt-4">
                don't have an account yet? 
                <br></br>
                <Link to="/signup" className="text-blue-600 hover:underline">
                sign up!
                </Link>
        </p>
    </form>
  )
}

export default LoginForm;