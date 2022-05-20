import React from "react";

const ToDoItem = (props) => {

  return (
    <li onClick={ () => props.handleClick(props.id) }>{ props.text }</li>
  )
}

export default ToDoItem