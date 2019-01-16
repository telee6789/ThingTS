import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class Line extends BaseObject {
    constructor(app: App);
    /**
     * 序列化
     * @return {Object} JSON 数据
     */
    toJSON(): any;
    /**
     * 增加节点
     * @param {Array<number>} pos 坐标点
     */
    addPoint(pos: number[]): void;
    /**
     * 设置节点
     * @param {Number} index 节点下标
     * @param {Array} pos 节点坐标
     * @param {Boolean} 是否成功设置节点
     */
    setPoint(index: number, pos: any[], state: boolean): void;
    /**
     * 删除节点
     * @param {Number} index 下标
     */
    removePoint(index: number): void;
    /**
     * 显示/隐藏线段
     * @type {boolean}
     */
    showLines: boolean;
    /**
     * 显示/隐藏轨迹点
     * @type {boolean}
     */
    showPoints: boolean;
    /**
     * 获得节点信息
     * @type {Array} 节点列表
     */
    readonly points: any[];
}
