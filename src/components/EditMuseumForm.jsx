import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MuseumContext } from "../context/museum.context";


function EditMuseumForm({ toggleEdit, setToggleEdit }) {

    const [currMuseum, setCurrMuseum] = useState(null);
    const { museumId } = useParams();
    const { museums, updateMuseum } = useContext(MuseumContext);

    const handleChange = (e) => {
        setCurrMuseum((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        museums && setCurrMuseum(museums.find((museum) => museum._id === museumId));
    }, [toggleEdit]);

  return currMuseum && (
    <form 
    onSubmit={(e) => {
       e.preventDefault();
       updateMuseum(currMuseum, museumId, setToggleEdit);
    }}
    className="center flex-col border-t-2 ml-2 mr-2 border-black font-mono">

        <h1 className="font-mono text-center py-10 font-bold text-5xl">edit museum</h1>

        <label htmlFor="name">name</label>
        <input 
        type="text" 
        name="name"
        onChange={handleChange}
        value={currMuseum.name}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="location">location</label>
        <input  
        type="text" 
        name="location"
        onChange={handleChange}
        value={currMuseum.location}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="description">description</label>
        <input 
        type="text" 
        name="description"
        onChange={handleChange}
        value={currMuseum.description}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="artType">art type</label>
        <input 
        type="text" 
        name="artType"
        onChange={handleChange}
        value={currMuseum.artType}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="website">website</label>
        <input 
        type="text" 
        name="website"
        onChange={handleChange}
        value={currMuseum.website}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="image">image</label>
        <input 
        type="text" 
        name="image"
        onChange={handleChange}
        value={currMuseum.image}
        className="border border-black py-2 mb-2"
        /> 

        <button type="submit" className="btn m-5">
        submit edits
        </button>
    </form>
  )
};

export default EditMuseumForm;