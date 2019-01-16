export declare class Util {
    constructor();
    /**
     * 经纬度转三维中的世界坐标
     * @param lonLat [经度,纬度]
     * @param h 离地高度 默认0
     */
    static convertLonlat2World(lonLat: number[], h?: number): number[];
    /**
     * 合并数组
     * @param objs 要合并的Object
     */
    static extend(objs: Object[]): Object;
    /**
     * 经纬度坐标转墨卡托投影
     * @param lonLat [经度，纬度]
     */
    static lonlat2Mercator(lonLat: number[]): number[];
    /**
     * 经纬度组转三维中的世界坐标
     * @param arr [[经度,纬度],[经度,纬度],[经度,纬度]...]
     * @param r 距离球心的半径默认为 6378000
     */
    static lonlats2World(arr: number[][], r?: number): number[];
    /**
     * 墨卡托投影转经纬度坐标
     * @param mercator [x,y]
     */
    static mercator2Lonlat(mercator: number[]): number[];
    /**
     * 根据世界坐标得到贴地的angles
     * @param pos 位置坐标
     * @param angle 地图上的旋转角度
     */
    static position2angles(pos: number[], angle: number): number[];
    /**
     * 三维中的世界坐标 转 经纬度
     * @param pos [x,y,z]
     * @param earthCenter 默认为[0,0,0]，地球的中心点
     */
    static world2Lonlat(pos: number[], earthCenter?: number[]): number[];
}
