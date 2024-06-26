import { Link } from "react-router-dom"

function MuseumCard({ 
    name, 
    location, 
    image, 
    artType,
    _id
}) {
  return (
    <div className="max-w-sm font-mono text-right p-5 font-bold text-2 border-b-2 border-b-black border-x-2 border-y-2 border-x-white border-y-white">
    
    <div>
            <img
                className="rounded h-60 w-30 object-cover" 
                src={image}
                alt="museum image" 
            />
        
        <div className="p-5">
            <a href="#">
                <h5 
                className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                {name}
                </h5>
            </a>

            <p className="mb-3 font-mono">
            {location}
            </p>
            <p className="mb-3 font-mono text-right">
            {artType}
            </p>

            <Link
            to={`/museums/${_id}`}
            className="btn font-mono items-center"
            >
                details
            </Link>
    </div>
</div>
</div>
  )};

export default MuseumCard;