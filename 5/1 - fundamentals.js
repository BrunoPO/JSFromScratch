var funcString = "console.log('v')"
var func = Function(funcString)
func()

var arr = [1,2,3]
var isArray = Array.isArray([1,2,3])
isArray
var arr2 = arr;
var arr3 = Array.from(arr)
arr2[3] = 4
arr
arr2
arr3

obj = {val:1};
Object.keys(obj).map((key) => {
    console.log(key)
})