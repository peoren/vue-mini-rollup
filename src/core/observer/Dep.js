// @flow
/**
* @description:Class 依赖类
* @param {type} 
* @return: 
*/
export default class Dep{
    constructor(){
        this.subs=[]//用于存储Watcher实例依赖    
    }
    depend(){
       if(Dep.__target__){
        this.subs.push(Dep.__target__)
       }
    }
    notify(){
         
        for (let index = 0; index < this.subs.length; index++) {
            const sub = this.subs[index];
            sub.update()
        }
    }
    

}
