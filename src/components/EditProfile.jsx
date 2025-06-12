import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [errors, setErrors] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (err) {
      setErrors(err?.response?.data);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend my-4">Firstname</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input w-full"
                  placeholder="Type here"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <legend className="fieldset-legend my-4">Lastname</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input w-full"
                  placeholder="Type here"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <legend className="fieldset-legend my-4">PhotoUrl</legend>
                <input
                  type="text"
                  value={photoUrl}
                  className="input w-full"
                  placeholder="Type here"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
                <legend className="fieldset-legend my-4">Age</legend>
                <input
                  type="text"
                  value={age}
                  className="input w-full"
                  placeholder="Type here"
                  onChange={(e) => setAge(e.target.value)}
                />

                <div className="dropdown dropdown-start my-4 w-full">
                  <div tabIndex={0} role="button" className="btn m-1">
                    {" "}
                    {gender || "Select Gender"}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a onClick={() => setGender("male")}>Male</a>
                    </li>
                    <li>
                      <a onClick={() => setGender("female")}>Female</a>
                    </li>
                    <li>
                      <a onClick={() => setGender("other")}>Other</a>
                    </li>
                  </ul>
                </div>

                <fieldset className="fieldset ">
                  <legend className="fieldset-legend my-4">Your bio</legend>
                  <textarea
                    className="textarea h-24 w-full"
                    placeholder="Bio"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </fieldset>
              </fieldset>
            </div>
            {errors && <div className="text-red-500 my-2">{errors}</div>}
            <div className="card-actions justify-center">
              <button className="btn btn-primary my-3" onClick={handleSave}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={user} />
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span> Profile saved successfully!!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
