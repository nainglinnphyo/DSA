function binarySearchByProperty(arr, property, targetValue) {
     let low = 0;
     let high = arr.length - 1;

     while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          const midValue = arr[mid][property];

          if (midValue === targetValue) {
               return mid; // Return the index if the target is found
          } else if (midValue < targetValue) {
               low = mid + 1;
          } else {
               high = mid - 1;
          }
     }

     return -1; // Return -1 if the target is not found in the array
}

// Example usage:
const sortedObjectsArray = [
     { id: 1, name: 'Alice' },
     { id: 2, name: 'Bob' },
     { id: 3, name: 'John' },
];

const targetName = 'Bob';

const result = binarySearchByProperty(sortedObjectsArray, 'name', targetName);

if (result !== -1) {
     console.log(`The target name ${targetName} is found at index ${result}.`);
} else {
     console.log(`The target name ${targetName} is not found in the array.`);
}
