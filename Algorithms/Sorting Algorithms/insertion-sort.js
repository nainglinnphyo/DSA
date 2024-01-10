function insertionSort(arr, property) {
     const len = arr.length;

     for (let i = 1; i < len; i++) {
          const key = arr[i];
          let j = i - 1;

          while (j >= 0 && arr[j][property] > key[property]) {
               arr[j + 1] = arr[j];
               j = j - 1;
          }

          arr[j + 1] = key;
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

const sortedArray = insertionSort(unsortedArray, 'value');

console.log("Sorted Array:", sortedArray);
