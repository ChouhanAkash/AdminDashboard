import React, { useState } from "react";

const ProfileForm = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, photoURL });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        placeholder="Profile Picture URL"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
