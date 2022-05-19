// @flow
import Dep from "./Dep"
import observe from "./observe"
/**
* @description:用于数据劫持data下得key属性
* @param {type} 
* @return: 
*/
export default function defineReactive(data: object, key: string, val: any = data[key]) {
 let childOb = observe(val)
  const dep  = new Dep
  Object.defineProperty(data, key, {
    get() {
      // console.log("访问", key, val)
      if(Dep.__target__){
        dep.depend()
        if(childOb){
          // 这一部分dep依赖收集用于数组push的依赖和vue的$set方法和$delete
          childOb.dep.depend()
          // 未处理数组的情况
        }
      }
      return val
    },
    set(newV) {
      // console.log("改写", key, newV)
      if (newV === val) {
        return
      }
      val = newV

     childOb= observe(newV)
      // 发布更新通知
      dep.notify()
    },
  })
}
