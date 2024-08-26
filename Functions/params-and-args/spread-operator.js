//The spread operator expands an array into individual elements. 

const nums1=[1,2,3,4]
const nums2=[1,1,90]
const combined=[...nums1,...nums2]
console.log(combined) //op: (7) [1, 2, 3, 4, 1, 1, 90]