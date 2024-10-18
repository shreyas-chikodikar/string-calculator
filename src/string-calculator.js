function add(numString) {
  if (typeof numString !== "string") throw new Error("Not a string");
  if (numString === "") return 0;
  else if (numString.split(",").length == 1) return Number(numString);
  return true;
}
