import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class Tile3dLayer extends BaseObject {
    constructor(app: App, param: {
        /**
         * 倾斜摄影图层名称
         */
        name: string;
        /**
         * 倾斜摄影服务url
         */
        url: string;
        /**
         * 倾斜摄影离地高度
         */
        height: Number;
    });
}
