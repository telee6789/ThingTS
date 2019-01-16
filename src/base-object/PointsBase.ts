import { BaseObject } from './BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:07:59
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:46:35
 * @Description: 此类可以用作各种带顶点编辑属性的模型，比如区域和水面的顶点编辑，主要封装了对顶点（编辑点）的操作行为，包括添加、删除，获取等。
 * @Description: 如果想使用这个类的特性，直接从此类派生即可，详细的写法可以参看Water类或者Region类的写法。
 */
export class PointsBase extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 清除所有节点
     */
    public clearPathPoints(): void {
        throw new Error('未实现！');
    }

    /**
     * 插入节点
     * @param {Number} index 节点下标
     * @param {Array} pos 节点坐标
     */
    public insertPoint(index: number, pos: any[]): void {
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
     * 获取节点
     * @param {Number} index 节点下标
     * @return {Array} 节点坐标
     */
    public getPoint(index: number): any[] {
        throw new Error('未实现！');
    }

    /**
     * 添加节点
     * @param {Array} pos 节点坐标
     * @return {Number} 节点下标
     */
    public addPoint(pos: any[]): number {
        throw new Error('未实现！');
    }

    /**
     * 添加多个节点
     * @param {Array} pos 多个节点坐标
     */
    public addPoints(pos: any[]): void {
        throw new Error('未实现！');
    }

    /**
     * 删除多个节点
     * @param {Number} index 开始下标
     * @param {Number} length 节点总数
     */
    public removePoint(index: number, length?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 同步拾取节点
     */
    public synPathNodes(): void {
        throw new Error('未实现！');
    }

    /**
     * 判断点是否在多边形内部
     */
    public inside(): void {
        throw new Error('未实现！');
    }

    /**
     * 是否显示详细信息
     * @type {Boolean} value
     */
    public set showDetail(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获取节点数据列表
     * @type {Array} 节点坐标列表
     */
    public get points(): any[] {
        throw new Error('未实现！');
    }

}