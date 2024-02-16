import "./SubmitDAGForm.css";
import { useState } from "react";

const testCase1 =
  '{"A": {"start": true, "edges": {"B": 5, "C": 7}}, "B": {"edges": {}}, "C": {"edges": {}}}';

const testCase2 =
  '{"A": {"start": true, "edges": {"B": 5,"C": 7}}, "B": {"edges": {"D": 3}}, "C": {"edges": {"D": 3}}, "D": {"edges": {"E": 1}}, "E": {}}';

const testCase3 =
  '{"H": {"start": true, "edges": {"I": 1,"E": 3, "S": 5, "A": 8}}, "I": {"edges": {"R": 1, "A": 5}}, "E": {"edges": {"+": 1}}, "S": {"edges": {"SH": 2}}, "R": {}, "+": {}, "SH": {}, "A": {}}';

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

  const runTestCase = (e, testCase) => {
    e.preventDefault();
    setDAGText(testCase);
    onSubmit(testCase);
    setErrorMessage("");
  };

  return (
    <form className="SubmitDAGForm" onSubmit={handleSubmit}>
      <h1>Choose your Workflow</h1>
      <button onClick={(e) => runTestCase(e, testCase1)}>
        Use Test Case 1
      </button>
      <button onClick={(e) => runTestCase(e, testCase2)}>
        Use Test Case 2
      </button>
      <button onClick={(e) => runTestCase(e, testCase3)}>
        Use Test Case 3
      </button>
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
