/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation 
  const workArray = [null, ...preferences];

    const result = workArray.reduce(({ count, arr }, numberA, index) => {
        const numberB = arr[numberA];

        if (numberB && (numberB !== numberA)) {
            const numberC = arr[numberB];

            if (numberC && ((numberC !== numberB) && numberC !== numberA) && numberC === index) {
                const arrCopy = [...arr];

                arrCopy.splice(index, 1, null);
                arrCopy.splice(numberB, 1, null);
                arrCopy.splice(numberC, 1, null);
                
                return {
                    count: ++count,
                    arr: arrCopy
                };
            } else {
                return {
                    count,
                    arr
                };
            }
        } else {
            return {
                count,
                arr
            };
        }
    }, {
        count: 0,
        arr: workArray
    });

    return result.count;
  }
