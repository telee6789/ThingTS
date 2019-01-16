import { Floor } from '../building/Floor';
import { BaseObject } from '../base-object/BaseObject';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:47:25
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:51:13
 * @Description: 寻找路径
 * @param {THING.Floor} startFloor 起始楼层
 * @param {Array<Number>} startPosition 起始世界坐标
 * @param {THING.Floor} endFloor 结束楼层
 * @param {Array<Number>} endPosition 结束世界坐标
 * @typedef {Object} PathSegment
 * @property {THING.Floor} floor 路径所在楼层
 * @property {Array<Array<Number>>} points 路径的世界坐标列表
 * @property {THING.BaseObject} entry 去往下一楼层的入口点(针对跨楼层寻路)
 * @memberof THING
 * @return {Array<THING.PathSegment>} 路径段数组
 */
export type PathSegment = {
    floor: Floor;
    points: (number[])[];
    entry: BaseObject;
};