import { useEffect, useState } from "react";
import axios from 'axios'
import StudentComp from "./Student";




function StudentsComp() {

const [students, setStudents] = useState([])
const [presentedStudents, setPresentedStudents] = useState([])


useEffect(async () =>
{
  let resp = await axios.get('http://localhost:8000/api/students')
  setStudents(resp.data)
  setPresentedStudents(resp.data)
}, [])

const search = (text) =>
{
  let arr = students
  setPresentedStudents(arr.filter(x => x.name.includes(text)))
}

  return (
    <div className="App" style ={{width : '100%', borderStyle : 'solid', borderColor : 'red', borderWidth : '3px'}}>
     <h2>Students</h2>

     Search By Name: <input type='text' onChange={e => search(e.target.value)}/>
     {
       presentedStudents.map(item =>
        {
          return <StudentComp key={item._id} studentData={item}/> 
        })
     }
    </div>
  );
}

export default StudentsComp;
