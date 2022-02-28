import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import StudentsComp from './Students';
import AddStudentComp from './AddStudent';
import UpdateStudentComp from './UpdateStudent';

function App() {
  return (
    <div className="App">
     <h1>Welcome To Our Students Website</h1>

    <Link to='/add'>Create Student</Link> &nbsp;
    <Link to='/'>Back To List</Link><br/>

     <Switch>
       <Route exact path='/'>
            <StudentsComp/>
       </Route>
       <Route path='/add'>
            <AddStudentComp/>
       </Route>
       <Route path='/update/:id'>
            <UpdateStudentComp/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
