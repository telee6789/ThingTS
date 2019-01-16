import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:32:57
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:50:16
 * @Description: 轨迹线
 */
export class Line extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 序列化
     * @return {Object} JSON 数据
     */
    public toJSON(): any {
        throw new Error('未实现！');
    }

    /**
     * 增加节点
     * @param {Array<number>} pos 坐标点
     */
    public addPoint(pos: number[]): void {
        throw new Error('未实现！');
    }

    /**
     * 设置节点
     * @param {Number} index 节点下标
     * @param {Array} pos 节点坐标
     * @param {Boolean} 是否成功设置节点
     */
    public setPoint(index: number, pos: any[], state: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 删除节点
     * @param {Number} index 下标
     */
    public removePoint(index: number): void {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏线段
     * @type {boolean}
     */
    public set showLines(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏轨迹点
     * @type {boolean}
     */
    public set showPoints(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获得节点信息
     * @type {Array} 节点列表
     */
    public get points(): any[] {
        throw new Error('未实现！');
    }

}