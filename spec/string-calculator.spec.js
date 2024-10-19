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

  it("throws an error when one of the values is not a number", () => {
    expect(function () {
      add("1,a");
    }).toThrow();

    expect(function () {
      add("1\nb,3");
    }).toThrow();
  });

  it("enable the function to handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n4\n5,5,3\n1")).toBe(21);
    expect(add("1\n2")).toBe(3);
  });

  it("supports different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("throws error for negative number", () => {
    expect(function () {
      add("1,-2");
    }).toThrowError("negative numbers not allowed:-2");

    expect(function () {
      add("-2");
    }).toThrowError("negative numbers not allowed:-2");
  });

  it("throws error message which mentions all negative delmiters", () => {
    expect(function () {
      add("-1,-2");
    }).toThrowError("negative numbers not allowed:-1,-2");

    expect(function () {
      add("-1\n,-2");
    }).toThrowError("negative numbers not allowed:-1,-2");

    expect(function () {
      add("-1\n3");
    }).toThrowError("negative numbers not allowed:-1");
  });
});
