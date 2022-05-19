/* eslint-disable no-unused-vars */

// @flow

import Dep from "./Dep"
import { pushTarget, popTarget } from "./Dep"
let uid = 0
export default class Watcher {
  constructor(target: object, expOrFn: string, callback: Function, options?: object, isRenderWatcher?: boolean) {
    //   存储信息
    this.target = target
    this.id = ++uid
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {

      this.getter = parsePath(expOrFn)
    }
    this.value = this.get()
    this.callback = callback
  }
  /**
  * @description:设置全局变量，出发getter
  * @param {type} 
  * @return: 
  */
  get() {
    let value
    // 入栈
    pushTarget(this)
    // 得到当前值并且触发监听目标的getter函数，添加Watcher实例为依赖
    try {
      // TODO:未处理getter为函数的情况
      value = this.getter(this.target)
    } catch (error) {
      console.error(error);
      throw error
    } finally {
      // 出栈
      popTarget()
    }
    return value

  }
  update() {
    this.getAndInvoke(this.callback)
  }
  /**
  * @description:在收到更新通知后更新当前值，执行回调函数
  * @param {type} 
  * @return: 
  */
  getAndInvoke(callback: Function) {
    const newValue = this.getter(this.target)
    const oldValue = this.value
    if (newValue !== oldValue || typeof newValue == 'object') {
      this.value = newValue
      callback.call(this.target, newValue, oldValue)
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
