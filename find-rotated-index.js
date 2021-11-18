function findRotatedIndex(arr, target) {
  let pivotIdx = findBreakPoint(arr);
  // console.log('pivot point is: ' + pivotIdx); //
  if (arr[0] > target) { //back
    let partIdx = findIndex(arr.slice(pivotIdx, arr.length), target);
    // console.log("partIdx for the back half is: " + partIdx); //
    return (partIdx === -1) ? -1 : partIdx + pivotIdx;
  } else if (arr[0] < target) { //front
    let partIdx = findIndex(arr.slice(0, pivotIdx), target);
    // console.log("partIdx for the front half is: " + partIdx); //
    return (partIdx === -1) ? -1 : partIdx;
  }
}

function findBreakPoint(arr, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(`--------------------------------------`);
    // console.log(`index: left-mid-right:  ${left}, ${mid}, ${right}`)
    // console.log(`value: left-mid-right: [${arr[left]}, ${arr[mid]}, ${arr[right]}]`)
    if (arr[mid - 1] > arr[mid]){
      return mid;
    }
    if (arr[left] < arr[mid] && arr[right] < arr[left]) {
      left = mid + 1;
    } else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else if (arr[left] < arr[mid] && arr[left] <= arr[right]){
      right = mid - 1;
    } else if (arr[left] === arr[right] && arr[right] < arr[left]) {
      left = mid + 1;
    }
  }
  return 0;
}

function findIndex (arr, target, left = 0, right = arr.length - 1) {
  while (left <= right){
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// findRotatedIndex([3, 4, 1, 2], 4);
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // edge case

module.exports = findRotatedIndex