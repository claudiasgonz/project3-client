import SearchBarHome from "../components/SearchBarHome";


function HomePage() {
  return (
    <div className="border-l-2 border-r-2 border-black mx-2">
      <h1 className="font-mono text-center py-10 font-bold text-5xl border-b-2 border-black">
      museo
      </h1>

      <SearchBarHome />

      <div>
        <h1 className="font-mono text-left p-10 font-bold text-2">
        create an account & <br></br>
        track your
        </h1>
        <h1 className="font-mono text-right p-10 font-bold text-2 border-b-2 border-black">
        favorite museums <br></br>
        museum visits <br></br>
        exhibitions seen
        </h1>
      </div>

      <div>
        <h1 className="font-mono text-left p-10 font-bold text-2">
        create & <br></br>
        curate
        </h1>
        <h1 className="font-mono text-right p-10 font-bold text-2 border-b-2 border-black">
         reviews<br></br>
         personal lists<br></br>
        </h1>
      </div>

    </div>
  )
}

export default HomePage;