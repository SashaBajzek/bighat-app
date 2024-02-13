import SubmitDAGForm from "../SubmitDAGForm/SubmitDAGForm";
import WorkflowList from "../WorkflowList/WorkflowList";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { runSequence } from "../../utils/runner";

// TODO!!!!! clear the setTimeout, otherwise when you run a new DAG, you'll have old one running too
// Todo:  pass the errors
// Todo:  mobile

const emailExample =
  '{"A": {"start": true, "edges": {"B": 5,"C": 7}}, "B": {"edges": {"D": 3}}, "C": {"edges": {"D": 3}}, "D": {"edges": {}}}';

function App() {
  const [nodes, setCompletedNodes] = useState([]);
  const nodesRef = useRef([]); // Needed for the callback to have the latest value

  const onSubmit = (DAGText) => {
    // Clear old nodes
    setCompletedNodes([]);
    // Run new nodes based on inputted JSON
    runSequence(DAGText, printValue);
  };

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  // Printing function
  const printValue = (string, startTime) => {
    const printTime = new Date().getSeconds();
    const difference = printTime - startTime;
    console.log(`${string}, Elapsed Time: ${difference}s`);
    setCompletedNodes([
      ...nodesRef.current,
      { id: printTime + string, time: difference, text: string },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">DAG Workflow Runner</header>

      <SubmitDAGForm onSubmit={onSubmit} />

      <WorkflowList nodes={nodes} />
    </div>
  );
}

export default App;
