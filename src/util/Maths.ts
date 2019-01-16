/*
 * @Author: kekeqy
 * @Date: 2018-12-10 16:28:54
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-12 16:39:00
 * @Description: 数学库
 */
export class Maths {
    /**
     * 坐标相加
     * @param v1 坐标
     * @param v2 坐标
     */
    public static addVector3(v1: number[], v2: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 数值截取[最小值, 最大值]
     * @param value 数值
     * @param min 最小值
     * @param max 最大值
     */
    public static clamp(value: number, min: number, max: number): number {
        throw new Error('未实现！');
    }

    /**
     * 角度转弧度
     * @param degrees 角度
     */
    public static degToRad(degrees: number): number {
        throw new Error('未实现！');
    }

    /**
     * 返回小数部分
     * @param x 数值
     */
    public static fract(x: number): number {
        throw new Error('未实现！');
    }

    /**
     * 生成唯一的 UUID
     */
    public static generateUUID(): string {
        throw new Error('未实现！');
    }

    /**
     * 获取面积
     * @param positions 坐标列表
     */
    public static getArea(positions: number[]): number {
        throw new Error('未实现！');
    }

    /**
     * 获取两点间距离
     * @param v1 坐标
     * @param v2 坐标
     */
    public static getDistance(v1: number[], v2: number[]): number {
        throw new Error('未实现！');
    }

    /**
     * 判断数值是否2次幂
     * @param num 数值
     */
    public static isPowerOf2(num: number): boolean {
        throw new Error('未实现！');
    }

    /**
     * 线性插值
     * @param start 起始值
     * @param end 终止值
     * @param percent 百分比(0~1)
     */
    public static lerp(start: number, end: number, percent: number): number {
        throw new Error('未实现！');
    }

    /**
     * 获取最大值
     * @param positions 坐标列表
     */
    public static maxVector3(positions: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 获取最小值
     * @param positions 坐标列表
     */
    public static minVector3(positions: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 检测坐标点是否在多边形内部
     * @param point 坐标点
     * @param vs 多边形区域
     */
    public static pointInPolygon(point: number[], vs: number[][]): boolean {
        throw new Error('未实现！');
    }

    /**
     * 弧度转角度
     * @param radians 弧度
     */
    public static radToDeg(radians: number): number {
        throw new Error('未实现！');
    }

    /**
     * 获取随机颜色
     */
    public static randomColor(): number {
        throw new Error('未实现！');
    }

    /**
     * 获取随机浮点数值[最小值, 最大值]
     * @param min 最小值
     * @param max 最大值
     */
    public static randomFloat(min: number, max: number): number {
        throw new Error('未实现！');
    }

    /**
     * 从数组随机挑选出任一元素
     * @param arr 数组
     */
    public static randomFromArray(arr: any[]): any {
        throw new Error('未实现！');
    }

    /**
     * 产生随机下标值 [0, number - 1]
     * @param number 总数
     */
    public static randomIndex(number: number): number {
        throw new Error('未实现！');
    }

    /**
     * 获取随机整数数值[最小值, 最大值]
     * @param min 最小值
     * @param max 最大值
     */
    public static randomInt(min: number, max: number): number {
        throw new Error('未实现！');
    }

    /**
     * 随机产生坐标信息
     */
    public static randomVector3(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 向上取数值的2次幂
     * @param v 数值
     */
    public static roundUpPowerOf2(v: number): number {
        throw new Error('未实现！');
    }

    /**
     * 坐标相减
     * @param v1 坐标
     * @param v2 坐标
     */
    public static subVector3(v1: number[], v2: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 交换数组元素位置
     * @param arr 数组
     * @param index1 第一个元素位置
     * @param index2 第二个元素位置
     */
    public static swapArray(arr: any[], index1: number, index2: number): any[] {
        throw new Error('未实现！');
    }

    /**
     * 交换坐标 x, y 值
     * @param v 坐标
     */
    public static swapXY(v: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 数值取整
     * @param n 数值
     */
    public static toInteger(n: number): number {
        throw new Error('未实现！');
    }
}