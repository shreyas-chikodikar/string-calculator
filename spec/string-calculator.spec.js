describe("String Calculator", () => {
  it("add function exists", () => {
    expect(add("")).toBeDefined();
  });

  it("expects string as argument", () => {
    expect(add("0")).toBeDefined();
    expect(add(0)).not.toBe(true);
  });

  it("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("returns same number on single number input", () => {
    expect(add("1")).toBe(1);
  });
});
