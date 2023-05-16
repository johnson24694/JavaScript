import './App.css';
import React, { useState } from 'react';


function App() {

  const [ toDo, setOneToDo] = useState("");
  const [ toDoList, setToDoList ] = useState([]);

  const handleGoals = (e) => { e.preventDefault();
    
    if (toDo.length === 0) {
      return;
    }

    const toDoItem = {
      text: toDo,
      complete: false
    }
    
    setToDoList([...toDoList, toDoItem ]);
    setOneToDo("");

}
  const handleDelete = (delIdx) => {
      const filterToDo = toDoList.filter((toDo, index) => {
        return index !== delIdx;
      });

      setToDoList(filterToDo);
  }

  const handleToggleComplete = (idx) => {
    const updatedToDos = toDoList.map((item, index) => {
      if (idx === index) {
        item.complete = ! item.complete;
      }

      return item;
    });
    setToDoList(updatedToDos)
  }

  return (
    <div className="App">
      <form onSubmit={ handleGoals }>
        <div> 
              <input type="text" value={ toDo } onChange={ (e) => setOneToDo(e.target.value) } />
        </div>
        <div>
        <button>Add</button>
        </div>

        <div>
          
                {toDoList.map((item, index) => {
                  
                    const toDoClasses = ["bold", "italic"];

                    if (item.complete) {
                      toDoClasses.push("strike");
                    }
                    return (
                    <div key={index}>
                      <input onChange={(e) => {
                        handleToggleComplete(index);
                      }}
                      checked={item.complete} type="checkbox" />
                      <span className={toDoClasses.join(" ")}>{ item.text }</span>
                      <button onClick={(e) => {handleDelete(index);}} style={{ marginLeft: "10px"}}> 
                      Delete</button>
                    </div>                
                  )
                    }
                  )}  
                  
                    
          </div>
                
      </form>
     
    </div>
              
  )
}  


export default App;
