function func1(){
    return this
}

var func2 = () => {
    return this
}

// chain function
var resp = func1()
resp

obj = {
    func1:func1,
    func2: func2
}

var resp = obj.func1()
resp
