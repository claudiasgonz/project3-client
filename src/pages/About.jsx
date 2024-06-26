import { Link } from "react-router-dom"

function About() {
  return (
    <div className="border-l-2 border-r-2 border-black mx-2">

    <h1 className="font-mono font-bold p-5 text-5xl border-b-2 border-black">about</h1>

{/* <div class="relative flex overflow-x-hidden font-mono font-bold border-b-2 border-black">
  <div class="py-12 animate-marquee whitespace-nowrap">
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
  </div>

  <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
    <span class="text-4xl mx-4">about</span>
  </div>
</div> */}

<p className="font-mono p-5"
      >Muse.io is a single-page application (SPA) built with React, enabling users to explore museums and their details. The app features user authentication with encrypted passwords, allowing users to create accounts, log in, add reviews to museums, and delete their reviews. <br></br>
      <br></br>
      Admins have the capability to manage museum entries by creating, editing, and deleting them. The backend, developed with ExpressJS, MongoDB, and Mongoose, provides a REST API with routes for CRUD actions across three database models: users, museums, and reviews. The app includes backend validation, centralized error handling, and is styled using Tailwind CSS. ♡
      </p>

      <div className="relative flex overflow-x-hidden font-mono font-bold border-b-2 border-t-2 border-black">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <Link to="https://github.com/claudiasgonz/project3-client" className="text-3xl mx-4 hover:text-blue-600">
            github repo: frontend react app
          </Link>
          <span className="text-4xl mx-4">♡</span>
          <Link to="https://github.com/claudiasgonz/project3-server" className="text-3xl mx-4 hover:text-blue-600">
            github repo: backend rest api
          </Link>
          <span className="text-4xl mx-4">♡</span>
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <Link to="https://github.com/claudiasgonz/project3-client" className="text-3xl mx-4 hover:text-blue-600">
            github repo: frontend react app
          </Link>
          <span className="text-4xl mx-4">♡</span>
          <Link to="https://github.com/claudiasgonz/project3-server" className="text-3xl mx-4 hover:text-blue-600">
            github repo: backend rest api
          </Link>
          <span className="text-4xl mx-4">♡</span>
        </div>
      </div>


      {/* <p className="font-mono p-5 text-right border-t-2 border-black border-l-0 border-r-0 hover:to-blue-600 hover:underline">
      <Link to="https://github.com/claudiasgonz/project3-client">
      ⤷ github repo: frontend react app
      </Link>
      </p>

      <p className="font-mono p-5 text-right border-b-2 border-t-0 border-black hover:to-blue-600 hover:underline">
      <Link to="https://github.com/claudiasgonz/project3-server">
      ⤷ github repo: backend rest api
      </Link>
      </p> */}
    </div>
  )
}

export default About