import { render, screen } from "@testing-library/react";
import ProjectList from "./ProjectList";

test("renders project cards", () => {
  const mockProjects = [
    { id: 1, title: "Test", description: "Desc", category: "Web", image: null }
  ];

  render(<ProjectList projects={mockProjects} />);

  expect(screen.getByText("Test")).toBeInTheDocument();
});