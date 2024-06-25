import { Link } from "react-router-dom"

function MuseumCard({ 
    name, 
    location, 
    image, 
    artType,
    _id
}) {
  return (
    <div className="center">

    <div>
            <img
                className="rounded w-30 h-60 object-cover" 
                src={image}
                alt="museum image" 
            />
        
        <div class="p-5">
            <a href="#">
                <h5 
                className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                {name}
                </h5>
            </a>

            <p class="mb-3 font-mono">
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