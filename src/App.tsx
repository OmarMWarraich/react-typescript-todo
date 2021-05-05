import React, {useState} from 'react';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
]
function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <ul>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    
    </ul>
  );
}

export default App;
