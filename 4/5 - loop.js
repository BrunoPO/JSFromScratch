var forEach = ["maça","uva","abacaxi"].forEach(function(item, index, array) {
    console.log(item, index);
  });
forEach

var map = [1,2,3].map((val)=>{
    return val*2
})
map

var reduce = [1,2,3].reduce((acc, val)=>{
    return acc*val
})
reduce

var filter = [1,2,3].filter((val)=>{
    return (val>1)
})
filter

var every = [1,2,3].every((val)=>{
    return (val>1)
})
every
