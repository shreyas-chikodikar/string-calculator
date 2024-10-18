function add(numString) {
  if (typeof numString !== "string") return false;
  if (numString === "") return 0;
  else if (numString.split(",").length == 1) return Number(numString);
  return true;
}
