describe("String Calculator", () => {
  it("add function exists", () => {
    expect(add("")).toBeDefined();
  });

  it("expects string as argument", () => {
    expect(add("0")).toBe(true);
    expect(add(0)).not.toBe(true);
  });

  it("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
});
