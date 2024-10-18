function add(numString) {
  if (typeof numString !== "string") throw new Error("Not a string");
  if (numString === "") return 0;
  else if (numString.split(",").length == 1) {
    if (isNaN(numString)) throw new Error("Not a number string");
    return Number(numString);
  }
  return true;
}
