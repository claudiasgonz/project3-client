import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between border-2 border-black m-2 mb-0">

      <div className="center gap-5 pt-5 pr-5 pb-5 pl-5 font-mono">

        <Link to="/">
          <h1 className="text-center font-mono text-xl">
          m
          </h1>
        </Link>
        <Link to="/about" className="links">
          about
        </Link>
        <Link to="/museums" className="links">
          browse museums
        </Link>
      </div>

        {user ? (
          <div className="center gap-5 p-5 font-mono">
            <button 
            className="btn">
            profile
            </button>
            <button 
            className="btn" 
            onClick={logout}>
            logout
            </button>
          </div>
        ) : (
          <div className="center gap-5 p-5 font-mono">
            <Link to="/login" className="links">login</Link>
          </div>
        )}

    </nav>
  )
}

export default Navbar