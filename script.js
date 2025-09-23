//your JS code here. If required.
function secondHighest(arr) {
	if (arr.length < 2) {
    console.log(-Infinity);
    return;
  }

  // Remove duplicates
  arr = [...new Set(arr)];

  if (arr.length < 2) {
    console.log(-Infinity);
    return;
  }

 
  arr.sort((a, b) => b - a);

   
  console.log(arr[1]);
}
