import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useRgb } from "./use-rgb";

describe("use-rgb", () => {
  it("should change rgb and hex when setRgb is called", () => {
    const { result } = renderHook(() => useRgb({ r: 0, g: 0, b: 0 }));

    expect(result.current.rgb).toEqual({ r: 0, g: 0, b: 0 });
    expect(result.current.hex).toBe("000000");

    act(() => result.current.setRgb({ r: 255, g: 0, b: 0 }));

    expect(result.current.rgb).toEqual({ r: 255, g: 0, b: 0 });
    expect(result.current.hex).toBe("ff0000");
  });

  it("should change rgb and hex when setHex is called", () => {
    const { result } = renderHook(() => useRgb({ r: 0, g: 0, b: 0 }));

    expect(result.current.rgb).toEqual({ r: 0, g: 0, b: 0 });
    expect(result.current.hex).toBe("000000");

    act(() => result.current.setHex("ff0000"));

    expect(result.current.rgb).toEqual({ r: 255, g: 0, b: 0 });
    expect(result.current.hex).toBe("ff0000");
  });
});
