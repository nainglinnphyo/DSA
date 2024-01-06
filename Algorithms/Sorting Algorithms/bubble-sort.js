function bubbleSort(arr) {
     const len = arr.length;
     let swapped;
     do {
          swapped = false;
          for (var i = 0; i < len - 1; i++) {
               if (arr[i] > arr[i + 1]) {
                    // Swap the elements
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    // Mark that a swap occurred
                    swapped = true;
                    // if swapped true , do while loop again with temp swapped array
               }

          }
     } while (swapped);

     return arr;
}

const unsortedArray = [25, 64, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
