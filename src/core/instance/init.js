// @flow
import { initState } from "./state"

let uid: number = 0

export function initMixin(Vue: Component){
    Vue.prototype._init=function (options: any) {
        const vm: Comment = this
        vm._uid = uid++
        // 合并option到$option上,这里略过
        vm.$options = options
        initState(vm)
    }
}


