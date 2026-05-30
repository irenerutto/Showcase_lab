import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectForm from "./ProjectForm";

test("submits form with user input", async () => {
  const user = userEvent.setup();
  const handleSubmit = vi.fn();
  const handleChange = vi.fn();

  render(
    <ProjectForm
      formData={{ title: "", description: "", category: "", image: "" }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );

  const button = screen.getByRole("button", { name: /add project/i });

  await user.click(button);

  expect(handleSubmit).toHaveBeenCalled();
});