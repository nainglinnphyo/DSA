function insertionSort(arr) {
     var len = arr.length;

     for (var i = 1; i < len; i++) {
          var key = arr[i];
          var j = i - 1;
          // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
          while (j >= 0 && arr[j] > key) {
               arr[j + 1] = arr[j];
               j = j - 1;
          }

          arr[j + 1] = key;
     }

     return arr;
}

// Example usage:
var unsortedArray = [64, 25, 12, 22, 11];
var sortedArray = insertionSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
