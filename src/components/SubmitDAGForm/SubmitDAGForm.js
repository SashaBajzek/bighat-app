import "./SubmitDAGForm.css";
import { useCallback, useState } from 'react';

function SubmitDAGForm({onSubmit}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [DAGText, setDAGText] = useState("");

    const validate = useCallback(() => {
        let error = "";
        if (DAGText === "") {
            error = "DAG required";
        }
        // TODO error for invalid JSON
        return error;
    }, [DAGText]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const error = validate();
        if (error === "") {
            onSubmit(DAGText);
            setDAGText("");
        }
        setErrorMessage(error);
    },[onSubmit, DAGText, validate]);

    const onChange = (e) => {
        setDAGText(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="dag-input">DAG in JSON format:</label>
            <textarea aria-describedby={"error"} id="dag-input" onChange={onChange} rows={2} type="text" value={DAGText}></textarea>
            <div id="error">{errorMessage}</div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default SubmitDAGForm;