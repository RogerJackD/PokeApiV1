import React, { useEffect, useState } from 'react'
export const Message = () => {

    const [coords, setCoords] = useState()

    useEffect(() =>{
        console.log("message mounted")

        const muoseCoords = ({x,y}) =>{
          setCoords({x,y})
        } 

        window.addEventListener('mousemove', muoseCoords)

      
        return () => {
          window.removeEventListener('mousemove', muoseCoords)
        }
    });

  return (
    <>
        <h3>Usuario ya existe</h3>

        {
          JSON.stringify(coords)
        }

    </>
  )
}
