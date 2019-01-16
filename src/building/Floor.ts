import { BaseObject } from '../base-object/BaseObject';
import { Selector } from '../query/Selector';
import { Building } from './Building';
import { Room } from './Room';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:21:12
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:47:27
 * @Description: 楼层
 */
export class Floor extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏屋顶
     * @param {Boolean} visible 显示/隐藏屋顶
     */
    public showRoof(visible?: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏天花板
     * @param {Boolean} visible 显示/隐藏天花板
     */
    public showCeiling(visible?: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 以局部坐标点获取对应的房间信息
     * @param {Array<Number>} localPosition 局部坐标
     * @return {THING.Room} 房间数据
     */
    public getRoomFromLocalPosition(localPosition: number[]): Room {
        throw new Error('未实现！');
    }

    /**
     * 获取所在建筑
     * @type {THING.Building}
     */
    public get building(): Building {
        throw new Error('未实现！');
    }

    /**
     * 获取层数(从1开始)
     * @type {Number}
     */
    public get levelNumber(): number {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层物体集合
     * @type {THING.Selector}
     */
    public get things(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层门集合
     * @type {THING.Selector}
     */
    public get doors(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层楼梯集合
     * @type {THING.Selector}
     */
    public get stairs(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层房间集合
     * @type {THING.Selector}
     */
    public get rooms(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取杂物节点
     * @type {THING.BaseObject}
     */
    public get misc(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层地板
     * @type {THING.BaseObject}
     */
    public plan(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层墙体
     * @type {THING.BaseObject}
     */
    public get wall(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取屋顶
     * @type {THING.BaseObject}
     */
    public get roof(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取天花板
     * @type {THING.BaseObject}
     */
    public get ceiling(): BaseObject {
        throw new Error('未实现！');
    }

}