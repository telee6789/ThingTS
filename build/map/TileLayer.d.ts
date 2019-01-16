import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class TileLayer extends BaseObject {
    constructor(app: App, param: {
        /**
         * 瓦片图层name
         */
        name: string;
        /**
         * 瓦片图地图服务url
         */
        url: string;
        /**
         * 瓦片图层样式
         */
        style: {
            /**
             * 预置的模板 支持CMAP.TileLayerStyle.DARKBLUE,CMAP.TileLayerStyle.DARKGREEN,CMAP.TileLayerStyle.NORMAL,CMAP.TileLayerStyle.CUSTOMCOLOR
             */
            template: string;
            /**
             * 当tileStyle==CMAP.TileLayerStyle.CUSTOMCOLOR时生效，代表瓦片图上的一层颜色滤镜，格式为[r,g,b],其中rgb为归一化的值
             */
            customColor: number[];
            /**
             * 地球亮度设置默认1.0
             */
            brightness: number;
        };
    });
}
