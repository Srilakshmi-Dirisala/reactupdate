import logo from './logo.svg';
import './App.css';
import Userdata from './components/Userdata';

function App() {
 const Userdata=[ 
  { id: 1, name: "Tania", email: "tania@abc.com", contact: 989898757,status:"Active" },
    { id: 2, name: "Craig", email: "craig@abc.com", contact: 999898757,status:"Inactive" },
    { id: 3, name: "Ben", email: "ben@abc.com", contact: 979898757,status:"Active" }

 ]


  return (
    <div>
       <UserTable users={users} />
       
    </div>
  );
}

export default App;
