import { BaseObject } from '../base-object/BaseObject';
import { Floor } from './Floor';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';
export declare class Room extends BaseObject {
    constructor(app: App);
    /**
     * 获取物体可使用的世界坐标位置
     * @param {Number|Array<Array<Number>>} number 物体总数|申请的位置大小[[width, height]]
     * @param {Number|Array<Array<Number>>} sizes 物体总数|申请的位置大小[[width, height]]
     * @param {Number|Array<Array<Number>>} holePoints 洞总数|洞的位置[[lt, rt, rb, lb]]
     * @return {Array<Array<Number>>} 世界坐标点数据列表
     */
    getAvaliablePositions(number: number | (number[])[], sizes: number | (number[])[], holePoints: number | (number[])[]): (number[])[];
    /**
     * 获取射线投影下的房间事件坐标
     * @param {Array<Number>} pos 世界坐标
     * @return {Array<Number>} 摄像投影后的世界坐标
     */
    getRayCastPosition(pos: number[]): number[];
    /**
     * 获取房间中心点(轴心点)世界坐标
     * @type {Array<Number>}
     */
    readonly labelPosition: number[];
    /**
     * 获取房间周长
     * @type {Number}
     */
    readonly perimeter: number;
    /**
     * 获取房间面积
     * @type {Number}
     */
    readonly area: number;
    /**
     * 获取天花板
     * @type {THING.BaseObject}
     */
    readonly ceiling: BaseObject;
    /**
     * 获取房顶
     * @type {THING.BaseObject}
     */
    readonly roof: BaseObject;
    /**
     * 获取房间地板节点
     * @type {THING.BaseObject}
     */
    readonly floorNode: BaseObject;
    /**
     * 获取所在楼层
     * @type {THING.Floor}
     */
    readonly floor: Floor;
    /**
     * 获取房间顶点的世界坐标信息
     * @type {Array<Number>}
     */
    readonly points: number[];
    /**
     * 获取房间内物体列表
     * @type {THING.Selector}
     */
    readonly things: Selector;
    /**
     * 设置门列表数据
     * @type {THING.Selector}
     */
    readonly doors: Selector;
}
