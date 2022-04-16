import observe from "./observe"
import Watcher from "./Watcher"



var obj = {a:{
    b:{
        c:{
            d:1
        }
    },
    arr:[1,2,3,4,5]
}}
observe(obj)
new Watcher(obj,'a.b.c',(nweV,oldV)=>{
    console.log('===》a.b.c检测到更改',nweV,oldV);
})
new Watcher(obj,'a.b.c.d',(nweV,oldV)=>{
    console.log('===》a.b.c.d检测到更改',nweV,oldV);
})
obj.a.b.c=3
