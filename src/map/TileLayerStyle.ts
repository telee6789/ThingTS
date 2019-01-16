/*
 * @Author: kekeqy
 * @Date: 2018-12-11 15:13:24
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 15:28:38
 * @Description: 瓦片样式类
 */
export class TileLayerStyle {
    public constructor(options: {
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
    }) {
        throw new Error('未实现！');
    }
    public static readonly DARKBLUE: string;
    public static readonly DARKGREEN: string;
    public static readonly NORMAL: string;
    public static readonly CUSTOMCOLOR: string;

    /**
     * 瓦片亮度,默认值是1.0
     */
    public get brightness(): number {
        throw new Error('未实现！');
    }

    /**
     * 瓦片图层滤镜颜色,仅当tileStyle==CMAP.TileLayerStyle.CUSTOMCOLOR时生效,格式为[r,g,b]
     */
    public get customColor(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 瓦片样式模板,目前支持CMAP.TileLayerStyle.DARKBLUE,CMAP.TileLayerStyle.DARKGREEN,CMAP.TileLayerStyle.NORMAL,CMAP.TileLayerStyle.CUSTOMCOLOR
     */
    public get template(): string {
        throw new Error('未实现！');
    }
}