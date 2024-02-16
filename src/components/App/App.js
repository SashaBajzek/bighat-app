import SubmitDAGForm from "../SubmitDAGForm/SubmitDAGForm";
import WorkflowList from "../WorkflowList/WorkflowList";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useRunner } from "../../utils/useRunner";

function App() {
  const [nodes, setCompletedNodes] = useState([]);
  const nodesRef = useRef([]); // Needed for the callback to have the latest value
  const run = useRunner();

  const onSubmit = (DAGText) => {
    // Clear old nodes
    setCompletedNodes([]);
    nodesRef.current = [];
    // Run new nodes based on inputted JSON
    run(DAGText, printValue);
  };

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  // Printing function
  const printValue = (string, startTime) => {
    const printTime = performance.now();
    const difference = Math.floor((printTime - startTime) / 1000);
    console.log(`${string}, Elapsed Time: ${difference}s`);
    setCompletedNodes([
      ...nodesRef.current,
      { id: printTime + string, time: difference, text: string },
    ]);
  };

  return (
    <div className="App">
      <header>DAG Workflow Runner</header>
      <main>
        <div className="main-layout">
          <SubmitDAGForm onSubmit={onSubmit} />
          <WorkflowList nodes={nodes} />
        </div>
      </main>
    </div>
  );
}

export default App;
