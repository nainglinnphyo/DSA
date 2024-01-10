// Merge Sort function for an array of objects
function mergeSort(arr, compareFunction) {
     if (arr.length <= 1) {
          return arr;
     }

     const middle = Math.floor(arr.length / 2);
     const left = arr.slice(0, middle);
     const right = arr.slice(middle);

     const sortedLeft = mergeSort(left, compareFunction);
     const sortedRight = mergeSort(right, compareFunction);
     return merge(sortedLeft, sortedRight, compareFunction);
}

function merge(left, right, compareFunction) {
     let result = [];
     let leftIndex = 0;
     let rightIndex = 0;

     while (leftIndex < left.length && rightIndex < right.length) {
          if (compareFunction(left[leftIndex], right[rightIndex]) <= 0) {
               result.push(left[leftIndex]);
               leftIndex++;
          } else {
               result.push(right[rightIndex]);
               rightIndex++;
          }
     }
     return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const objectsArray = [
     { name: 'John', age: 30 },
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 35 },
];

// Sorting based on the 'age' property
const sortedArray = mergeSort(objectsArray, (a, b) => a.age - b.age);

console.log(sortedArray);
