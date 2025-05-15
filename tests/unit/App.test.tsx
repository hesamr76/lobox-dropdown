import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../src/App";

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);
    expect(
      screen.getByText("Multi drop-down select component")
    ).toBeInTheDocument();
  });

  it("renders MultiDropDownSelect and its options when input is focused", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type To Add More");

    fireEvent.focus(input);

    expect(screen.getByText("Education 🎓")).toBeInTheDocument();
    expect(screen.getByText("Science 🧪")).toBeInTheDocument();
    expect(screen.getByText("Games 🎮")).toBeInTheDocument();
  });

  it("allows selecting and displaying a value", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type To Add More");

    fireEvent.focus(input);
    fireEvent.click(screen.getByText("Art 🖼️"));

    expect(screen.getByText("Art")).toBeInTheDocument();
  });

  it("creates a new option with Enter", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type To Add More");

    fireEvent.change(input, { target: { value: "design" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Design")).toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByText(/Yeeeah, Design 🆕/)).toBeInTheDocument();
  });
});
