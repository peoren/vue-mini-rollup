// @flow
// 判断该对象上面是否有该属性
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn(obj: Object,key: String): boolean{
    return hasOwnProperty.call(obj,key)
}
/**
* @description:用于设置属性默认值
* @param {*} obj 
* @param {*} key 
* @param {*} value 
* @param {*} enumerable 
* @return: 
*/
export  function def(obj: object,key: string,value: ?any,enumerable: ?boolean) {
    Object.defineProperty(obj,key,{
        value,
        enumerable,
        writable:true,
        configurable:true
    })
}
/**
* @description:寻找dom
* @param {*} el:dom的寻找字符串或者Element
* @return: 
*/
export function query(el: string | Element) {
    if(typeof el ==='string'){
        const selected = document.querySelector(el)
        return selected
    }else{
        return el
    }
}
// 只是一个功空函数
export function noop(){}
