import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
//if we want to fetch values from UserContext then it is helped by useContext

function Profile() {

    const {user} =  useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>

    
    
}
export default Profile