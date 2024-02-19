import React, { createContext, useState } from 'react'


export const AuthContextProvider = createContext()


export default function AuthContextPProvider({children}) {

const [token , setToken] = useState(null)




  return <AuthContextProvider.Provider value={{token , setToken}}>

    {children}
  </AuthContextProvider.Provider>
}
