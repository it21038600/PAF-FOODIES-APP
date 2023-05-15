import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserById } from "../../app/actions/user.actions";
import storage from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user?.user?.username);
  const [email, setEmail] = useState(user?.user?.email);
  const [contactNumber, setContactNumber] = useState(user?.user?.contactNumber);
  const [country, setCountry] = useState(user?.user?.country);
  const [profileImage, setProfileImage] = useState(
    user?.user?.profileImage ? user.user.profileImage : null
  );

  useEffect(() => {
    dispatch(getUser(user.userId));
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3 text-center">
                {profileImage && (
                  <img
                    src={profileImage}
                    className="img-fluid me-3 profile-image"
                    alt="Profile"
                  />
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  value={contactNumber}
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter your country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
