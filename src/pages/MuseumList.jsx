import { useContext } from "react"
import api from "../services/api.js"
import { MuseumContext } from "../context/museum.context.jsx"
import MuseumCard from "../components/MuseumCard.jsx";

function MuseumList() {
  const {museums} = useContext(MuseumContext);

  return (
    <div>
      <div className="center flex-col p-10 border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono font-bold text-5xl">
      museums
      </div>

        <div className="center gap-4 p-5 flex-wrap border-l-2 border-r-2 border-b-2 border-black mx-2">
        {museums ? (
          museums.map((museum) => <MuseumCard {...museum} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </div>
  );
}

export default MuseumList;