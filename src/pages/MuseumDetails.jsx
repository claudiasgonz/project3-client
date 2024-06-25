import { useContext, useEffect, useState } from "react";
import { MuseumContext } from "../context/museum.context";
import { useParams } from "react-router-dom";
import MuseumDetailsCard from "../components/MuseumDetailsCard";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";


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
    
    <ReviewForm />
    {museum && museum.reviews.length ? museum.reviews.map(review => <ReviewCard review={review}/>
    ) : ( 
      <p className="font-mono">
      No reviews yet.
      </p>
      )}
    </div>
  );
}

export default MuseumDetails;