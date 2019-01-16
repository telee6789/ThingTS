import { BaseObject } from '../base-object/BaseObject';
import { Selector } from '../query/Selector';
import { Building } from './Building';
import { Room } from './Room';
import { App } from '../core-object/App';
export declare class Floor extends BaseObject {
    constructor(app: App);
    /**
     * 显示/隐藏屋顶
     * @param {Boolean} visible 显示/隐藏屋顶
     */
    showRoof(visible?: boolean): void;
    /**
     * 显示/隐藏天花板
     * @param {Boolean} visible 显示/隐藏天花板
     */
    showCeiling(visible?: boolean): void;
    /**
     * 以局部坐标点获取对应的房间信息
     * @param {Array<Number>} localPosition 局部坐标
     * @return {THING.Room} 房间数据
     */
    getRoomFromLocalPosition(localPosition: number[]): Room;
    /**
     * 获取所在建筑
     * @type {THING.Building}
     */
    readonly building: Building;
    /**
     * 获取层数(从1开始)
     * @type {Number}
     */
    readonly levelNumber: number;
    /**
     * 获取楼层物体集合
     * @type {THING.Selector}
     */
    readonly things: Selector;
    /**
     * 获取楼层门集合
     * @type {THING.Selector}
     */
    readonly doors: Selector;
    /**
     * 获取楼层楼梯集合
     * @type {THING.Selector}
     */
    readonly stairs: Selector;
    /**
     * 获取楼层房间集合
     * @type {THING.Selector}
     */
    readonly rooms: Selector;
    /**
     * 获取杂物节点
     * @type {THING.BaseObject}
     */
    readonly misc: BaseObject;
    /**
     * 获取楼层地板
     * @type {THING.BaseObject}
     */
    plan(): BaseObject;
    /**
     * 获取楼层墙体
     * @type {THING.BaseObject}
     */
    readonly wall: BaseObject;
    /**
     * 获取屋顶
     * @type {THING.BaseObject}
     */
    readonly roof: BaseObject;
    /**
     * 获取天花板
     * @type {THING.BaseObject}
     */
    readonly ceiling: BaseObject;
}
