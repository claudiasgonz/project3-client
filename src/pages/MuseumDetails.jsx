import { useContext, useEffect, useState } from "react";
import { MuseumContext } from "../context/museum.context";
import { useParams } from "react-router-dom";
import MuseumDetailsCard from "../components/MuseumDetailsCard";


function MuseumDetails() {
    const [museum, setMuseum] = useState(null);
    const {museums} = useContext(MuseumContext);
    const {museumId} = useParams();

    useEffect(() => {
        museums && setMuseum(museums.find((curr) => curr._id === museumId));
    }, [museums]);

  return (
    <div className="center flex flex-col items-center">
    {museum ? <MuseumDetailsCard museum={museum} /> : <p>Loading...</p>}
    </div>
  );
}

export default MuseumDetails;