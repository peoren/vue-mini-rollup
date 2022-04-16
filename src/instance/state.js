export function initState(vm) {
    const opts = vm.$options
    //TODO: if(opts.props) initProps(vm,opts.props)
    //TODO: if(opts.methods) initMethods(vm,opts.methods)
    if (opts.data) initData(vm)
    //TODO: if(opts.computed) initComputed(vm,opts.computed)
    //TODO: if(opts.watch) initWatch(vm,opts.watch)
}
function initData(vm:Vue) {
    let data = vm.$options.data
    // 处理data为funtion得情况
    if (typeof data === 'function') {
        data = getData(data, vm)
    }
    vm._data = data
    // 检测data的属性是否和Methods和props中的属性重复
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    
}
function getData(data, vm) {
    try {
        // 原本中使用data.call(vm,vm),不明白为什么会传vm
        return data.call(vm, vm)
    } catch (e) {
        throw new Error('data创建错误')
        return {}
    }
}
// methods和props相互检查在initMethods中检查
