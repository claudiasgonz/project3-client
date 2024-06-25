import { useContext, useState } from "react"
import { MuseumContext } from "../context/museum.context"


function CreateMuseumForm() {
    const [museumInfo, setMuseumInfo] = useState({
        name: "",
        location: "",
        description: "",
        artType: "",
        website: "",
        image: ""
    });
    const { createMuseum }= useContext(MuseumContext);
    const handleChange = (e) => {
        setMuseumInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    };

  return (
    <form 
    onSubmit={(e) => {
       e.preventDefault();
       createMuseum(museumInfo);
    }}
    className="center flex-col p-10 border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono">
        <h1 className="font-mono text-center py-10 font-bold text-5xl">create a museum</h1>

        <label htmlFor="name">name</label>
        <input 
        type="text" 
        name="name"
        onChange={handleChange}
        value={museumInfo.name}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="location">location</label>
        <input  
        type="text" 
        name="location"
        onChange={handleChange}
        value={museumInfo.location}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="description">description</label>
        <input 
        type="text" 
        name="description"
        onChange={handleChange}
        value={museumInfo.description}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="artType">art type</label>
        <input 
        type="text" 
        name="artType"
        onChange={handleChange}
        value={museumInfo.artType}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="website">website</label>
        <input 
        type="text" 
        name="website"
        onChange={handleChange}
        value={museumInfo.website}
        className="border border-black py-2 mb-2"
        /> 

        <label htmlFor="image">image</label>
        <input 
        type="text" 
        name="image"
        onChange={handleChange}
        value={museumInfo.image}
        className="border border-black py-2 mb-2"
        /> 

        <button type="submit" className="btn">
        create museum
        </button>
    </form>
  );
}

export default CreateMuseumForm;