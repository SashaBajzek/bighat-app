import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("runs the first test case", async () => {
  render(<App />);
  const runButton = screen.getByText("Use Test Case 1");

  userEvent.click(runButton);

  await waitFor(() => {
    expect(screen.getByText("A")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("Elapsed Time: 0s")).toBeInTheDocument();
  });
});
