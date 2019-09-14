var v = "val1" && "val2";
v

v = undefined && "val2";
v

v = "val1" || "val2";
v

v = undefined || "val2";
v

v = "val1" || undefined;
v

v = (!v) ? "true" : "false";

console.log(v)
if(v){
    console.log(v)
}
