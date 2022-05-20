import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  } 

  function deleteItem(id) {
    setItems( (prevItems) => {
      return prevItems.filter((item, index) => {
        return (index !== id)
      })
    })
  }

  return (
    <div className="container">
      <Heading/>
      <InputArea addItem={addItem}/>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} handleClick={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;