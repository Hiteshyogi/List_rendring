import React, { useState } from 'react'

function Listing(props) {
    console.log(props)
    const [ count, Setcount ] = useState(0)

    function incHandler() {
        Setcount(count + 1)
    }

    function decHandler(){
        Setcount(count - 1)
    }
  return (
        <tr>
      <th scope="row">{props.num+1}</th>
      <td>
        <img width={70} src={props.image} alt="" />
      </td>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td className='d-flex gap-2' >
      <button onClick={incHandler} type="button" className="btn btn-success">+</button>
        <h1>{count}</h1>
        <button onClick={decHandler} type="button" className="btn btn-danger">-</button>
      </td>
      <td>${Number(count*props.price).toLocaleString()}</td>
    </tr>
  
  )
}

export default Listing;