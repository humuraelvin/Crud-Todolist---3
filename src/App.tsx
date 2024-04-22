import { FaClipboardList, FaPen } from "react-icons/fa"
import TodoList from "./components/TodoList"
import './css/App.css'
import './css/TodoForm.css'
import './css/TodoList.css'

function App() {
 

  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>What To Do</h1>
          <FaClipboardList />
        </div>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App
