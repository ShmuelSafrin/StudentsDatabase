
import { useEffect, useState } from "react";
import axios from 'axios'

import { useHistory, useParams } from 'react-router-dom'


function UpdateStudentComp(props) {

  const history = useHistory();
  const [student, setStudent] = useState({name :'', faculty : '', grades : []})

  // props.match.params.id

  const {id} = useParams()

  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/students/" + id);
    setStudent(resp.data)
  },[])

 
  const update = async () =>
  {
    let resp = await axios.put("http://localhost:8000/api/students/" + id, student);
    alert(resp.data);
    history.push("/")
  }

  const deleteStudent = async () =>
  {
    let resp = await axios.delete("http://localhost:8000/api/students/" + id);
    alert(resp.data);
    history.push("/")
  }
  
  return (
 

    <div className="App">
        <h3>Update Student</h3>

        Name <input type="text" value={student.name} onChange={e => setStudent({...student, name : e.target.value} ) }/><br/>
        Faculty <input type="text" value={student.faculty} onChange={e => setStudent({...student, faculty : e.target.value} ) }/><br/>
       

        
        <br/>
        
      <br/>
        <input type="button" value="Update" onClick={update} />
        <input type="button" value="Delete" onClick={deleteStudent} />
       
    </div>
  );
}

export default UpdateStudentComp;