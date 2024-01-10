function selectionSort(arr, property) {
     const len = arr.length;

     for (let i = 0; i < len - 1; i++) {
          let minIndex = i;

          for (let j = i + 1; j < len; j++) {
               if (arr[j][property] < arr[minIndex][property]) {
                    minIndex = j;
               }
          }

          if (minIndex !== i) {
               const temp = arr[i];
               arr[i] = arr[minIndex];
               arr[minIndex] = temp;
          }
     }

     return arr;
}

// Example usage:
const unsortedArray = [
     { value: 64 },
     { value: 25 },
     { value: 12 },
     { value: 22 },
     { value: 11 }
];

const sortedArray = selectionSort(unsortedArray, 'value');

console.log("Sorted Array:", sortedArray);
