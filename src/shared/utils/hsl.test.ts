import { describe, expect, it } from "vitest";
import { hslToHsv, hsvToHsl, parseHsl } from "./hsl";

describe("parse hsl", () => {
  it("should parse string to extract hsl", () => {
    expect(parseHsl("hsl(0, 0%, 0%)")).toEqual({ h: 0, s: 0, l: 0 });
    expect(parseHsl("hsl(359, 100%, 100%)")).toEqual({ h: 359, s: 100, l: 100 });
    expect(parseHsl("hsl(120, 34%, 56%)")).toEqual({ h: 120, s: 34, l: 56 });
  });
});

describe("hsl to hsv", () => {
  it("should convert hsl to hsv", () => {
    expect(hslToHsv({ h: 0, s: 0, l: 0 })).toEqual({ h: 0, s: 0, v: 0 });
    expect(hslToHsv({ h: 0, s: 0, l: 100 })).toEqual({ h: 0, s: 0, v: 100 });
    expect(hslToHsv({ h: 0, s: 100, l: 50 })).toEqual({ h: 0, s: 100, v: 100 });
    expect(hslToHsv({ h: 180, s: 100, l: 50 })).toEqual({ h: 180, s: 100, v: 100 });
  });
});

describe("hsv to hsl", () => {
  it("should convert hsv to hsl", () => {
    expect(hsvToHsl({ h: 0, s: 0, v: 0 })).toEqual({ h: 0, s: 0, l: 0 });
    expect(hsvToHsl({ h: 0, s: 0, v: 100 })).toEqual({ h: 0, s: 0, l: 100 });
    expect(hsvToHsl({ h: 0, s: 100, v: 100 })).toEqual({ h: 0, s: 100, l: 50 });
    expect(hsvToHsl({ h: 180, s: 100, v: 100 })).toEqual({ h: 180, s: 100, l: 50 });
  });
});
