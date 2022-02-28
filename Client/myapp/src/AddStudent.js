import axios from "axios";
import { useState } from "react";
import {useHistory} from 'react-router-dom'



function AddStudentComp() {

  const [student, setStudent] = useState({name : '', faculty : '', grades : []})
  const [grade, setGrade] = useState({profession : '', score : 0})
  const history = useHistory()

  const addStudent = async() =>
  {
      let resp = await axios.post('http://localhost:8000/api/students', student)
      alert(resp.data)
      history.push('/')
  }
  return (
    <div className="App">
      <h2>Create New Student</h2>
        Name: <input type='text' onChange={e => setStudent({...student, name : e.target.value})}/><br/>
        Faculty: <input type='text' onChange={e => setStudent({...student, faculty : e.target.value})}/><br/>
        Add Grade: <br/>
        Profession: <input type='text' onChange={e => setGrade({...grade, profession : e.target.value})}/><br/>
        Score: <input type='text' onChange={e => setGrade({...grade, score : e.target.value})}/><br/>

        <input type='button' value='Add' onClick={() => setStudent({...student, grades : [...student.grades, grade]})}/><br/>
        <ul>
        {
            student.grades.map((item, index) =>
            {
              return <li key={index}>{item.profession} : {item.score}</li>
            })
        }
        </ul>
        <input type='button' value='Save' onClick={addStudent}/>



    </div>
  );
}

export default AddStudentComp;
