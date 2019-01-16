import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class GeoBuilding extends BaseObject {
    constructor(app: App, options: {
        /**
         * 类型'GeoBuilding'
         */
        type: string;
        /**
         * 楼名称
         */
        name: string;
        /**
         * 楼数据例如：[[116.4408957710001, 39.96151952200006],[116.4408957710001, 39.96151952200006]]
         */
        coordinates: number[];
        /**
         * 楼的高度 单位:米
         */
        height: number;
        /**
         * 楼属性数据
         */
        userData: Object;
        /**
         * 设置楼宇样式,目前仅支持在楼宇初始化的时候设置
         */
        renderer: Object;
        /**
         * 是否合并为一个Mesh,默认false
         */
        combine: Object;
    });
    /**
     * 设置楼宇的高度 单位：米
     */
    height: number;
}
