import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const U = props.fullName;
  return (
    <div>
      <h1 style={{ color: "blue" }}>{props.fullName}</h1>
      <h2 style={{ color: "violet" }}>{props.bio}</h2>
      <h2>{props.profession}</h2>
      <div>{props.children}</div>
      <br/>
      <button style={{ border: "none" }} onClick={() => props.handleName(U)}>
        Username
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Username is missing",
  bio: "bio is missing",
  profession: "Profession is missing",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
