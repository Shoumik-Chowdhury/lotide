const middle = function(array) {
 let midArr =[];
 if (array.length < 3) {
   return midArr;
 } else if (array.length % 2 === 0) {
   let midIndex1 = array.length / 2 - 1;
   let midIndex2 = array.length / 2;
   return midArr = [array[midIndex1], array[midIndex2]];
 } else {
   let midIndex = Math.floor(array.length / 2);
   return midArr = [array[midIndex]];
 }
}

module.exports = middle;