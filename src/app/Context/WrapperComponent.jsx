"use client"

import { createContext } from "react"


export const WrapperContext = createContext()
const WrapperComponent = ({children}) => {
    const Tabname = ["Projects", "Reseme", "academic Record", "Contact me"];
  return (
    <WrapperContext.Provider value={{Tabname}}>
        {children}

    </WrapperContext.Provider>
  )
}

export default WrapperComponent