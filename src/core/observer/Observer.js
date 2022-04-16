// @flow
import {def} from '@/shared/untils'
import defineReactive from './defineReactive'
import arrayMethods from './arrayMethods'
import observe from './observe';
import Dep from './Dep';
/**
* @description:观察者类，用于给该value对象每一个属性加上响应式
* @param {*} value:观察的对象 
* @return: 
*/
export default class Observer {
    constructor(value: object | array) {
        // 设置__ob__不能被枚举出来
        // __ob__用于标记该变量是响应式
        this.dep = new Dep()
        def(value, '__ob__', this, false)
        if (Array.isArray(value)) {
            // console.log('数组改写');
            // 改变原数组得原型，指向修改后的数组原型
            Object.setPrototypeOf(value, arrayMethods)
            // 用于遍历数组每一项，监听数组其中的对象（并不会监听数组中的非对象元素）
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    walk(value: object) {
        for (const iterator in value) {
            // console.log('Observer',value);
            defineReactive(value, iterator)
        }
    }
    // 观察数组，监视其中的对象元素
    observeArray(array: array) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            observe(element)
        }
    }
}
