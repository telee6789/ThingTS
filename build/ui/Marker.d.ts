import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class Marker extends BaseObject {
    constructor(app: App);
    /**
     * 初始化连接线
     */
    private _setupLineNode;
    /**
     * 更新标记信息
     * @param {Object} params 参数列表
     */
    setParams(params: any): void;
    /**
     * 同步图片尺寸
     */
    synSize(): void;
    /**
     * 同步纹理资源
     */
    synTexture(): void;
    /**
     * 设置画布
     * @type {*}
     */
    canvas: any;
    /**
     * 设置路径资源
     * @type {string}
     */
    url: string;
    /**
     * 设置图片资源
     * @type {Object}
     */
    image: any;
    /**
     * 设置比例大小
     * @type {Array<Number>|Number}
     */
    size: number[] | number;
    /**
     * 设置宽度
     * @type {Number}
     */
    width: number;
    /**
     * 设置高度
     * @type {Number}
     */
    height: number;
    /**
     * 设置线颜色
     * @type {Number}
     */
    lineColor: number;
    /**
     * 设置线透明度
     * @type {Number}
     */
    lineOpacity: number;
    /**
     * 设置虚线
     * @type {Number}
     */
    lineDashSize(value: number): void;
    /**
     * 设置线端点
     * @type {Number}
     */
    lineGapSize: number;
    /**
     * 设置线宽度
     * @type {Number}
     */
    lineWidth: number;
    /**
     * 设置保持尺寸不变
     * @type {Boolean}
     */
    keepSize: boolean;
    /**
     * 设置大小缩放因子
     * @type {Number}
     */
    factor: number;
    /**
     * 获取挂架的 DOM 元素
     * @type {Object}
     */
    readonly domElement: any;
}
