import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
function Mayshowheader ({children}) {
  const location = useLocation();

    const [showHeader,setShowHeader]= useState(false)

    useEffect(()=>{
      if(location.pathname==='/login'||location.pathname==='/signup'){
        setShowHeader(false)
      }else{
        setShowHeader(true)
      }
    },[location])
  return (
    <div>
      {showHeader && children}
    </div>
  )
}

export default Mayshowheader
