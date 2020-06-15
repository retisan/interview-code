function swap(arr, left, right) {
    const rightValue = arr[right];
    arr[right] = arr[left];
    arr[left] = rightValue;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length / 2);
    const midValue = arr.splice(midIndex, 1)[0];
    const left = [];
    const right = [];
    arr.forEach((item) => {
        if (item < midValue) {
            left.push(item);
        } else {
            right.push(item);
        }
    });
    return quickSort(left).concat([arr[midIndex]], quickSort(right));
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

const arr = [1, 23, 443, 7, 4, 45345, 23, 67, 55, 1];

console.log(bubbleSort(arr));
