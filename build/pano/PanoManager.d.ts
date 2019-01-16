import { Campus } from "../building/Campus";
import { App } from '../core-object/App';
export declare class PanoManager {
    /**
     * 切换全景图
     * @param panoID 全景图id
     * @param h 打开全景图的初始视角的水平偏移
     * @param v 打开全进图的初始视角的垂直偏移
     */
    static changePano(panoID: string, h: number, v: number): void;
    /**
     * 根据全景图的位置和模型对象计算模型在全景图中的参数
     * @param panoPosition 全景图所在的位置
     * @param modelPosition 模型所在的位置
     * @param modelAngles 模型的旋转
     */
    static compute3DObjectProperties(panoPosition: number[], modelPosition: number[], modelAngles: number[]): any;
    /**
     * 在全景图中创建3D对象
     * @param name 3D对象的名称
     * @param url 物体模型资源url
     * @param anim 开启的动画名称，可为null
     * @param properties
     */
    static create3DObject(name: string, url: string, anim: string, properties: {
        /**
         * 模型所在位置：水平坐标
         */
        h: number;
        /**
         * 模型所在位置：垂直坐标
         */
        v: number;
        /**
         * 模型所在位置：深度
         */
        depth: number;
        /**
         * 缩放
         */
        scale: number;
        /**
         * 模型沿x旋转
         */
        rx: number;
        /**
         * 模型沿y旋转
         */
        ry: number;
        /**
         * 模型沿z旋转
         */
        rz: number;
    }): void;
    /**
     * 创建全景图播放器，暂时只允许创建一个全景图
     * @param panoData 全进图配置数据
     * @param panelOptions
     * @param panoOptions
     * @param app 用来接收事件触发的app对象，可为null。
     * @param callback 全景图播放器初始化完毕，并且加载了默认的全景图后回调
     */
    static createPlayer(panoData: Object, panelOptions: {
        /**
         * 是否全屏
         */
        fullscreen: boolean;
        /**
         * 悬浮框所在位置，默认为"right-top" 以下参数可选：'left-top', 'left-center', 'left-bottom', 'center-top', 'center', 'center-bottom', 'right-top', 'right-center', 'right-bottom'
         */
        location: string;
        /**
         * 相对于location的X轴偏移
         */
        offsetX: number;
        /**
         * 相对于location的Y轴偏移
         */
        offsetY: number;
        /**
         * 是否显示标题栏
         */
        header: boolean;
        /**
         * 是否可以拖拽改变悬浮框大小
         */
        resizeit: boolean;
        /**
         * 悬浮框宽度，数字或者字符串比如“40%”
         */
        width: number;
        /**
         * 悬浮框高度，数字或者字符串比如“40%”
         */
        height: number;
    }, panoOptions: {
        /**
         * 初始打开的全景图，不设置传递null
         */
        panoID: string;
        /**
         * 打开全景图的初始视角h
         */
        h: number;
        /**
         * 打开全景图的初始视角v
         */
        v: number;
    }, app: App, callback: Function): void;
    /**
     * 销毁全景图播放器
     */
    static destroyPlayer(): void;
    /**
     * 获取campus节点下的全景图项目
     * @param root campus节点,可为空，场景中有多个campus时，需要指定具体campus。
     * @param callback 如果存在，callback参数会带有panoData格式的数据。
     */
    static getPanoJsonFromBuilder(root: Campus, callback: (panoData: any) => void): void;
    /**
     * 获取指定节点下的全景图对象
     * @param root 需要获取的根节点
     */
    static getPanoPoints(root: any): any[];
    /**
     * 指定节点下，是否有全景图对象
     * @param root 需要查询的根节点
     */
    static hasPanoFromBuilder(root: any): boolean;
    /**
     * 设置全景图中，3D对象的属性
     * @param name 3D对象的名称
     * @param properties
     */
    static set3DObjectProperties(name: string, properties: {
        /**
         * 模型所在位置：水平坐标
         */
        h: number;
        /**
         * 模型所在位置：垂直坐标
         */
        v: number;
        /**
         * 模型所在位置：深度
         */
        depth: number;
        /**
         * 缩放
         */
        scale: number;
        /**
         * 模型沿x旋转
         */
        rx: number;
        /**
         * 模型沿y旋转
         */
        ry: number;
        /**
         * 模型沿z旋转
         */
        rz: number;
    }): void;
    /**
     * 开始自动漫游
     * @param panoID 起始全景图ID
     */
    static startTour(panoID: string): void;
    /**
     * 停止自动漫游，暂时会出现 没有完全停止时，调用startTour，全景图切换混乱的问题。
     */
    static stopTour(): void;
}
