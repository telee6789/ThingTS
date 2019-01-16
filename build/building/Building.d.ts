import { BaseObject } from '../base-object/BaseObject';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';
export declare class Building extends BaseObject {
    constructor(app: App);
    /**
     * 是否拥有外立面
     * @return {Boolean} 是否拥有外立面
     */
    hasFacades(): boolean;
    /**
     * 显示/隐藏屋顶(房顶)
     * @param {Boolean} show 显示/隐藏屋顶(房顶)
     */
    showRoof(show?: boolean): void;
    /**
     * 展开楼层
     * @param {Object} params 参数列表
     * @param {Number} params.time 耗时(毫秒)
     * @param {Number} params.length 距离
     * @param {Boolean} params.horzMode 是否水平模式展开
     * @param {Boolean} params.hideRoof 是否隐藏屋顶
     * @param {Function} params.complete 完成回调函数
     */
    expandFloors(params: {
        time: number;
        length: number;
        horzMode: boolean;
        hideRoof: boolean;
        complete: () => any;
    }): void;
    /**
     * 合并楼层
     * @param {Object} params 参数列表
     * @param {Number} params.time 耗时(毫秒)
     * @param {Function} params.complete 完成回调函数
     */
    unexpandFloors(params: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 获取楼层是否已经展开
     * @type {Boolean}
     */
    readonly expanded: boolean;
    /**
     * 获取电梯数据
     * @type {THING.Selector}
     */
    readonly elevators: Selector;
    /**
     * 获取楼梯数据
     * @type {THING.Selector}
     */
    readonly stairs: Selector;
    /**
     * 获取楼层数据
     * @type {THING.Selector}
     */
    readonly floors: Selector;
    /**
     * 获取外立面数据
     * @type {THING.Selector}
     */
    readonly facades: Selector;
    /**
     * 获取物体集合
     * @type {THING.Selector}
     */
    readonly things: Selector;
}
