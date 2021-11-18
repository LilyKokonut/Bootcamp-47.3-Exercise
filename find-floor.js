function findFloor(arr, target) {
  let floorIdx = findFloorIdx(arr, target);
  if (floorIdx === -1) {
    return -1;
  }
  return arr[floorIdx];
}

function findFloorIdx(arr, target, left = 0, right = arr.length - 1) {
  if (arr[left] > target) {
    return -1;
  }
  if (arr[right] < target) {
    return right;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      if (arr[mid + 1] >= target) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] === target) {
      return mid;
    }
  }
}

module.exports = findFloor