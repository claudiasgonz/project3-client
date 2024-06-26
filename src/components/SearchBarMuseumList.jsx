import Select from "react-select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SearchBarMuseumList() {
  const [museumList, setMuseumList] = useState([]);
  const navigate = useNavigate ();

   function handleSelect(option) {
    console.log("Selected option:", option); 
    navigate(`/museums/${option.value}`);
   };

  
  useEffect(() => {
    const getMuseumListToSearch = async () => {
      try {
        const response = await api.get("/museum/all");

        console.log("museum list to search:", response.data); 
        setMuseumList(response.data);
      } catch (error) {
        console.error("Error fetching museum list:", error);
      }
    };
    getMuseumListToSearch();
  }, []);
  
  
  const options = museumList.map((current) => {
    return {
      value: current._id,
      label: `${current.name} (${current.location})`,
    };
  });


  return (
    <div className="font-mono">
      <Select 
        options={options}
        onChange={handleSelect}
        placeholder="search for a museum by name or location"
      />
    </div>
  )
}

export default SearchBarMuseumList;