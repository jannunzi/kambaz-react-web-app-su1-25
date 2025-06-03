import BooleanVariables from "../Lab3/BooleanVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import Counter from "./Counter";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Lab 4</h2>
      <ReduxExamples />
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <PassingFunctions theFunction={sayHello} />
    </div>
  );
}
