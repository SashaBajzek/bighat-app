import "./SubmitDAGForm.css";
import { useState } from "react";

const defaultExample =
  '{"A": {"start": true, "edges": {"B": 5,"C": 7}}, "B": {"edges": {"D": 3}}, "C": {"edges": {"D": 3}}, "D": {"edges": {}}}';

function SubmitDAGForm({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [DAGText, setDAGText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      onSubmit(DAGText);
      // Clear values if successful
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error: Invalid JSON");
    }
  };

  const useDefaultExample = (e) => {
    e.preventDefault();
    setDAGText(defaultExample);
    onSubmit(defaultExample);
    setErrorMessage("");
  };

  return (
    <form className="SubmitDAGForm" onSubmit={handleSubmit}>
      <h1>Choose your Workflow</h1>
      <button onClick={useDefaultExample}>Use the default</button>
      <div className="divider">or</div>
      <label htmlFor="dag-input">Enter your own DAG in JSON format:</label>
      <textarea
        aria-describedby={"error"}
        className={errorMessage && "error"}
        id="dag-input"
        onChange={(e) => setDAGText(e.target.value)}
        rows={10}
        type="text"
        value={DAGText}
      />
      <div className="error-message" id="error">
        {errorMessage}
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SubmitDAGForm;
