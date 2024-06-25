

function ReviewCard({ review }) {
  return (
    <div className="center flex-col border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono">
    
        <div className="font-mono">

        
        <p className="font-mono text-left p-5 font-bold text-2 border-b-0 border-black">
       {review.title}
       </p>

       <p className="font-mono text-right p-5 text-2 border-b-0 border-black">
       {review.rating}★
       </p>

       {/* <p className="font-mono text-right p-5 text-2 border-b-0 border-black">
       {review.creator.req.user._id}
       </p> */}

        <p className="font-mono text-right p-5 text-2 border-b-0 border-black">
       {review.review}
       </p>
        </div>
    </div>
  )
}

export default ReviewCard