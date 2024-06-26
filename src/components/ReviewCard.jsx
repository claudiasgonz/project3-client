import { useContext } from "react"
import api from "../services/api"
import toast from "react-hot-toast"
import { MuseumContext } from "../context/museum.context";


function ReviewCard({ review, user }) {
    const {getAllMuseums} = useContext(MuseumContext);

    const handleDelete = async (reviewId) => {
        try {
            const confirmReviewDelete = confirm("Are you sure you want to delete this review?")
            if(confirmReviewDelete){
                const response = await api.delete("/review/" + reviewId)

            if(response.status === 200){
                toast.custom((t) => (
                    <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-mono ${t.visible ? 'animate-enter' : 'animate-leave'}`} style={{ transition: 'all 0.3s ease' }}>
                        <p className="font-bold">review deleted successfully.</p>
                    </div>
                ));
                getAllMuseums(); 
            }
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="center flex-col border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono">
    
        <div className="font-mono">

        
        <p className="font-mono text-left px-5 pt-5 font-bold text-2 border-b-0 border-black">
       {review.title}
       </p>

       <p className="font-mono text-right px-5 text-2 border-b-0 border-black">
       {review.rating}★
       </p>

       <p className="font-mono text-left px-5 text-2 border-b-0 border-black">
        {review.creator.username}
       </p>

        <p className="font-mono text-right p-5 text-2 border-b-0 border-black">
       {review.review}
       </p>

       <p className="font-mono text-right p-5 text-2 border-b-0 border-black">
            {new Date(review.createdAt).toLocaleString("en-US", {
               year: "numeric",
               month: "numeric",
               day: "numeric", 
            })}
       </p>

       {user && user._id === review.creator._id && 
        <div className="flex justify-end p-5">
            <button 
            className="btn" 
            onClick={() => handleDelete(review._id)}>
            delete
            </button>
        </div>
        }
        </div>
    </div>
  )
}

export default ReviewCard