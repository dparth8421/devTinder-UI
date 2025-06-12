import React from 'react'

const UserCard = ({user}) => {
    const {firstName,lastName, age,gender,about} = user 
    console.log(user)
  return (
    <div>
    <div className="card bg-base-300 w-96 shadow-sm">
    <figure>
      <img
        src={user.photoUrl}
        alt="photo" />
    </figure>
    <div className="card-body">
      <h2 className="card-title"> {firstName +" "+ lastName}</h2>
      <h2>{`${age}, ${gender}`}</h2>
      <p>{about}</p>
      <div className="card-actions justify-center my-10">
      <button className="btn btn-secondary">Interested</button>
        <button className="btn btn-primary">Ignore</button>

      </div>
    </div>
  </div></div>
  )
}

export default UserCard