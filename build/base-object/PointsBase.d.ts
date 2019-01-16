import { BaseObject } from './BaseObject';
import { App } from '../core-object/App';
export declare class PointsBase extends BaseObject {
    constructor(app: App);
    /**
     * 清除所有节点
     */
    clearPathPoints(): void;
    /**
     * 插入节点
     * @param {Number} index 节点下标
     * @param {Array} pos 节点坐标
     */
    insertPoint(index: number, pos: any[]): void;
    /**
     * 设置节点
     * @param {Number} index 节点下标
     * @param {Array} pos 节点坐标
     * @param {Boolean} 是否成功设置节点
     */
    setPoint(index: number, pos: any[], state: boolean): void;
    /**
     * 获取节点
     * @param {Number} index 节点下标
     * @return {Array} 节点坐标
     */
    getPoint(index: number): any[];
    /**
     * 添加节点
     * @param {Array} pos 节点坐标
     * @return {Number} 节点下标
     */
    addPoint(pos: any[]): number;
    /**
     * 添加多个节点
     * @param {Array} pos 多个节点坐标
     */
    addPoints(pos: any[]): void;
    /**
     * 删除多个节点
     * @param {Number} index 开始下标
     * @param {Number} length 节点总数
     */
    removePoint(index: number, length?: number): void;
    /**
     * 同步拾取节点
     */
    synPathNodes(): void;
    /**
     * 判断点是否在多边形内部
     */
    inside(): void;
    /**
     * 是否显示详细信息
     * @type {Boolean} value
     */
    showDetail: boolean;
    /**
     * 获取节点数据列表
     * @type {Array} 节点坐标列表
     */
    readonly points: any[];
}
