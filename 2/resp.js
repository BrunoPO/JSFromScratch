function primo(num) {
    if(num<2){
        return false
    }
    for (var i = 2; i < num; i++)
        if (num % i == 0) 
            return false;
    return true;
}

var array = [];
var iterator = 0;

while(array.length < 3){
    if(primo(iterator++)){
        array.push({
            me: iterator
        })
        if(array.length>1){
            array[array.length-1]["before"] = array[array.length-2].me
            array[array.length-2]["after"] = array[array.length-1].me
        }
    }
}
var obj = {primos: array}
obj