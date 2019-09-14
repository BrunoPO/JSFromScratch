//Callback Queue - Task Queue
setTimeout(()=>{console.log('1','is a loneliest number')}) 
setTimeout(()=>{console.log('2','is a swan')}) 

//2 Job Queue - Microtask Queue
Promise.resolve('hi').then((data)=>console.log('2',data))

//3 Main Queue
console.log('3', 'is a group')
