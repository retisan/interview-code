// const arr = [1, [2, [3, 4, [5, 6, 7]]]];
const arr = new Array(10000).fill([1, [2, 3, [3, [3, 5, [6, 7, 8]]]]]);
const flatten = (arr) => {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
};
const flatten1 = (arr) => {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten1(next) : next);
    }, []);
};
const flatten2 = (array) => {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            result = result.concat(flatten2(element));
        } else {
            result = result.concat(element);
        }
    }
    return result;
};

console.time("flatten");
console.log(flatten(arr));
// flatten(arr);
console.timeEnd("flatten");
