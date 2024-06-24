import { Link } from "react-router-dom"


function Footer() {
  return (
    <div className="p-10 border-2 border-t-0 mb-2 ml-2 mr-2 border-black font-mono">
    
    <Link to="https://github.com/claudiasgonz/project3-client">
      <h1 className="text-right hover:text-blue-600">github repo</h1>
    </Link>
    </div>
  )
}

export default Footer;