import { celsiusToFahrenheit } from "./celsiusToFahrenheit";

describe("celsiusToFahrenheit", () => {
  it("converts 0°C to 32°F", () => {
    const fahrenheit = celsiusToFahrenheit(0);
    expect(fahrenheit).toEqual(32);
  });

  it("converts 100°C to 212°F", () => {
    const fahrenheit = celsiusToFahrenheit(100);
    expect(fahrenheit).toEqual(212);
  });

  it("converts -40°C to -40°F", () => {
    const fahrenheit = celsiusToFahrenheit(-40);
    expect(fahrenheit).toEqual(-40);
  });

  it("converts 37°C to 98.6°F", () => {
    const fahrenheit = celsiusToFahrenheit(37);
    expect(fahrenheit).toBeCloseTo(98.6);
  });
});
