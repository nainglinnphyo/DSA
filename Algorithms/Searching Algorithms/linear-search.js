function linearSearchByProperty(arr, property, targetValue) {
     for (let i = 0; i < arr.length; i++) {
          if (arr[i][property] === targetValue) {
               return i;
          }
     }
     return -1;
}
// Example usage:
const objectsArray = [
     { id: 1, name: 'John' },
     { id: 2, name: 'Alice' },
     { id: 3, name: 'Bob' },
];

const targetName = 'Alice';

const result = linearSearchByProperty(objectsArray, 'name', targetName);

if (result !== -1) {
     console.log(`The target name ${targetName} is found at index ${result}.`);
} else {
     console.log(`The target name ${targetName} is not found in the array.`);
}
