function bubbleSort(arr, property) {
     const len = arr.length;
     let swapped;
     do {
          swapped = false;
          for (let i = 0; i < len - 1; i++) {
               if (arr[i][property] > arr[i + 1][property]) {
                    // Swap the elements
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    // Mark that a swap occurred
                    swapped = true;
                    // if swapped is true, do while loop again with the temporarily swapped array
               }
          }
     } while (swapped);

     return arr;
}

const unsortedArray = [
     { value: 25 },
     { value: 64 },
     { value: 12 },
     { value: 22 },
     { value: 11 }
];

const sortedArray = bubbleSort(unsortedArray, 'value');

console.log("Sorted Array:", sortedArray);
