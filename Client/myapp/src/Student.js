import {useHistory} from 'react-router-dom'

function StudentComp(props) {

  const history = useHistory();

  return (
    <div>
    <div className="App" style ={{width : '300px', borderStyle : 'solid', borderColor : 'blue', borderWidth : '3px'}}>
      <h4>Student Data</h4>
  
          Name: {props.studentData.name}<br/>
          Faculty: {props.studentData.faculty}<br/>

          <table border='1'>
              <tr><th>Profession</th><th>Score</th></tr>
              {
                  props.studentData.grades.map((item, index) =>
                  {
                      return <tr key={index}>
                        <td>{item.profession}</td>
                        <td>{item.score}</td>
                      </tr>
                  })
              }  
          </table>
          <input type='button' value='Edit' onClick={() => history.push('/update/' + props.studentData._id)}/>
    </div>
    <br/>
    </div>
  );
}

export default StudentComp;
