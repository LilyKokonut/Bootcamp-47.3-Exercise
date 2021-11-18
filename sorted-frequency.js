function sortedFrequency(arr, target) {
  let firstIdx = findFirst(arr, target);
  let lastIdx = findLast(arr, target);
  // console.log("check index: " + firstIdx, lastIdx);
  if (firstIdx === -1){
    return -1;
  } else {
    return lastIdx - firstIdx + 1;
  }
}

function findFirst(arr, target, left = 0, right = arr.length - 1){
  while (left <= right) {
    let mid = Math.floor( (right + left) / 2);
    // console.log(`index: left-mid-right:  ${left}, ${mid}, ${right}`)
    // console.log(`value: left-mid-right: [${arr[left]}, ${arr[mid]}, ${arr[right]}]`)
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      if (arr[mid - 1] !== target) {
        return mid;
      } else if (arr[mid - 1] === target){
        right = mid - 1;
      }
    }
  }
  // console.log(`----> sorry no luck, there is your -1`)
  return -1;
}

function findLast(arr, target, left = 0, right = arr.length - 1){
  while (left <= right) {
    let mid = Math.floor( (right + left) / 2);
    // console.log(`index: left-mid-right:  ${left}, ${mid}, ${right}`)
    // console.log(`value: left-mid-right: [${arr[left]}, ${arr[mid]}, ${arr[right]}]`)
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      if (arr[mid + 1] !== target) {
        return mid;
      } else if (arr[mid + 1] === target){
        left = mid + 1;
      }
    }
  }
  // console.log(`----> sorry no luck, there is your -1`)
  return -1;
}

// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
module.exports = sortedFrequency