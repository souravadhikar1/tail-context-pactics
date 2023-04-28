import React from "react";

const Profile = () => {
  return (
    <div className="mt-12 mx-auto">
      <progress
        className="progress progress-error w-56"
        value="0"
        max="100"
      ></progress>
      <progress
        className="progress progress-error w-56"
        value="10"
        max="100"
      ></progress>
      <progress
        className="progress progress-error w-56"
        value="40"
        max="100"
      ></progress>
      <progress
        className="progress progress-error w-56"
        value="70"
        max="100"
      ></progress>
      <progress
        className="progress progress-error w-56"
        value="100"
        max="100"
      ></progress>

      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Profile;
