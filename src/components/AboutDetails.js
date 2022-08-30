import React from 'react'
import {useParams} from "react-router-dom"

const AboutDetails = () => {
    let {id}= useParams()
    console.log(id)
  return (
    <>
        <h1>About Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum delectus voluptatibus optio harum pariatur cumque ratione, ad expedita voluptates architecto labore amet ipsa alias quia. Dolorem consequuntur, quia odit iusto unde ex, neque quo ipsum dolor expedita fuga alias ratione quod rem reiciendis? Eligendi eaque officiis aliquam id quaerat culpa.</p>
        <h2>{id}</h2>
        
    </>
  )
}

export default AboutDetails