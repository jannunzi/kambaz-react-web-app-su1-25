// import TodoItem from "./TodoItem";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  return (
    <>
      <h3>Todo List</h3>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <ul className="list-group">
        {todos.map((todo) => {
          //   return <pre>{JSON.stringify(todo)}</pre>;
          return <TodoItem todo={todo} />;
        })}
      </ul>
      <hr />
    </>
  );
};
export default TodoList;
