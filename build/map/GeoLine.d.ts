import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class GeoLine extends BaseObject {
    constructor(app: App, option: {
        /**
         * 类型'GeoLine'
         */
        type: string;
        /**
         * 线名称
         */
        name: string;
        /**
         * 道路数据例如：[[116.4405, 39.9612],[116.4408, 39.9613],[116.4409, 39.9615]]
         */
        coordinates: string;
        /**
         * 创建的道路属性
         */
        userData: string;
        /**
         * GeoLine的渲染样式
         */
        renderer: string;
    });
}
