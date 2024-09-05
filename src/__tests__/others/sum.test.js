import { describe, expect, test } from "@jest/globals";
import sum from "../../pages/components/sum";

describe("Test pour la documentation", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Pour le test de nombre", () => {
    const number = 4;
    expect(number).toBeGreaterThan(2);
  });

  function compileAndroidCode() {
    throw new Error("vous utilisez le mauvais JDK!");
  }

  test("Verification si une fonction retourne une erreur", () => {
    expect(() => compileAndroidCode()).toThrow();
  });
});
