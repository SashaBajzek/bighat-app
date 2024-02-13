import "./SubmitDAGForm.css";
import { useCallback, useState } from "react";

function SubmitDAGForm({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [DAGText, setDAGText] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      try {
        onSubmit(DAGText);
        // Clear values if successful
        setDAGText("");
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Error: Invalid JSON");
      }
    },
    [onSubmit, DAGText],
  );

  console.log("submit errorMessage", errorMessage);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dag-input">DAG in JSON format:</label>
      <textarea
        aria-describedby={"error"}
        id="dag-input"
        onChange={(e) => setDAGText(e.target.value)}
        rows={2}
        type="text"
        value={DAGText}
      />
      <div id="error">{errorMessage}</div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitDAGForm;
