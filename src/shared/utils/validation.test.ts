import { describe, expect, it } from "vitest";
import { isValidHex, isValidHsv, isValidRgb } from "./validation";

describe("is valid hex", () => {
  it("should return true for valid hex", () => {
    expect(isValidHex("000000")).toBe(true);
    expect(isValidHex("ff0000")).toBe(true);
    expect(isValidHex("00ff00")).toBe(true);
    expect(isValidHex("0000ff")).toBe(true);
    expect(isValidHex("012abc")).toBe(true);
  });

  it("should return false for invalid hex", () => {
    expect(isValidHex("")).toBe(false);
    expect(isValidHex("0")).toBe(false);
    expect(isValidHex("000")).toBe(false);
    expect(isValidHex("bcdefg")).toBe(false);
    expect(isValidHex("0123456")).toBe(false);
  });
});

describe("is valid hsv", () => {
  it("should return true for valid hsv", () => {
    expect(isValidHsv({ h: 0, s: 0, v: 0 })).toBe(true);
    expect(isValidHsv({ h: 0, s: 100, v: 100 })).toBe(true);
    expect(isValidHsv({ h: 359, s: 0, v: 0 })).toBe(true);
    expect(isValidHsv({ h: 359, s: 100, v: 100 })).toBe(true);
  });

  it("should return false for invalid hsv", () => {
    expect(isValidHsv({ h: 0, s: 0, v: -1 })).toBe(false);
    expect(isValidHsv({ h: 0, s: -1, v: 0 })).toBe(false);
    expect(isValidHsv({ h: -1, s: 0, v: 0 })).toBe(false);
    expect(isValidHsv({ h: 0, s: 0, v: 101 })).toBe(false);
    expect(isValidHsv({ h: 0, s: 101, v: 100 })).toBe(false);
    expect(isValidHsv({ h: 360, s: 100, v: 100 })).toBe(false);
  });
});

describe("is valid rgb", () => {
  it("should return true for valid rgb", () => {
    expect(isValidRgb({ r: 0, g: 0, b: 0 })).toBe(true);
    expect(isValidRgb({ r: 255, g: 255, b: 255 })).toBe(true);
    expect(isValidRgb({ r: 12, g: 34, b: 56 })).toBe(true);
  });

  it("should return false for invalid rgb", () => {
    expect(isValidRgb({ r: -1, g: 0, b: 0 })).toBe(false);
    expect(isValidRgb({ r: 0, g: -1, b: 0 })).toBe(false);
    expect(isValidRgb({ r: 0, g: 0, b: -1 })).toBe(false);
    expect(isValidRgb({ r: 256, g: 0, b: 0 })).toBe(false);
    expect(isValidRgb({ r: 0, g: 256, b: 0 })).toBe(false);
    expect(isValidRgb({ r: 0, g: 0, b: 256 })).toBe(false);
  });
});
