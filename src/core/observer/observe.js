// @flow
import Observer from './Observer'
import { hasOwn } from '@/shared/untils';
/**
* @description:观察函数，用于添加观察者,并添加标记 
* @param {*}  value:需要观察的对象
* @return: 
*/
export default function observe (value: Object): Observer{
    
    if(!( value instanceof Object)){
        return
    }
    let ob: ?Observer;
    if(hasOwn(value,'__ob__')){
        // console.log('设置__ob__');
        ob = new Observer(value)
       
    }else{
        ob=value.__ob__
    }

    return ob
}
