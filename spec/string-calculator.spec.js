describe("String Calculator", () => {
  it("add function exists", () => {
    expect(add("")).toBeDefined();
  });

  it("expects string as argument", () => {
    expect(add("0")).toBeDefined();
  });

  it("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("returns same number on single number input", () => {
    expect(add("1")).toBe(1);
  });

  it("throws an Error on incorrect input", () => {
    expect(function () {
      add(0);
    }).toThrow();
  });
});
