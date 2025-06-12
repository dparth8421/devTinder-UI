import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store) => store.connections)

    const fethConnections = async ()=>{
        try{
            const res = await axios.get(BASE_URL +"/user/connections",{withCredentials: true})
            dispatch(addConnections(res?.data?.data))

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fethConnections()
    },[])

    if(!connections) return
    if(connections.length === 0) return <div className='flex justify-center my-10'>No Connections Found</div>

  return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-white text-3xl'>Connections</h1>
        {connections.map((connection)=>{
            const {firstName, lastName, age, gender, photoUrl, about} = connection;
            return(
                <div className='flex m-4 p-4 rounded-lg bg-base-200 mx-auto'>
                    <div>
                    <img alt='photo' className='w-20 h-20 rounded-full' src={photoUrl}/>
                    </div>
                    <div className='text-left mx-4'>
                    <h2 className='font-bold text-xl'>{firstName +" " +lastName}</h2>
                    <p>{age + ", "+ gender}</p>
                    <p>{about}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Connections