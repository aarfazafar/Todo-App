export function Todos({todos}) {
  console.log(todos);
  const todoFunc = function (todo) {  
    return <div>
      <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
        <button>
          {todo.completed == true ? "Completed" : "Mark as completed"}
        </button>
    </div>
  }
  return <div>
    {todos.map((todo)=>todoFunc(todo))}
  </div>
}
