// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(arr) {
   // take current number and
  //    1. convert it to string
  //    2. split up the digits
  //    3. map each each digit (using parseInt here)
  // 
  // let sum be 0
  // let power be number's length (i.e., how many digits there are in the number)
  // for each digit, add the digit to that power to the sum cumutatively
  // return true/false if sum is equal to original number 
  let res = []; 
  let stringForm = '';
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    stringForm = arr[i].toString().split(''); 
    sum = 0;
    let pow = stringForm.length;
    for(let k = 0; k < stringForm.length; k++) {
      stringForm[k] = parseInt(stringForm[k])**pow;
      sum += stringForm[k];
    }
    if(sum === arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
};



