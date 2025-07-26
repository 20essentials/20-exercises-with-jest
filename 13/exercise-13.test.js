import { getFilesToBackup } from "./exercise-13.js";

describe("getFilesToBackup()", () => {
  it("should be a function", () => {
    expect(typeof getFilesToBackup).toBe("function");
  });

  it("should return [1, 3] when only files 1 and 3 have modifications after the given timestamp", () => {
    expect(
      getFilesToBackup(1546300800, [
        [3, 1546301100],
        [2, 1546300800],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
      ])
    ).toEqual([1, 3]);
  });

  it("should return [1, 2, 3] when all files have been modified after the given timestamp", () => {
    expect(
      getFilesToBackup(1546300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ])
    ).toEqual([1, 2, 3]);
  });

  it("should return an empty array when no files have been modified after the given timestamp", () => {
    expect(
      getFilesToBackup(1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ])
    ).toEqual([]);
  });

  it("should return an empty array when the list of changes is empty", () => {
    expect(getFilesToBackup(1556300600, [])).toEqual([]);
  });
});
