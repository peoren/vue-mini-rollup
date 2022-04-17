// @flow

export function renderMixin(Vue: Class<Component>){
    Vue.prototype._render = function(){}
}
