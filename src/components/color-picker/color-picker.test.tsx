import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, userEvent } from "@/test-utils";
import { ColorPicker } from "./color-picker";

beforeEach(() => {
  cleanup();
});

describe("color-picker", async () => {
  it("should update hex", async () => {
    render(<ColorPicker />);

    const r = screen.getByLabelText("R:");
    fireEvent.change(r, { target: { value: 20 } });

    const g = screen.getByLabelText("G:");
    fireEvent.change(g, { target: { value: 20 } });

    const b = screen.getByLabelText("B:");
    fireEvent.change(b, { target: { value: 20 } });
    fireEvent.blur(b);

    const hex = screen.getByLabelText("#") as HTMLInputElement;
    expect(hex.value).toBe("141414");
  });

  it("should update rgb", async () => {
    render(<ColorPicker />);

    const hex = screen.getByLabelText("#");
    fireEvent.change(hex, { target: { value: "012abc" } });
    fireEvent.blur(hex);

    const r = screen.getByLabelText("R:") as HTMLInputElement;
    expect(r.value).toBe("1");

    const g = screen.getByLabelText("G:") as HTMLInputElement;
    expect(g.value).toBe("42");

    const b = screen.getByLabelText("B:") as HTMLInputElement;
    expect(b.value).toBe("188");
  });

  it("should copy hex", async () => {
    const writeTextSpy = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue();

    render(<ColorPicker />);

    const hex = screen.getByLabelText("#");
    fireEvent.change(hex, { target: { value: "012abc" } });
    fireEvent.blur(hex);

    const copyButton = screen.getByRole("button", { name: /copy/i });
    await userEvent.click(copyButton);

    expect(writeTextSpy).toHaveBeenCalledWith("012abc");
  });
});
