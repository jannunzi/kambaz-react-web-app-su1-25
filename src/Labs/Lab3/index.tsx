import { useSelector } from "react-redux";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import TemplateLiterals from "./TemplateLiterals";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div>
      <h2>Lab 3</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.title} ({todo.id})
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <FunctionDestructing />
      <Destructing />
      <Spreading />
      <TodoList />
      <House />
      <MapFunction />
      <AddingAndRemovingToFromArrays />
      <SimpleArrays />
      <TemplateLiterals />
      <ArrowFunctions />
      <LegacyFunctions />
      <ConditionalOutputInline />
      <ConditionalOutputIfElse />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}
