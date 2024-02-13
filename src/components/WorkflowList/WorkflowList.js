import WorkflowItem from "../WorkflowItem/WorkflowItem";

function WorkflowList({ nodes }) {
    return (
        <ul className="WorkflowList">
            {nodes.map(node => <WorkflowItem key={node.id}  text={node.text} time={node.time} />)}
        </ul>
    )
}

export default WorkflowList;