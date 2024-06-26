import CreateMuseumForm from "../components/CreateMuseumForm"
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function CreateMuseumPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    user && user.isAdmin ? null : navigate("/");
  }, [user]);
  
  return (
    <div>
      <CreateMuseumForm />
    </div>
  );
}

export default CreateMuseumPage;