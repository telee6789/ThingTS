export declare class TileLayerStyle {
    constructor(options: {
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
    });
    static readonly DARKBLUE: string;
    static readonly DARKGREEN: string;
    static readonly NORMAL: string;
    static readonly CUSTOMCOLOR: string;
    /**
     * 瓦片亮度,默认值是1.0
     */
    readonly brightness: number;
    /**
     * 瓦片图层滤镜颜色,仅当tileStyle==CMAP.TileLayerStyle.CUSTOMCOLOR时生效,格式为[r,g,b]
     */
    readonly customColor: number[];
    /**
     * 瓦片样式模板,目前支持CMAP.TileLayerStyle.DARKBLUE,CMAP.TileLayerStyle.DARKGREEN,CMAP.TileLayerStyle.NORMAL,CMAP.TileLayerStyle.CUSTOMCOLOR
     */
    readonly template: string;
}
