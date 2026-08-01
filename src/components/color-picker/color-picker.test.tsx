import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, userEvent, within } from "@/test-utils";
import { ColorPicker } from "./color-picker";

beforeEach(() => {
  cleanup();
});

describe("color-picker", async () => {
  it("should update hex", async () => {
    const colorPicker = render(<ColorPicker />).getByTestId("desktop-color-picker");

    const r = within(colorPicker).getByLabelText("R:");
    fireEvent.change(r, { target: { value: 20 } });

    const g = within(colorPicker).getByLabelText("G:");
    fireEvent.change(g, { target: { value: 20 } });

    const b = within(colorPicker).getByLabelText("B:");
    fireEvent.change(b, { target: { value: 20 } });
    fireEvent.blur(b);

    const hex = within(colorPicker).getByLabelText("#") as HTMLInputElement;
    expect(hex.value).toBe("141414");
  });

  it("should update rgb", async () => {
    const colorPicker = render(<ColorPicker />).getByTestId("desktop-color-picker");

    const hex = within(colorPicker).getByLabelText("#");
    fireEvent.change(hex, { target: { value: "012abc" } });
    fireEvent.blur(hex);

    const r = within(colorPicker).getByLabelText("R:") as HTMLInputElement;
    expect(r.value).toBe("1");

    const g = within(colorPicker).getByLabelText("G:") as HTMLInputElement;
    expect(g.value).toBe("42");

    const b = within(colorPicker).getByLabelText("B:") as HTMLInputElement;
    expect(b.value).toBe("188");
  });

  it("should copy hex", async () => {
    const writeTextSpy = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue();

    const colorPicker = render(<ColorPicker />).getByTestId("desktop-color-picker");

    const hex = within(colorPicker).getByLabelText("#");
    fireEvent.change(hex, { target: { value: "012abc" } });
    fireEvent.blur(hex);

    const copyButton = within(colorPicker).getByRole("button", { name: /copy/i });
    await userEvent.click(copyButton);

    expect(writeTextSpy).toHaveBeenCalledWith("012abc");
  });
});
