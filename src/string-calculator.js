function add(numString) {
  if (typeof numString !== "string") throw new Error("Not a string");

  let numList = numString.split(",");

  if (numString === "") return 0;
  else if (numList.length == 1) {
    checkIfNum(numList);
    return Number(numString);
  } else {
    let sum = 0;
    numList.forEach((num) => {
      checkIfNum(num);
      sum += Number(num);
    });
    return sum;
  }
}

function checkIfNum(num) {
  if (isNaN(num)) throw new Error("Not a number string");
}
