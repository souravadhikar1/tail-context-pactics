import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>This Home: {user && <span>{user.displayName}</span>}</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/12/19/247181.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/orders">
              <button className="btn btn-primary">Go Order</button>
            </Link>
            <Link to="/profile">
              <button className="btn btn-primary">Go Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
