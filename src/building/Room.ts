import { BaseObject } from '../base-object/BaseObject';
import { Floor } from './Floor';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:34:54
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:47:39
 * @Description: 描述
 */
export class Room extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 获取物体可使用的世界坐标位置
     * @param {Number|Array<Array<Number>>} number 物体总数|申请的位置大小[[width, height]]
     * @param {Number|Array<Array<Number>>} sizes 物体总数|申请的位置大小[[width, height]]
     * @param {Number|Array<Array<Number>>} holePoints 洞总数|洞的位置[[lt, rt, rb, lb]]
     * @return {Array<Array<Number>>} 世界坐标点数据列表
     */
    public getAvaliablePositions(number: number | (number[])[], sizes: number | (number[])[], holePoints: number | (number[])[]): (number[])[] {
        throw new Error('未实现！');
    }

    /**
     * 获取射线投影下的房间事件坐标
     * @param {Array<Number>} pos 世界坐标
     * @return {Array<Number>} 摄像投影后的世界坐标
     */
    public getRayCastPosition(pos: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 获取房间中心点(轴心点)世界坐标
     * @type {Array<Number>}
     */
    public get labelPosition(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 获取房间周长
     * @type {Number}
     */
    public get perimeter(): number {
        throw new Error('未实现！');
    }

    /**
     * 获取房间面积
     * @type {Number}
     */
    public get area(): number {
        throw new Error('未实现！');
    }

    /**
     * 获取天花板
     * @type {THING.BaseObject}
     */
    public get ceiling(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取房顶
     * @type {THING.BaseObject}
     */
    public get roof(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取房间地板节点
     * @type {THING.BaseObject}
     */
    public get floorNode(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 获取所在楼层
     * @type {THING.Floor}
     */
    public get floor(): Floor {
        throw new Error('未实现！');
    }

    /**
     * 获取房间顶点的世界坐标信息
     * @type {Array<Number>}
     */
    public get points(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 获取房间内物体列表
     * @type {THING.Selector}
     */
    public get things(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 设置门列表数据
     * @type {THING.Selector}
     */
    public get doors(): Selector {
        throw new Error('未实现！');
    }

}