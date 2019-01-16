import { BaseObject } from '../base-object/BaseObject';
import { LayerCollection } from './LayerCollection';
import { BaseLayerCollection } from './BaseLayerCollection';
import { TerrainLayer } from './TerrainLayer';
import { UserLayerCollection } from './UserLayerCollection';
import { Util } from './Util';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:38:05
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:55:57
 * @Description: 地球组件创建入口
 */
export class Map extends BaseObject {
    public constructor(app: App, options: {
        /**
         * 类型'Map'
         */
        type: string,
        /**
         * 地形服务url,如果不传就不加地形,目前地形必须在map初始化时设置，设置后，会创建一个TerrainLayer并且赋值给Map.terrainLayer
         */
        terrainUrl: string,
        /**
         * 是否开启大气效果，默认为 true
         */
        atmosphere: string
        /**
         * 地球渲染效果
         */
        style: string
    }) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 所有图层的集合,包含baseLayers,terrainLayer,useLayers
     */
    public readonly allLayers: LayerCollection;

    /**
     * 设置地图的attribution，在地图右下角有一个小方盒子中呈现,如果不填写，会展示ThingJs的超链接，
     * 如果填写，会在ThingJS后添加，内置了几种常用的地图的attribution的写法，如果传Google，OSM，Carto，GeoQ，高德，系统会自动生成对应的attribution，当然也可以自定义attribution。
     */
    public set attribution(value: string) {
        throw new Error('未实现！');
    }

    /**
     * 基础底图集合
     */
    public get baseLayers(): BaseLayerCollection {
        throw new Error('未实现！');
    }

    /**
     * 地形图层 目前地形图层只可以查看，不支持设置，只能在初始化Map的时候设置terrainLayer
     */
    public get terrainLayer(): TerrainLayer {
        throw new Error('未实现！');
    }

    /**
     * 所有Layer的集合
     */
    public get userLayers(): UserLayerCollection {
        throw new Error('未实现！');
    }

    /**
     * 地球相关工具,包括坐标转换,根据经纬度计算模型的angles
     */
    public get util(): Util {
        throw new Error('未实现！');
    }

    /**
     * 绕球飞
     * @param param 
     */
    public flyRotate(param: {
        /**
         * 旋转角度
         */
        angle: number
        /**
         * 旋转总时间
         */
        time: number
    }): void {
        throw new Error('未实现！');
    }
}