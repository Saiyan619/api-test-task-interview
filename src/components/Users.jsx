import React from 'react'
import { useState,useEffect } from 'react'
import { getUsers } from '../api_services/apiRoute'
import UserCard from './UserCard'


const Users = () => {
  const [allUsers, setallUsers] = useState([]);
  const [useSkeleton, setUseSkeleton] = useState(false)

  useEffect(() => {
    getAllUsers()
  }, [])
  


  const getAllUsers = async () => {
    setUseSkeleton(true)
    try {
      const data = await getUsers()
      if (data) {
        console.log(data)
        setallUsers(data)
      }
      setUseSkeleton(false)

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className='mx-auto flex flex-col p-5'>
      
     <h1 className='text-2xl md:ml-40'>Users List</h1>
      <div className='flex flex-wrap mt-5 gap-3 justify-center'>
     
      {allUsers?.map((user) => {
        return (
          <UserCard key={user.id} user={user} useSkeleton={useSkeleton} />
        )
      })}
        </div>
    </div>
  )
}

export default Users
