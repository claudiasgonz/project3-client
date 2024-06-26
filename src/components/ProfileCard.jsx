
function ProfileCard({
    username,
    email,
    profilePic,
    reviews,
    _id
}) {

  return (
    <div className="center flex-col border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono">
    
        <div className="">
                <img
                className="rounded-3xl object-cover w-full h-64 p-5" 
                src={profilePic}
                alt={`profile image for ${username}`} 
                />
        
            <div className="leading-normal font-mono text-sm">
                <p className="text-right">
                profile<br></br>
                </p>

                <p className="font-mono text-right pb-3 font-bold text-4xl">
                {username}
                </p>

                <p className="font-mono text-right pb-5 text-2 border-b-2 border-black">
                {email}
                </p>

                <p className="font-mono text-left pt-10 pb-5 font-bold text-2 border-black text-3xl">my reviews</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard