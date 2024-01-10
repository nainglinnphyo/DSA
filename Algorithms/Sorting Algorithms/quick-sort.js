function quickSortObjects(arr, key) {
     if (arr.length <= 1) {
          return arr;
     }

     const pivot = arr[0];
     const left = [];
     const right = [];

     for (let i = 1; i < arr.length; i++) {
          if (arr[i][key] < pivot[key]) {
               left.push(arr[i]);
          } else {
               right.push(arr[i]);
          }
     }

     return [...quickSortObjects(left, key), pivot, ...quickSortObjects(right, key)];
}

// Example usage:
const unsortedObjects = [
     { name: "Alice", age: 30 },
     { name: "Bob", age: 25 },
     { name: "Charlie", age: 35 },
     { name: "David", age: 28 },
];

const sortedObjects = quickSortObjects(unsortedObjects, "age");
console.log(sortedObjects);
