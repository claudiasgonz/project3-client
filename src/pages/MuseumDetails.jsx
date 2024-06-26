import { useContext, useEffect, useState } from "react";
import { MuseumContext } from "../context/museum.context";
import { useParams } from "react-router-dom";
import MuseumDetailsCard from "../components/MuseumDetailsCard";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function MuseumDetails() {
    const [museum, setMuseum] = useState(null);
    const [toggleReviewForm, setToggleReviewForm] = useState(false);
    const {museums} = useContext(MuseumContext);
    const {museumId} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        museums && setMuseum(museums.find((curr) => curr._id === museumId));
    }, [museums]);

  return (
    <div>
    {museum ? <MuseumDetailsCard museum={museum} /> : <p>Loading...</p>}
    
    {!user || user.isAdmin ? (
        <p className="font-mono font-bold p-5 border-x-2 mx-2 border-b-2 border-black center">
          <Link to="/login" className="btn">log in to review</Link>
        </p>
      ) : (
        <div className="p-5 border-b-2 border-x-2 border-black mx-2 font-mono">
          <button 
            className="btn" 
            onClick={() => setToggleReviewForm((prev) => !prev)}
          >
            {toggleReviewForm ? "x" : "+ add a review"}
          </button>
          {toggleReviewForm && <ReviewForm />}
        </div>
      )}

      {museum && museum.reviews.length ? (
        museum.reviews.map((review) => (
          <ReviewCard key={review._id} review={review} user={user} />
        ))
      ) : (
        <p className="font-mono center border-black border-l-2 border-r-2 mx-2">no reviews yet. ☹ <br></br>be the first to leave a review ☺ </p>
      )}
    </div>
  );
}

export default MuseumDetails;