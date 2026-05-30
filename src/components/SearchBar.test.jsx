import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders search input", () => {
  render(<SearchBar searchTerm="" setSearchTerm={() => {}} />);

  const input = screen.getByPlaceholderText("Search projects...");

  expect(input).toBeInTheDocument();
});