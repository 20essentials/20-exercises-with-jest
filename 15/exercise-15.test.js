import { decorateTree } from "./exercise-15.js";

describe("decorateTree()", () => {
  it("should be defined as a function", () => {
    expect(typeof decorateTree).toBe("function");
  });

  it("should generate the correct decoration pyramid for 'B P R P'", () => {
    expect(decorateTree("B P R P")).toEqual(["R", "P B", "R B B", "B P R P"]);
  });

  it("should generate the correct decoration pyramid for 'B B'", () => {
    expect(decorateTree("B B")).toEqual(["B", "B B"]);
  });

  it("should generate the correct decoration pyramid for 'R R P R R'", () => {
    expect(decorateTree("R R P R R")).toEqual([
      "R",
      "R R",
      "P B P",
      "R B B R",
      "R R P R R"
    ]);
  });

  it("should generate the correct decoration pyramid for 'B B P R P R R'", () => {
    expect(decorateTree("B B P R P R R")).toEqual([
      "B",
      "R P",
      "B P P",
      "P R B R",
      "P P B B P",
      "B R B B B R",
      "B B P R P R R"
    ]);
  });
});
