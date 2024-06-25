import { useContext, useEffect, useState } from "react";
import { MuseumContext } from "../context/museum.context";
import { useParams } from "react-router-dom";
import MuseumDetailsCard from "../components/MuseumDetailsCard";


function MuseumDetails() {
    const [museum, setMusem] = useState(null);
    const {museums} = useContext(MuseumContext);
    const {museumId} = useParams();

    useEffect(() => {
        museums && setMuseum(museums.find((curr) => curr._id === museumId));
    }, [museums]);

  return (
    <div className="center flex flex-col items-center"> 
    <h2 className="font-mono font-bold text-5xl">details</h2>
    {museum ? <MuseumDetailsCard museum={museum} /> : <p>Loading...</p>}
    </div>
  );
}

export default MuseumDetails;