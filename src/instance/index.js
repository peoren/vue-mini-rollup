// @flow


import {initMixin} from './init'

// 一切得开始
function Vue(options: Object) {
    this._init(options)
}
// 初始化vue
initMixin(Vue)
export default Vue
