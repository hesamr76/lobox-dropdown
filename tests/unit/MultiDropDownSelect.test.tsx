import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { MultiDropDownSelect } from "../../src/components/MultiDropDownSelect";

vi.mock("../../src/hooks", async () => {
  const actual = await vi.importActual<typeof import("../../src/hooks")>(
    "../../src/hooks"
  );
  return {
    ...actual,
    useIsOpen: () => ({
      isOpen: true,
      onOpen: vi.fn(),
      onClose: vi.fn(),
    }),
    useOutsideClick: () => {
      return {
        current: document.createElement("div"),
      };
    },
  };
});

const options = [
  { label: "Education 🎓", value: "education" },
  { label: "Science 🧪", value: "science" },
];

describe("MultiDropDownSelect", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the input and dropdown with initial options", () => {
    render(<MultiDropDownSelect options={options} />);
    expect(screen.getByPlaceholderText("Type To Add More")).toBeInTheDocument();
    expect(screen.getByText("Education 🎓")).toBeInTheDocument();
    expect(screen.getByText("Science 🧪")).toBeInTheDocument();
  });

  it("adds a new selected option when Enter is pressed", () => {
    render(<MultiDropDownSelect options={options} />);
    const input = screen.getByPlaceholderText("Type To Add More");

    fireEvent.change(input, { target: { value: "Design" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText(/Yeeeah, Design 🆕/)).toBeInTheDocument();
  });

  it("selects and deselects an option", () => {
    render(<MultiDropDownSelect options={options} />);
    const option = screen.getByText("Education 🎓");

    fireEvent.click(option);
    expect(screen.getByText("education")).toBeInTheDocument();

    fireEvent.click(option);
    expect(screen.queryByText("education")).not.toBeInTheDocument();
  });
});
