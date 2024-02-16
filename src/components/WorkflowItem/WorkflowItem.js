import "./WorkflowItem.css";

function WorkflowItem({ id, text, time }) {
  return (
    <li className="WorkflowItem">
      <div className="value">{text}</div>
      <div>Elapsed Time: {time}s</div>
    </li>
  );
}

export default WorkflowItem;
