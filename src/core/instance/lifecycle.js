// @flow

// eslint-disable-next-line no-unused-vars
import { noop } from "@/shared/untils"

// eslint-disable-next-line no-unused-vars
import Watcher from "@/core/observer/Watcher"

// 1、该文件用来定义所有的生命周期，执行生命周期函数，
// 2、对应生命周期需要做的事
// 定义Vue上的生命周期
export function lifecycleMixin(Vue: Class<Component>){
//  TODO:
    Vue.prototype._update = function(){}
}

// 挂载
export function mountComponent(vm: Component,el: ?Element){
    // 更新el
    vm.$el = el
    // 执行beforeMount钩子函数
    callHook(vm,'beforeMount')

    // 创建更新函数
    // 源码中还做了一些在生产环境中埋点等等工作
    // eslint-disable-next-line no-unused-vars
    let updateComponent = ()=>{
        // _update实在上面的函数中定义
        // _render是在renderMixin中定义
        vm._update(vm._render())
    }
    // 通过Watcher监听，并执行updateComponent方法
    new Watcher(vm,updateComponent,noop,{},true)

    return vm
}

export function callHook(vm: Component,hook: string){
    // TODO:
    console.log(hook);
}
