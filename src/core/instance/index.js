// @flow

import {initMixin} from './init'
import { lifecycleMixin } from './lifecycle'
import { renderMixin } from './render'

// 一切得开始
function Vue(options: Object) {
    this._init(options)
}
// 初始化vue
initMixin(Vue)
// 初始化生命周期
lifecycleMixin(Vue)
// 初始化render
renderMixin(Vue)
export default Vue
