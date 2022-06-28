import Calculator from './Pages/Calculator';
// import { API } from './Config/constants';
// import TodoBody from './Pages/TodoApp/TodoBody.js';
import { Route, Routes } from 'react-router-dom';
import Navigation from "./Pages/Navigation"
import "./App.css"
import Home  from './Pages/Home';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import UserCard from './Pages/UserCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<UserCard/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
     
     
      {/* <Navigation/>
      <Routes>
        <Route path="/"
        element={<TodoBody heading="TodoApp"/>} 
        />
        <Route path='/about'
        element={<Calculator heading="Calculator"/>}
        />
      </Routes> */}
    </div>
  );
}

export default App;
