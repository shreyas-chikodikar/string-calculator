function add(numString) {
  if (typeof numString !== "string") throw new Error("Not a string");

  let numList = delimiterSplit(numString);

  if (numString === "") return 0;
  else if (numList.length == 1) {
    if (numString.indexOf("\n") != -1) {
      let tempList = numString.split("\n");
      let sum = 0;
      tempList.forEach((num) => {
        checkIfNum(num);
        if (Number(num) < 0) {
          checkIfNegative(tempList);
        }
        sum += Number(num);
      });
      return sum;
    } else {
      checkIfNum(numString);
      if (Number(numString) < 0) {
        throw new Error("negative numbers not allowed:" + numString);
      }
      return Number(numString);
    }
  } else {
    let sum = 0;
    numList.forEach((num) => {
      if (!isNaN(num) && Number(num) < 0) {
        checkIfNegative(numList);
      }

      if (num.indexOf("\n") != -1) {
        sum += num.split("\n").reduce((reducedSum, reducedNum) => {
          checkIfNum(reducedNum);
          return reducedSum + Number(reducedNum);
        }, 0);
      } else {
        checkIfNum(num);
        sum += Number(num);
      }
    });
    return sum;
  }
}

function delimiterSplit(numberString) {
  if (numberString.slice(0, 2) == "//") {
    const delimiter = numberString[2];
    return numberString.slice(3).split(delimiter);
  } else return numberString.split(",");
}

function checkIfNum(num) {
  if (isNaN(num)) throw new Error("Not a number string");
}

function checkIfNegative(numberList) {
  let errorMsg = "negative numbers not allowed:";
  numberList.forEach((num) => {
    if (num.indexOf("\n") != -1) {
      num = num.replace(/\n/g, "");
    }
    if (num < 0) errorMsg += num + ",";
  });
  errorMsg = errorMsg.slice(0, -1);
  throw new Error(errorMsg);
}
