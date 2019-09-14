function constructor(){
    this.name = "name"
    this.phone = 8898456712
}

obj = {}
constructor()
constructor.call(obj)
console.log(phone)
console.log(obj.phone)
