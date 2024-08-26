import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {//here children is like Outlet , as it can be access
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    
    )
}

export default UserContextProvider