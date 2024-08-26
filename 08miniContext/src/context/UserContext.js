import React from 'react'

const UserContext = React.createContext()

export default UserContext; // step1=>we make variable and then this is the output,Usercontext is provider

//we will  raap components like Login in Global UserContext .then this will become provider,all components which is inside provider will get access of Global UserContext

