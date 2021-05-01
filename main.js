function strOfInt(x) {
  if (x === 0) {
    return "Zero"
  } else if (x === 1) {
    return "One"
  } else if (x === 2) {
    return "Two"
  } else if (x === 3) {
    return "Three"
  } else if (x === 4) {
    return "Four"
  } else if (x === 5) {
    return "Five"
  } else if (x === 6) {
    return "Six"
  } else if (x === 7) {
    return "Seven"
  } else if (x === 8) {
    return "Eight"
  } else {
    return "Nine"
  }
}

function intArrtoStrings(arr) {
  var acc = [];
  for (i = 0; i < arr.length; i++) {
    var num = arr[i];
    var strAcc = "";
    if (num == 0) {
      strAcc = "Zero";
    } else {
      while (num > 0) {
        var toStr = num % 10;
        num = Math.floor(num / 10);
        strAcc = strOfInt(toStr) + strAcc
      }
    }
    acc[i] = strAcc;
  }
  console.log(acc.toString())
}

var args = process.argv.slice(2);
console.log(intArrtoStrings(args))