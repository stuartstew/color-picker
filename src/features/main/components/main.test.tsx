import { cleanup, fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { render } from "@/test-utils";
import { Main } from "./main";

beforeEach(() => {
  cleanup();
});

describe("main", async () => {
  it("should update hex", async () => {
    render(<Main />);

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
    render(<Main />);

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
});
