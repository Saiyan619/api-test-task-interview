import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getTaskByUserId, getUserById } from '../api_services/apiRoute'
import Todos from '../components/Todos'
import { ArrowLeft } from 'lucide-react'
import UserDetailsCard from '../components/UserDetailsCard'


const UserDetails = () => {
    const { userId } = useParams()
    const [userDetails, setUserDetails] = useState({})
    const [userTodos, setuserTodos] = useState([])
    const [useSkeletonDetails, setuseSkeletonDetails] = useState(false)


    useEffect(() => {
        getUserDetails(userId)
        getTasks(userId)
    }, [])
    

    const getTasks = async (id) => { 
        setuseSkeletonDetails(true)
        try {
            const data = await getTaskByUserId(id)
            console.log(data)
            if (data) {
                console.log(data)
                setuserTodos(data)
            } 
            setuseSkeletonDetails(false)

        } catch (error) {
            console.error(error)
        }
    }

    const getUserDetails = async (id) => {
        setuseSkeletonDetails(true)
        try {
            const data = await getUserById(id)
            if (data) {
                console.log(data)
                setUserDetails(data)
            }
            setuseSkeletonDetails(false)
        } catch (error) {
            console.error(error)
        }
    }

  
    return (
  
        <div className='p-5'>

           
            <div className='flex justify-center flex-col items-start'>
                <Link to={`/`}>
                <div className='cursor-pointer hover:scale-150 transition'>
                <ArrowLeft />
                    </div>
                </Link>
                
                {useSkeletonDetails ?
  (<div className='flex justify-center items-center md:flex-row  flex-col gap-5 mt-10'>
                    <div className="skeleton h-80 w-80"></div> 
                        <div className="skeleton h-80 w-80"></div> 
                        </div>
                        )

                    :
                    (     <div className='flex justify-center items-start md:flex-row  flex-col gap-5 mt-10'>
                
                        <UserDetailsCard userDetails={userDetails} />

                       {/* <div className="skeleton h-80 w-80"></div>  */}
                        
                        
                            <div className='border md:w-1/3 lg:w-full p-5 rounded-md' >
                            <h2>User Todos</h2>
                        {userTodos?.map((todo) => {
                            return (
                                <Todos key={todo.id} todo={todo} />
                            )
                        }
                        )}
                    </div>
                        
               
            </div>)
                }
   
            </div>
            </div>
  )
}

export default UserDetails

