/* eslint-disable no-unused-vars */
// @flow

import Dep from "./Dep"
export default class Watcher {
  constructor(target: object, expOrFn: string, callback: Function , options?: object,isRenderWatcher?: boolean) {
    //   存储信息
    this.target = target
    if(typeof expOrFn === 'function'){
      this.getter = expOrFn
    }else{

      this.getter = parsePath(expOrFn)
    }
    this.value= this.get()
    this.callback = callback
  }
  /**
  * @description:设置全局变量，出发getter
  * @param {type} 
  * @return: 
  */
  get() {
    // TODO:将_target_改为栈的方式
    Dep.__target__ = this
    // 得到当前值并且触发监听目标的getter函数，添加Watcher实例为依赖
    const value = this.getter(this.target)
    Dep.__target__ = null
    return value
  }
  update(){
      this.getAndInvoke(this.callback)
  }
  /**
  * @description:在收到更新通知后更新当前值，执行回调函数
  * @param {type} 
  * @return: 
  */
  getAndInvoke(callback: Function){
    const newValue = this.getter(this.target)
    const oldValue = this.value
    if(newValue !== oldValue || typeof newValue == 'object'){
        this.value = newValue
        callback.call(this.target,newValue,oldValue)
    }
  }
}
function parsePath(path: stirng): object {

  if (path) {
    return (object) => {
        let pathArray = path.split(".")
      for (let index = 0; index < pathArray.length; index++) {
        object = object[pathArray[index]]
      }
      return object
    }
  }
}
