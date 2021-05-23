
import './App.css';
import Profile from './profile/profile'
import eng from "./engineer.jpg"



function App() {
  const handleName = name => alert(name);
  return (
    <div className="App"> 
      
    <Profile fullName='Mohamed Habib Boughanmi' bio='Experienced, organized Engineer with a background in project management as well as training in Web development.' profession="Mechatronics engineer" handleName={handleName}><img src={eng} alt="Picture"/></Profile>
    <br/>
    
    </div>
  );
  
}

export default App;
