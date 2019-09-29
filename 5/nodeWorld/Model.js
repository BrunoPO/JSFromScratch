function getVal(){
    return this.val1;
}
function setVal(newValue){
    this.val1 = newValue;
}

function constructor(initialValue){
    this.val1 = initialValue;
    this.getVal = getVal;
    this.setVal = setVal;
}

module.exports = constructor;
