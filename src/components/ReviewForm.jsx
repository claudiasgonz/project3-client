import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings"
import toast from "react-hot-toast";
import api from "../services/api";
import { MuseumContext } from "../context/museum.context";


function ReviewForm() {
    const [review, setReview] = useState({title:"", rating: 0, review: ""})
    const { museumId } = useParams();
    const { getAllMuseums } = useContext(MuseumContext);

    const handleChange = (e) => {
        setReview(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post("/review/" + museumId, review)

            if (response.status === 200 || response.status === 201){
                toast.custom((t) => (
                    <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-mono ${t.visible ? 'animate-enter' : 'animate-leave'}`} style={{ transition: 'all 0.3s ease' }}>
                        <p className="font-bold">review submitted successfully.</p>
                    </div>
                ));
                getAllMuseums();
                setReview({title:"", rating: 0, review: ""});
            }
        } catch (error) {
            console.log(error);
            toast.error("error creating review")
        }
    }

    useEffect(() => {
        console.log(review);
    }, [review]);

  return (
    <form 
    className="center flex-col font-mono font-bold p-10 border-b-2 border-black"
    onSubmit={handleSubmit}
    >

    <label htmlFor="title">title</label>
    <input 
    type="text" 
    name="title" 
    onChange={handleChange} 
    value={review.title}
    className="border border-black py-2 mb-2"
    />

    <label htmlFor="review">review</label>
    <input 
    type="text" 
    name="review"
    onChange={handleChange}
    value={review.review}
    className="border border-black py-2 mb-2"
    />

    <label htmlFor="rating">rating</label>
    <StarRatings 
    numberOfStars={5}
    changeRating={(rating) => setReview(prev => ({...prev, rating: rating}))
    }
    name="rating"
    rating={review.rating}
    isAggregateRating
    starRatedColor="black"
    starHoverColor="blue"
    starDimension='30px'
    />

    <button 
    type="submit" 
    className="btn p-5">
    submit review
    </button>
    </form>
  )
}

export default ReviewForm