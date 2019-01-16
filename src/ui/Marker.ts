import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 16:06:32
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:52:44
 * @Description: 3D场景内的标记，往往用于顶牌，可以传入div, image或canvas写文字，可以拾取、跟随物体、和物体一并删除
 * var marker = app.create({
 *      type: "Marker",
 *      localPosition: [0, 5, 0],
 *      size: 4,
 *      url: "https://speech.uinnova.com/static/images/warning1.png",
 *      parent: app.query('car01')[0]
 * });
 */
export class Marker extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 初始化连接线
     */
    private _setupLineNode(): void {
        throw new Error('未实现！');
    }

    /**
     * 更新标记信息
     * @param {Object} params 参数列表
     */
    public setParams(params: any): void {
        throw new Error('未实现！');
    }

    /**
     * 同步图片尺寸
     */
    public synSize(): void {
        throw new Error('未实现！');
    }

    /**
     * 同步纹理资源
     */
    public synTexture(): void {
        throw new Error('未实现！');
    }

    /**
     * 设置画布
     * @type {*}
     */
    public set canvas(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置路径资源
     * @type {string}
     */
    public set url(value: string) {
        throw new Error('未实现！');
    }

    /**
     * 设置图片资源
     * @type {Object}
     */
    public set image(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置比例大小
     * @type {Array<Number>|Number}
     */
    public set size(value: number[] | number) {
        throw new Error('未实现！');
    }

    /**
     * 设置宽度
     * @type {Number}
     */
    public set width(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置高度
     * @type {Number}
     */
    public set height(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置线颜色
     * @type {Number}
     */
    public set lineColor(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置线透明度
     * @type {Number}
     */
    public set lineOpacity(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置虚线
     * @type {Number}
     */
    public lineDashSize(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置线端点
     * @type {Number}
     */
    public set lineGapSize(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置线宽度
     * @type {Number}
     */
    public set lineWidth(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置保持尺寸不变
     * @type {Boolean}
     */
    public set keepSize(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置大小缩放因子
     * @type {Number}
     */
    public set factor(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 获取挂架的 DOM 元素
     * @type {Object}
     */
    public get domElement(): any {
        throw new Error('未实现！');
    }

}