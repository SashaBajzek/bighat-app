import WorkflowItem from "../WorkflowItem/WorkflowItem";
import "./WorkflowList.css";

function WorkflowList({ nodes }) {
  return (
    <div className="WorkflowList">
      <h2>WorkFlow Visualization</h2>
      <ul>
        {nodes.map((node) => (
          <WorkflowItem key={node.id} text={node.text} time={node.time} />
        ))}
      </ul>
    </div>
  );
}

export default WorkflowList;
