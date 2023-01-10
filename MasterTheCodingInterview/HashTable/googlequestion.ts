const firstRepeat = (arr:number[]):number|void =>{
  // first create an object that would hold the count of each number
  const numberCount = {}
  // Create a loop to run through the array
  for (let i = 0; i < arr.length; i++){
    // check if number is in numberCount
    if(arr[i] in numberCount){
        numberCount[arr[i]] = numberCount[arr[i]] + 1;
    } else{
        numberCount[arr[i]] = 1;
    }
    //check to see if value in the number is greater than one
    if(numberCount[arr[i]] > 1){
        return arr[i]
    }

  }

    return undefined;
}
