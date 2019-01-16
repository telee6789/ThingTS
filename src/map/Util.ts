/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:56:42
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 15:41:09
 * @Description: 地图相关的工具类
 */
export class Util {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 经纬度转三维中的世界坐标
     * @param lonLat [经度,纬度]
     * @param h 离地高度 默认0
     */
    public static convertLonlat2World(lonLat: number[], h: number = 0): number[] {
        throw new Error('未实现！');
    }

    /**
     * 合并数组
     * @param objs 要合并的Object
     */
    public static extend(objs: Object[]): Object {
        throw new Error('未实现！');
    }

    /**
     * 经纬度坐标转墨卡托投影
     * @param lonLat [经度，纬度]
     */
    public static lonlat2Mercator(lonLat: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 经纬度组转三维中的世界坐标
     * @param arr [[经度,纬度],[经度,纬度],[经度,纬度]...]
     * @param r 距离球心的半径默认为 6378000
     */
    public static lonlats2World(arr: number[][], r: number = 6378000): number[] {
        throw new Error('未实现！');
    }

    /**
     * 墨卡托投影转经纬度坐标
     * @param mercator [x,y]
     */
    public static mercator2Lonlat(mercator: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 根据世界坐标得到贴地的angles
     * @param pos 位置坐标
     * @param angle 地图上的旋转角度
     */
    public static position2angles(pos: number[], angle: number): number[] {
        throw new Error('未实现！');
    }

    /**
     * 三维中的世界坐标 转 经纬度
     * @param pos [x,y,z]
     * @param earthCenter 默认为[0,0,0]，地球的中心点
     */
    public static world2Lonlat(pos: number[], earthCenter: number[] = [0, 0, 0]): number[] {
        throw new Error('未实现！');
    }
}