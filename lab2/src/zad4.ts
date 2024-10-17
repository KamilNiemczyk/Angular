
const mergeArrays = <T>(arr1: T[], arr2: T[]): T[] => {
    return [...arr1, ...arr2];
}

const arrMerged = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(arrMerged);
