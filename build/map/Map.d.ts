import { BaseObject } from '../base-object/BaseObject';
import { LayerCollection } from './LayerCollection';
import { BaseLayerCollection } from './BaseLayerCollection';
import { TerrainLayer } from './TerrainLayer';
import { UserLayerCollection } from './UserLayerCollection';
import { Util } from './Util';
import { App } from '../core-object/App';
export declare class Map extends BaseObject {
    constructor(app: App, options: {
        /**
         * 类型'Map'
         */
        type: string;
        /**
         * 地形服务url,如果不传就不加地形,目前地形必须在map初始化时设置，设置后，会创建一个TerrainLayer并且赋值给Map.terrainLayer
         */
        terrainUrl: string;
        /**
         * 是否开启大气效果，默认为 true
         */
        atmosphere: string;
        /**
         * 地球渲染效果
         */
        style: string;
    });
    /**
     * 所有图层的集合,包含baseLayers,terrainLayer,useLayers
     */
    readonly allLayers: LayerCollection;
    /**
     * 设置地图的attribution，在地图右下角有一个小方盒子中呈现,如果不填写，会展示ThingJs的超链接，
     * 如果填写，会在ThingJS后添加，内置了几种常用的地图的attribution的写法，如果传Google，OSM，Carto，GeoQ，高德，系统会自动生成对应的attribution，当然也可以自定义attribution。
     */
    attribution: string;
    /**
     * 基础底图集合
     */
    readonly baseLayers: BaseLayerCollection;
    /**
     * 地形图层 目前地形图层只可以查看，不支持设置，只能在初始化Map的时候设置terrainLayer
     */
    readonly terrainLayer: TerrainLayer;
    /**
     * 所有Layer的集合
     */
    readonly userLayers: UserLayerCollection;
    /**
     * 地球相关工具,包括坐标转换,根据经纬度计算模型的angles
     */
    readonly util: Util;
    /**
     * 绕球飞
     * @param param
     */
    flyRotate(param: {
        /**
         * 旋转角度
         */
        angle: number;
        /**
         * 旋转总时间
         */
        time: number;
    }): void;
}
