// @flow

import type Watcher from './watcher'
let uid = 0
/**
* @description:Class 依赖类
* @param {type} 
* @return: 
*/
export default class Dep {
    constructor() {
        this.id = ++uid
        this.subs = []//用于存储Watcher实例依赖    
    }
    depend() {
        if (Dep.__target__) {
            this.subs.push(Dep.__target__)
        }
    }
    notify() {

        for (let index = 0; index < this.subs.length; index++) {
            const sub = this.subs[index];
            sub.update()
        }
    }


}

// vue 2.x使用中等粒度也就是，组件为粒度进行监听，会存在父子组件嵌套的情况，由于调用render函数实在watcher中监听的时候调用，就会存在
// 存入父组件的wather,随后调用父组件对应的getter函数，触发render函数，发现有子组件就会进入子组件的getter函数，但是这时父组件的存入wathcer还没有进行完，
// 所以存在嵌套调用，需要用栈来存储watcher

// 初始化
Dep.__target__ = null
const targetStack = []
// 暴露出出入栈方法
export function pushTarget(target: ?Watcher){
    targetStack.push(target)
}
export function popTarget(){
    targetStack.pop()
    Dep.__target__ = targetStack[targetStack.length - 1]
}
