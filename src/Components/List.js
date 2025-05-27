import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function List() {
    const [students, setStudents]= useState([])
    useEffect(
      ()=>{    
        axios.get("http://dummyjson.com/users")
        .then(res=>setStudents(res.data.users))
      },[])
  return (
    <>
    <div className='col-md-10 content'>
      <h1>List</h1>
       <table border="1" className='tablemy'>
        <tr><th>id</th>
           <th>name</th>
           <th>email</th>
           <th>phone</th>
        </tr>
      {
        students.map((e,i)=>(
            <>
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
             <td>{e.email}</td>
             <td>{e.phone}</td>
            </tr>
            </>
        ))
      }
      </table>
     </div>
    </>
  )
}