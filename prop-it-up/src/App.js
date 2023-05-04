import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard 
          firstName={ "Bob" } 
          lastName={"Bobbers"}
          age={74}
          hairColor={"brown"}/>
        <PersonCard 
          firstName={ "Jane" }
          lastName={ "Doe" }
          age={36}
          hairColor={"blond"}/>
        <PersonCard 
          firstName={ "Greg" }
          lastName={"Peters"}
          age={25}
          hairColor={"purple"} />
        <PersonCard 
          firstName={ "Samantha" }
          lastName={"Gibbons"}
          age={18}
          hairColor={ "red" } />
    </div>
  );
}
export default App;



  
  