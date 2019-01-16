import { PointsBase } from './PointsBase';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:14:56
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:46:56
 * @Description: 线段基类
 */
export class LineBase extends PointsBase {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 开始播放路线动画
     * @param {Number} speed 播放速度
     * @param {Function} complete 完成回调函数
     */
    public play(speed: number, complete: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 停止播放路线动画
     */
    public stop(): void {
        throw new Error('未实现！');
    }

    /**
     * 启用/禁用纹理
     * @type {Boolean}
     */
    public set useTexture(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获取宽度
     * @type {Number}
     */
    public get width(): number {
        throw new Error('未实现！');
    }

    /**
     * 启用/禁止 UV 动画
     * @type {Boolean}
     */
    public set scrollUV(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置 UV 动画滚动速度
     * @type {Number}
     */
    public set scrollSpeed(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 圆角半径, 如果是 0 则表示不使用圆角
     * @type {Number}
     */
    public set cornerRadius(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置路线细分面，越大路线顶点细分越多越平滑
     * @type {Number}
     */
    public set cornerSplit(value: number) {
        throw new Error('未实现！');
    }

}