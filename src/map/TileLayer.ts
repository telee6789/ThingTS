import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 15:17:50
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:57:04
 * @Description: 瓦片图层类
 */
export class TileLayer extends BaseObject {
    public constructor(app: App, param: {
        /**
         * 瓦片图层name
         */
        name: string,
        /**
         * 瓦片图地图服务url
         */
        url: string,
        /**
         * 瓦片图层样式
         */
        style: {
            /**
             * 预置的模板 支持CMAP.TileLayerStyle.DARKBLUE,CMAP.TileLayerStyle.DARKGREEN,CMAP.TileLayerStyle.NORMAL,CMAP.TileLayerStyle.CUSTOMCOLOR
             */
            template: string,
            /**
             * 当tileStyle==CMAP.TileLayerStyle.CUSTOMCOLOR时生效，代表瓦片图上的一层颜色滤镜，格式为[r,g,b],其中rgb为归一化的值
             */
            customColor: number[],
            /**
             * 地球亮度设置默认1.0
             */
            brightness: number
        }
    }) {
        super(app);
        throw new Error('未实现！');
    }
}