import "./WorkflowItem.css";

function WorkflowItem({ id, text, time }) {
  return (
    <li className="WorkflowItem">
      <div>{text}</div>
      <div>Elapsed Time: {time}</div>
    </li>
  );
}

export default WorkflowItem;
