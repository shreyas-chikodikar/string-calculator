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

  it("throws an Error on incorrect type", () => {
    expect(function () {
      add(0);
    }).toThrow();
  });

  it("throws an Error on incorrect value", () => {
    expect(function () {
      add("a");
    }).toThrow();
  });

  it("returns sum when given input of 2 or more comma-seperated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("1,2,3,4,5")).toBe(15);
  });
});
