import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";

function App() {
  
  const [toDos, setToDos] = useState(["Do Dishes", "Do laundry"]);
  const [newToDo, setNewToDo] = useState("");

  function addToDo() {

    setToDos([newToDo, ...toDos]);

  };
 
  function deleteToDo(item) {
     console.log(item);

    const newList = toDos.filter((todo) => {
      if(todo === item) {
        return false;
      } else {
        return true;
      }
    });

    setToDos(newList);

  };

  return (

    <div className="App">

      {toDos.map((toDo, index) => 
        (
        <div 
          key={index}
          onClick={() => deleteToDo(toDo)}>
            {toDo}
          </div>
          )
        )}

      <form>
        <input type="text" value={newToDo} onChange={(event)=> setNewToDo(event.target.value)}></input>

        <button onSubmit={(event)=> {
          event.preventDefault();
          addToDo(event)
        }}>Add To Do</button>
        
      </form>
      
    </div>
  );
}

export default App;
