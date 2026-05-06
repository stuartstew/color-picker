import { describe, expect, it } from "vitest";
import { hexToRgb, rgbToHex } from "./rgb-hex";

describe("rgb to hex", () => {
  it("should convert rgb to hex", () => {
    expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe("000000");
    expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe("ffffff");
    expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe("ff0000");
    expect(rgbToHex({ r: 0, g: 255, b: 0 })).toBe("00ff00");
    expect(rgbToHex({ r: 0, g: 0, b: 255 })).toBe("0000ff");
    expect(rgbToHex({ r: 1, g: 42, b: 188 })).toBe("012abc");
  });

  it("should throw error for invalid argument", () => {
    expect(() => rgbToHex({ r: -1, g: -1, b: -1 })).toThrow();
    expect(() => rgbToHex({ r: 256, g: 256, b: 256 })).toThrow();
    expect(() => rgbToHex({ r: 0.1, g: 0.2, b: 0.3 })).toThrow();
    expect(() => rgbToHex({ r: 0, g: 0, b: NaN })).toThrow();
    expect(() => rgbToHex({ r: 0, g: 0, b: Infinity })).toThrow();
    expect(() => rgbToHex({ r: 0, g: 0, b: -Infinity })).toThrow();
  });
});

describe("hex to rgb", () => {
  it("should convert hex to rgb", () => {
    expect(hexToRgb("000000")).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb("ffffff")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("ff0000")).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb("00ff00")).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb("0000ff")).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb("012abc")).toEqual({ r: 1, g: 42, b: 188 });
  });

  it("should throw error for invalid argument", () => {
    expect(() => hexToRgb("")).toThrow();
    expect(() => hexToRgb("0")).toThrow();
    expect(() => hexToRgb("000")).toThrow();
    expect(() => hexToRgb("fff")).toThrow();
    expect(() => hexToRgb("#000000")).toThrow();
    expect(() => hexToRgb("#ffffff")).toThrow();
    expect(() => hexToRgb("abcxyz")).toThrow();
  });
});
