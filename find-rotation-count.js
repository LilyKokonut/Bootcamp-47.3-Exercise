function findRotationCount(arr, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(`--------------------------------------`);
    // console.log(`index: left-mid-right:  ${left}, ${mid}, ${right}`)
    // console.log(`value: left-mid-right: [${arr[left]}, ${arr[mid]}, ${arr[right]}]`)
    // console.log("--> can we get into the magic branch? part 1: *=*" + arr[left] + " " + arr[right]);
    // console.log("--> can we get into the magic branch? part 2: *<* " + (arr[right] < arr[left]));
    if (arr[mid - 1] > arr[mid]){
      return mid;
    }
    if (arr[left] < arr[mid] && arr[right] < arr[left]) {
      left = mid + 1;
    } else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else if (arr[left] < arr[mid] && arr[left] <= arr[right]){
      right = mid - 1;
    } else if (arr[left] === arr[mid] && arr[right] < arr[left]) {
      // console.log("--> we are in this branch now: " + arr[left] === arr[right] && arr[right] < arr[left]);
      left = mid + 1;
      // console.log("--> left = " + left + "; [left] = " + arr[left]);
    } else if (arr[left] === arr[mid] && arr[right] > arr[left]) {
      right = mid - 1;
    }
  }
  return 0;
}

// let result = findRotationCount([7, 9, 11, 12, 15]);
// console.log("$$ HEY RESULT IS: " + result);
module.exports = findRotationCount