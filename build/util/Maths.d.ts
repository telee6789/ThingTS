export declare class Maths {
    /**
     * 坐标相加
     * @param v1 坐标
     * @param v2 坐标
     */
    static addVector3(v1: number[], v2: number[]): number[];
    /**
     * 数值截取[最小值, 最大值]
     * @param value 数值
     * @param min 最小值
     * @param max 最大值
     */
    static clamp(value: number, min: number, max: number): number;
    /**
     * 角度转弧度
     * @param degrees 角度
     */
    static degToRad(degrees: number): number;
    /**
     * 返回小数部分
     * @param x 数值
     */
    static fract(x: number): number;
    /**
     * 生成唯一的 UUID
     */
    static generateUUID(): string;
    /**
     * 获取面积
     * @param positions 坐标列表
     */
    static getArea(positions: number[]): number;
    /**
     * 获取两点间距离
     * @param v1 坐标
     * @param v2 坐标
     */
    static getDistance(v1: number[], v2: number[]): number;
    /**
     * 判断数值是否2次幂
     * @param num 数值
     */
    static isPowerOf2(num: number): boolean;
    /**
     * 线性插值
     * @param start 起始值
     * @param end 终止值
     * @param percent 百分比(0~1)
     */
    static lerp(start: number, end: number, percent: number): number;
    /**
     * 获取最大值
     * @param positions 坐标列表
     */
    static maxVector3(positions: number[]): number[];
    /**
     * 获取最小值
     * @param positions 坐标列表
     */
    static minVector3(positions: number[]): number[];
    /**
     * 检测坐标点是否在多边形内部
     * @param point 坐标点
     * @param vs 多边形区域
     */
    static pointInPolygon(point: number[], vs: number[][]): boolean;
    /**
     * 弧度转角度
     * @param radians 弧度
     */
    static radToDeg(radians: number): number;
    /**
     * 获取随机颜色
     */
    static randomColor(): number;
    /**
     * 获取随机浮点数值[最小值, 最大值]
     * @param min 最小值
     * @param max 最大值
     */
    static randomFloat(min: number, max: number): number;
    /**
     * 从数组随机挑选出任一元素
     * @param arr 数组
     */
    static randomFromArray(arr: any[]): any;
    /**
     * 产生随机下标值 [0, number - 1]
     * @param number 总数
     */
    static randomIndex(number: number): number;
    /**
     * 获取随机整数数值[最小值, 最大值]
     * @param min 最小值
     * @param max 最大值
     */
    static randomInt(min: number, max: number): number;
    /**
     * 随机产生坐标信息
     */
    static randomVector3(): number[];
    /**
     * 向上取数值的2次幂
     * @param v 数值
     */
    static roundUpPowerOf2(v: number): number;
    /**
     * 坐标相减
     * @param v1 坐标
     * @param v2 坐标
     */
    static subVector3(v1: number[], v2: number[]): number[];
    /**
     * 交换数组元素位置
     * @param arr 数组
     * @param index1 第一个元素位置
     * @param index2 第二个元素位置
     */
    static swapArray(arr: any[], index1: number, index2: number): any[];
    /**
     * 交换坐标 x, y 值
     * @param v 坐标
     */
    static swapXY(v: number[]): number[];
    /**
     * 数值取整
     * @param n 数值
     */
    static toInteger(n: number): number;
}
