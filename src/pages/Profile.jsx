import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import ProfileCard from "../components/ProfileCard";
import ReviewCard from "../components/ReviewCard";

function Profile() {
  const { userId } = useParams();
  console.log("this is the id from params", userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get(`/user/${userId}`);
        console.log("This is the response ===>", response.data);
        setUser(response.data);
      } catch (error) {
        console.log("Error getting user data", error);
      }
    };

    if (userId) {
      getUserData();
    }
  }, [userId]);

  if (!user) {
    return (
      <div>
        You are not authorized to view this page.
        <Link to="/login">Please log in.</Link>
      </div>
    );
  }

  return (
    <div>
      <ProfileCard
        username={user.username}
        email={user.email}
        profilePic={user.profilePic}
        _id={user._id}
      />
      {user.reviews.map((review) => (
        <div
          className="center flex-col border-2 border-t-0 mb-0 ml-2 mr-2 border-black font-mono"
          key={review.id} >
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
