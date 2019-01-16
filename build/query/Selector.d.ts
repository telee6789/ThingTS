import { BaseObject } from '../base-object/BaseObject';
import { SelectorStyle } from './SelectorStyle';
export declare class Selector {
    constructor();
    /**
     * 物体查询
     * @param {*} param 参数列表
     * @return {Array<BaseObject>} 查询结果，注意是以数组的方式提供，如果什么都没有找到就返回 []
     * @example
     * app.query('car01') 查询名称为car01的对象
     * app.query('.Thing') 查询类型为Thing的对象
     * app.query('#001') 查询id为001的对象
     * app.query('#id > 1000') 查询id>1000的对象，要求id为数值类型，不然无法识别出来
     * app.query('[prop=value]') 查询id为001的对象，支持*属性模糊匹配[Group=Outside*]
     * app.query('.Thing|[prop=value]') 满足条件1 或条件2,...
     * 字符串部分参考：http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp
     */
    query(param: any): (BaseObject)[];
    /**
     * 从当前查询结果中移除对象
     * @param {*}
     */
    remove(param: any): void;
    /**
     * 从当前查询结果中添加部分对象
     * @param {*} param 参数列表
     * @example
     * sel.add(sel).add('car01').add([obj1, obj2]).add(obj);
     */
    add(param: any): void;
    /**
     * 从当前查询结果中排除部分对象
     * @param {*} param 参数列表
     * @example
     * 可以 .not(sel).not('car01').not([obj1, obj2]).not(obj);
     */
    not(param: any): void;
    /**
     * 遍历对象
     * @param {Function} callback 回调函数
     */
    forEach(callback: () => any): void;
    /**
     * 转换成 JSON 字符串
     */
    toJSON(): void;
    /**
     * 转换成数组遍历对象
     * @return {Array} 数组
     */
    toArray(): any[];
    /**
     * 获取物体下标值
     * @param {BaseObject} object 物体
     * @return {Number} 下标值, -1 表示不存在
     */
    indexOf(object: BaseObject): number;
    /**
     * 反转数组
     * @return {Selector}
     */
    reverse(): Selector;
    /**
     * 是否拥有此物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    has(object: BaseObject): boolean;
    /**
     * 显示隐藏状态切换
     */
    flipVisible(): void;
    /**
     * 淡入
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    fadeIn(param: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 淡出
     * @param {Object} param
     * @param {Number} param.time 淡出时间
     * @param {Function} param.complete 完成回调
     */
    fadeOut(param: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 销毁选择器里的所有对象
     */
    destroyAll(): void;
    /**
     * 绑定事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} cb 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     */
    on(eventType: string, selector: string, userData: any, cb: () => any, tag?: string): void;
    /**
     * 解绑事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Function} cb 事件触发的回调函数
     */
    off(eventType: string, selector: string, cb: () => any): void;
    /**
     * 绑定事件(只触发一次)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} callback 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     * @example
     * app.one('click', '.Building', function(ev) {...});
     * app.one('click', '.Thing', {id: 1, hit: false}, function(ev) {...});
     * app.one('update', function(ev) {...});
     */
    one(eventType: string, selector: string, userData: any, callback: () => any, tag?: string): void;
    /**
     * 暂停事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    pauseEvent(eventType: string, selector: string, tag?: string): void;
    /**
     * 暂停事件响应(当前帧，下一帧恢复响应)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    pauseEventInFrame(eventType: string, selector: string, tag?: string): void;
    /**
     * 恢复事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    resumeEvent(eventType: string, selector: string, tag?: string): void;
    /**
     * 设置显示隐藏
     * @type {Boolean} value 是否显示
     */
    visible: boolean;
    /**
     * 设置是否能被拾取
     * @type {Boolean} value 是否能被拾取
     */
    pickable: boolean;
    /**
     * 获取效果集合
     * @type {SelectorStyle}
     */
    readonly style: SelectorStyle;
}
