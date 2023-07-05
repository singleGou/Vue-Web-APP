// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]

function getArrayIntersectionSet(nums1, nums2) {
    let newArr = []
    let set1 = Array.from(new Set(nums1))
    let set2 = Array.from(new Set(nums2))
    set1.forEach(item1 => {
        set2.some(item2 => {
            if (item1 === item2) {
                newArr.push(item1)
                return true
            }
        })
    })
    return newArr
    // return Array.from(new Set(newArr))
}

let result = getArrayIntersectionSet([1,2,2,1], [2])
console.log(result);