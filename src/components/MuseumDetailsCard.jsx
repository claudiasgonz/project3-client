import { useContext, useState } from "react";
import { MuseumContext } from "../context/museum.context";
import { AuthContext } from "../context/auth.context";
import EditMuseumForm from "./EditMuseumForm";

function MuseumDetailsCard({ museum }) {
  
  const [toggleEdit, setToggleEdit] = useState(false);
  const {deleteMuseum} = useContext(MuseumContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="center flex-col border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono">

   <h1 className="font-mono text-center py-10 font-bold text-5xl">details</h1>
    <img 
        className="rounded-xl object-cover w-full h-64 p-5" 
        src={museum.image} 
        alt="museum image">
    </img>

    <div className="flex flex-col justify-between leading-normal font-mono">
       <p className="font-bold border-b-2 border-black p-5 text-3xl text-right">
       {museum.name}
       </p>

       <p className="p-5">
       location <br></br>
       </p>
        <p className="font-mono text-right p-10 font-bold text-2 border-b-2 border-black">
       {museum.location}
       </p>

       <p className="p-5">
       description <br></br>
       </p>
        <p className="font-mono text-right p-10 font-bold text-2 border-b-2 border-black">
       {museum.description}
       </p>

       <p className="p-5">
       art type <br></br>
       </p>
        <p className="font-mono text-right p-10 font-bold text-2 border-b-2 border-black">
       {museum.artType}
       </p>

       <p className="p-5">
       website<br></br>
       </p>
        <p className="font-mono text-right p-10 font-bold text-2">
       {museum.website}
       </p>
       </div>

      {user && user.isAdmin && (
      <div className="p-5">
        <button 
        className="btn" 
        onClick={() => setToggleEdit(prev => !prev)}>
        edit
        </button>

        <button 
        className="btn hover:bg-red-600" 
        onClick={() => deleteMuseum(museum._id)}>
        delete
        </button>
      </div>
    )}

      {toggleEdit && (<EditMuseumForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}

      <h1 className="font-mono font-bold text-5xl py-10 ">
      reviews
      </h1>

        {/* <button 
        className="btn" 
        onClick={() => setToggleAddReview(prev => !prev)}>
        +
        </button> */}
   </div>
   
  );
}


export default MuseumDetailsCard;
