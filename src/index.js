// @flow
import Vue from "./core";
import { query } from '@/shared/untils'
// 此文件作为入口文件，等于vue 的entry-runtime-compiler入口文件

// 这里会对源码src\platforms\web\runtime\index.js的内容和入口文件合并，直接拿到生命周期文件中的mountComponent
import { mountComponent } from '@/core/instance/lifecycle.js'
import { compileToFunctions } from '@/compiler/index.js'
Vue.prototype.$mount = function (el?: string | Element) {

    el = el && query(el)
    const options = this.$options
    // 1、判断是否render函数，对应用户直接在实例化中传入render函数
    if (!options.render) {
        // 2、这里对是否有templete进行判断，对应传入template
        let template = options.template
        if (template) {
            // 如果有就处理template
        } else {
            // 处理初始化传入的el，并转换为template
            template = getOuterHTML(el)
        }
        // tempalet编译成render函数
        if (template) {
            const { render } = compileToFunctions(template)
            options.render = render
        }
    }
    // 到这一步vm.$options.render函数上已经有内容了,传入生命周期的挂载函数进行执行
    return mountComponent(this, el)

}
/**
* @description:获取dom，并转化成dom字符串
* @param {*} el:Element 
* @return: 
*/
function getOuterHTML(el: Element): string {
    if (el.outerHTML) {
        return el.outerHTML
    } else {
        // 如果该元素在body中是根元素,el.outerHTML就无法获取（outerHTML只能获取有父元素的元素）
        // 做兼容处理
        const container = document.createElement('div')
        container.appendChild(el.cloneNode(true))
        return container.innerHTML
    }
}
export default Vue
