import React, { useEffect } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addFeed } from '../utils/feedSlice'

const Feed = () => {
const feed = useSelector((store) => store.feed)
const dispatch = useDispatch()

const getFeed = async ()=>{
if(feed) return
try {
  const res = await axios.get(BASE_URL + "/feed", {
withCredentials: true
})
dispatch(addFeed(res?.data?.data))
}
catch (err) {
  console.error("Error fetching feed:", err);
}
}
useEffect(() => {
    getFeed();
},[])

  return (
   feed &&( 
   <div className='flex justify-center my-10'>
        <UserCard user={feed[0]}/>
    </div>)
  )
}

export default Feed