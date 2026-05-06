import { describe, expect, it } from "vitest";
import { hsvToRgb, rgbToHsv } from "./rgb-hsv";

describe("rgb to hsv", () => {
  it("should convert rgb to hsv", () => {
    expect(rgbToHsv({ r: 0, g: 0, b: 0 })).toEqual({ h: 0, s: 0, v: 0 });
    expect(rgbToHsv({ r: 255, g: 255, b: 255 })).toEqual({ h: 0, s: 0, v: 100 });

    expect(rgbToHsv({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, v: 100 });
    expect(rgbToHsv({ r: 255, g: 255, b: 0 })).toEqual({ h: 60, s: 100, v: 100 });
    expect(rgbToHsv({ r: 0, g: 255, b: 0 })).toEqual({ h: 120, s: 100, v: 100 });
    expect(rgbToHsv({ r: 0, g: 255, b: 255 })).toEqual({ h: 180, s: 100, v: 100 });
    expect(rgbToHsv({ r: 0, g: 0, b: 255 })).toEqual({ h: 240, s: 100, v: 100 });
    expect(rgbToHsv({ r: 255, g: 0, b: 255 })).toEqual({ h: 300, s: 100, v: 100 });

    expect(rgbToHsv({ r: 51, g: 51, b: 51 })).toEqual({ h: 0, s: 0, v: 20 });
    expect(rgbToHsv({ r: 102, g: 153, b: 204 })).toEqual({ h: 210, s: 50, v: 80 });
  });
});

describe("hsv to rgb", () => {
  it("should convert hsv to rgb", () => {
    expect(hsvToRgb({ h: 0, s: 0, v: 0 })).toEqual({ r: 0, g: 0, b: 0 });
    expect(hsvToRgb({ h: 0, s: 0, v: 100 })).toEqual({ r: 255, g: 255, b: 255 });

    expect(hsvToRgb({ h: 0, s: 100, v: 100 })).toEqual({ r: 255, g: 0, b: 0 });
    expect(hsvToRgb({ h: 60, s: 100, v: 100 })).toEqual({ r: 255, g: 255, b: 0 });
    expect(hsvToRgb({ h: 120, s: 100, v: 100 })).toEqual({ r: 0, g: 255, b: 0 });
    expect(hsvToRgb({ h: 180, s: 100, v: 100 })).toEqual({ r: 0, g: 255, b: 255 });
    expect(hsvToRgb({ h: 240, s: 100, v: 100 })).toEqual({ r: 0, g: 0, b: 255 });
    expect(hsvToRgb({ h: 300, s: 100, v: 100 })).toEqual({ r: 255, g: 0, b: 255 });

    expect(hsvToRgb({ h: 0, s: 0, v: 20 })).toEqual({ r: 51, g: 51, b: 51 });
    expect(hsvToRgb({ h: 210, s: 50, v: 80 })).toEqual({ r: 102, g: 153, b: 204 });
  });

  it("should convert irregular hsv to rgb", () => {
    expect(hsvToRgb({ h: 0, s: 100, v: 0 })).toEqual({ r: 0, g: 0, b: 0 });
    expect(hsvToRgb({ h: 180, s: 0, v: 20 })).toEqual({ r: 51, g: 51, b: 51 });
  });
});
