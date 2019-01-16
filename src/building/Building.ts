import { BaseObject } from '../base-object/BaseObject';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:55:14
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:46:15
 * @Description: 建筑
 */
export class Building extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 是否拥有外立面
     * @return {Boolean} 是否拥有外立面
     */
    public hasFacades(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏屋顶(房顶)
     * @param {Boolean} show 显示/隐藏屋顶(房顶)
     */
    public showRoof(show?: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 展开楼层
     * @param {Object} params 参数列表
     * @param {Number} params.time 耗时(毫秒)
     * @param {Number} params.length 距离
     * @param {Boolean} params.horzMode 是否水平模式展开
     * @param {Boolean} params.hideRoof 是否隐藏屋顶
     * @param {Function} params.complete 完成回调函数
     */
    public expandFloors(params: {
        time: number;
        length: number;
        horzMode: boolean;
        hideRoof: boolean;
        complete: () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 合并楼层
     * @param {Object} params 参数列表
     * @param {Number} params.time 耗时(毫秒)
     * @param {Function} params.complete 完成回调函数
     */
    public unexpandFloors(params: {
        time: number;
        complete: () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层是否已经展开
     * @type {Boolean}
     */
    public get expanded(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 获取电梯数据
     * @type {THING.Selector}
     */
    public get elevators(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取楼梯数据
     * @type {THING.Selector}
     */
    public get stairs(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层数据
     * @type {THING.Selector}
     */
    public get floors(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取外立面数据
     * @type {THING.Selector}
     */
    public get facades(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取物体集合
     * @type {THING.Selector}
     */
    public get things(): Selector {
        throw new Error('未实现！');
    }

}