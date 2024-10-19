function add(numString) {
  if (typeof numString !== "string") throw new Error("Not a string");

  let numList = delimiterSplit(numString);

  if (numString === "") return 0;
  else if (numList.length == 1) {
    checkIfNum(numList);
    return Number(numString);
  } else {
    let sum = 0;
    numList.forEach((num) => {
      if (num.indexOf("\n") != -1) {
        sum += num.split("\n").reduce((tempSum, tempNum) => {
          checkIfNum(tempNum);
          return tempSum + Number(tempNum);
        }, 0);
      } else {
        checkIfNum(num);
        sum += Number(num);
      }
    });
    return sum;
  }
}

function checkIfNum(num) {
  if (isNaN(num)) throw new Error("Not a number string");
  if (num < 0) throw new Error("negative numbers not allowed:" + num);
}

function delimiterSplit(numberString) {
  if (numberString.slice(0, 2) == "//") {
    const delimiter = numberString[2];
    return numberString.slice(3).split(delimiter);
  } else return numberString.split(",");
}
