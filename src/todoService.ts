import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  //GetTodos
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  //addTodos

  addTodos: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return newTodo;
  },

  //updatingTodos
  updateTodos: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();

    const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo;
  },

  //deletingTodo
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();

    const updateTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
  },
};

export default TodoService;
