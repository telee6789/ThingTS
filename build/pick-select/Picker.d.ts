import { Selector } from '../query/Selector';
import { BaseObject } from '../base-object/BaseObject';
export declare class Picker {
    constructor();
    /**
     * 开启/禁用拾取功能
     * @type {Boolean}
     */
    enabled: boolean;
    /**
     * 开启/禁用鼠标拾取功能
     * @type {Boolean}
     */
    mouseMovePicking: boolean;
    /**
     * 开启区域选择功能
     * @type {Boolean}
     */
    areaPicking: boolean;
    /**
     * 开启实时框选功能
     * @type {number}
     */
    areaPickType: number;
    /**
     * 设置框选候选集合, 因为框选速度较慢，所以这里需要先提供一个框选的候选列表
     * @type {THING.Selector}
     */
    readonly candidates: Selector;
    /**
     * 以当前摄像机的位置拾取物体, 按照距离从近到远返回物体列表信息
     * @param {Number} x 屏幕x坐标 (不提供则使用当前摄影机位置进行拾取)
     * @param {Number} y 屏幕y坐标 (不提供则使用当前摄影机位置进行拾取)
     * @return {Array<THING.BaseObject>} 物体列表
     */
    pickObjects(x: number, y: number): (BaseObject)[];
    /**
     * 以当前摄像机的数据拾取对应的场景世界坐标
     * @param {Number} x 屏幕x坐标 (不提供则使用当前摄影机位置进行拾取)
     * @param {Number} y 屏幕y坐标 (不提供则使用当前摄影机位置进行拾取)
     * @param {Array<Number>} offset? 屏幕偏移量
     * @return {Array<Number>} 世界坐标
     */
    pickWorldPosition(x: number, y: number, offset?: number[]): number[];
}
