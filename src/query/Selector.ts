import { BaseObject } from '../base-object/BaseObject';
import { SelectorStyle } from './SelectorStyle';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 13:10:25
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-10 13:47:42
 * @Description: 选择器
 * @see: http://api.jquery.com/category/traversing/
 */
export class Selector {
    public constructor() {
        throw new Error('未实现！');
    }

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
    public query(param: any): (BaseObject)[] {
        throw new Error('未实现！');
    }

    /**
     * 从当前查询结果中移除对象
     * @param {*}
     */
    public remove(param: any): void {
        throw new Error('未实现！');
    }

    /**
     * 从当前查询结果中添加部分对象
     * @param {*} param 参数列表
     * @example
     * sel.add(sel).add('car01').add([obj1, obj2]).add(obj);
     */
    public add(param: any): void {
        throw new Error('未实现！');
    }

    /**
     * 从当前查询结果中排除部分对象
     * @param {*} param 参数列表
     * @example
     * 可以 .not(sel).not('car01').not([obj1, obj2]).not(obj);
     */
    public not(param: any): void {
        throw new Error('未实现！');
    }

    /**
     * 遍历对象
     * @param {Function} callback 回调函数
     */
    public forEach(callback: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 转换成 JSON 字符串
     */
    public toJSON(): void {
        throw new Error('未实现！');
    }

    /**
     * 转换成数组遍历对象
     * @return {Array} 数组
     */
    public toArray(): any[] {
        throw new Error('未实现！');
    }

    /**
     * 获取物体下标值
     * @param {BaseObject} object 物体
     * @return {Number} 下标值, -1 表示不存在
     */
    public indexOf(object: BaseObject): number {
        throw new Error('未实现！');
    }

    /**
     * 反转数组
     * @return {Selector}
     */
    public reverse(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 是否拥有此物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    public has(object: BaseObject): boolean {
        throw new Error('未实现！');
    }

    /**
     * 显示隐藏状态切换
     */
    public flipVisible(): void {
        throw new Error('未实现！');
    }

    /**
     * 淡入
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    public fadeIn(param: {
        time: number;
        complete: () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 淡出
     * @param {Object} param
     * @param {Number} param.time 淡出时间
     * @param {Function} param.complete 完成回调
     */
    public fadeOut(param: {
        time: number;
        complete: () => any;
    }): void {

    }

    /**
     * 销毁选择器里的所有对象
     */
    public destroyAll(): void {
        throw new Error('未实现！');
    }

    /**
     * 绑定事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} cb 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     */
    public on(eventType: string, selector: string, userData: any, cb: () => any, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 解绑事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Function} cb 事件触发的回调函数
     */
    public off(eventType: string, selector: string, cb: () => any): void {
        throw new Error('未实现！');
    }

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
    public one(eventType: string, selector: string, userData: any, callback: () => any, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 暂停事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public pauseEvent(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 暂停事件响应(当前帧，下一帧恢复响应)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public pauseEventInFrame(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 恢复事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public resumeEvent(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 设置显示隐藏
     * @type {Boolean} value 是否显示
     */
    public set visible(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置是否能被拾取
     * @type {Boolean} value 是否能被拾取
     */
    public set pickable(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获取效果集合
     * @type {SelectorStyle}
     */
    public get style(): SelectorStyle {
        throw new Error('未实现！');
    }

}