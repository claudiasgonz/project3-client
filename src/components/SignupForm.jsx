import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";



function SignupForm() {
    const [signupInfo, setSignupInfo] = useState({
        email: "",
        username: "",
        password: ""
    });

    const {signup} = useContext(AuthContext);

    const handleChange = (e) => {
        setSignupInfo(prev => ({...prev, [e.target.name]: e.target.value}));
    };

  return (
    <form 
    className="center flex-col p-10 border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono"
        onSubmit={(e) => {
        e.preventDefault();
        signup(signupInfo);
    }}
    >
        <h1 className="font-mono text-center py-10 font-bold text-5xl">sign up</h1>
        <label htmlFor="email">email</label>
        <input 
            type="email" 
            name="email" 
            value={signupInfo.email} 
            onChange={handleChange}
            placeholder="email"
            className="border border-black py-2 mb-2"
        />

        <label htmlFor="username">username</label>
        <input 
            type="username" 
            name="username" 
            value={signupInfo.username} 
            onChange={handleChange}
            placeholder="username"
            className="border border-black py-2 mb-2"
        />

        <label htmlFor="password">password</label>
        <input type="password" 
            name="password" 
            value={signupInfo.password} 
            onChange={handleChange}
            placeholder="password"
            className="border border-black py-2 mb-2"
        />
        <button 
        type="submit" 
        className="p-2 m-2 border-1 border-2 border-black rounded-full hover:bg-blue-600 hover:text-white"
        >
        sign up
        </button>
    </form>

  )
}

export default SignupForm;