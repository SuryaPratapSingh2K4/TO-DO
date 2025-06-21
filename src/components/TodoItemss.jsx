import React from "react";
import TodoItem from "./TodoItem";

function TodoItemss({ Items }) {
  return (
    <div>
      {Items.map((item) => (
        <TodoItem
          TodoName={item.name}
          TodoDate={item.date}
        />
      ))}
    </div>
  );
}

export default TodoItemss;
