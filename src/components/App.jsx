import React, { useState } from "react";

//main function being rendered
function App() {

//using useState hook to save the state of the input 
const [note, setNote] = useState();

//changing state of the input
function addText(event) {
  const noteNewValue = event.target.value;
  setNote(noteNewValue);
}

//using useState hook to change state of the array which adds items added in the input 
const [entry, addEntry] = useState([]);

function addItem(){
  addEntry((prevValue)=>{
    return [...prevValue, note]
  });
  //erasing the added item from the input box
  setNote("");
}

  
  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">

      {/* calling addText function on input change and setting value to make sure it matches the name we gave it in the useState function   */}
        <input type="text" name="note" onChange= { addText } value={ note }/>
      
      {/* calling the addItem function on button click */}
        <button onClick={ addItem }>
          <span>Add</span>
        </button>

      </div>
      <div>
        <ul>
      {/* mapping through the array of items added from the input  */}
          { entry.map(entry=> <li> {entry} </li>) } 
        </ul>
      </div>  
    </div>
  );
}

export default App;
