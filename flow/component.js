declare interface Component{
    // 内部数据
    options: Object,

    // 公共属性
    $options: Object,
    $el: any,
    $data: Object,
    $props: Object,

    // 私有数据
    _data: Object,
    _uid: Number
}
