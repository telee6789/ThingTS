/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:24:51
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:27:14
 * @Description: 包围盒
 * @property {Array<Number>} min 最小世界坐标
 * @property {Array<Number>} max 最大世界坐标
 * @property {Array<Number>} center 中心点世界坐标
 * @property {Array<Number>} size 包围盒大小
 * @property {Number} radius 包围盒半径
 */
export type BoundingBox = {
    min: number[];
    max: number[];
    center: number[];
    size: number[];
    radius: number;
};