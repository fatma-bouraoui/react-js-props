
import { useState } from 'react';
import './App.css';
import { ProfileComponent } from './profile/ProfileComponent';




function App() {
const [person, setperson] = useState({
  name:"fatma",
  image:"https://static.vecteezy.com/system/resources/thumbnails/000/229/542/small/young-caucasian-woman-as-female-developer-profession.jpg"
})

const change=()=>{
  setperson({...person,name:"ala",image:"https://previews.123rf.com/images/antoniodiaz/antoniodiaz1910/antoniodiaz191000037/131073736-handsome-young-male-software-developer-programming-codes-while-working-from-home.jpg"})
}

  return (
    <div className="App">
   <ProfileComponent person={person}/>
   <button onClick={change}>click to update</button>
 
    </div>
  );
}

export default App;
