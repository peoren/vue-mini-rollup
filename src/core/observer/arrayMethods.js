// @flow
import { def } from "@/shared/untils"
const arrayMethods = Object.create(Array.prototype)
const methods = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"]
methods.map((methodName: string) => {
  const ori = arrayMethods[methodName]
  // 修改并执行方法
  def(
    arrayMethods,
    methodName,
    function () {
      const args = [...arguments] //argument本身不是数组，将argument数组化
    //   处理插入的数据，将插入的数据也加入监听
      let insertArg = []
      switch (methodName) {
        case "push":
        case "unshift":
          insertArg = args
          break
        case "splice":
          insertArg = args.slice(2)
          break

      }
      if(insertArg&&insertArg.length>0){
        this.__ob__.observeArray(insertArg)
      }

      // 执行数组的方法，恢复数组的功能
    const result =   ori.apply(this, args)
      return result
    },
    false
  )
})
export default arrayMethods
