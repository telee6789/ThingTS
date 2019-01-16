import { PointsBase } from './PointsBase';
import { App } from '../core-object/App';
export declare class LineBase extends PointsBase {
    constructor(app: App);
    /**
     * 开始播放路线动画
     * @param {Number} speed 播放速度
     * @param {Function} complete 完成回调函数
     */
    play(speed: number, complete: () => any): void;
    /**
     * 停止播放路线动画
     */
    stop(): void;
    /**
     * 启用/禁用纹理
     * @type {Boolean}
     */
    useTexture: boolean;
    /**
     * 获取宽度
     * @type {Number}
     */
    readonly width: number;
    /**
     * 启用/禁止 UV 动画
     * @type {Boolean}
     */
    scrollUV: boolean;
    /**
     * 设置 UV 动画滚动速度
     * @type {Number}
     */
    scrollSpeed: number;
    /**
     * 圆角半径, 如果是 0 则表示不使用圆角
     * @type {Number}
     */
    cornerRadius: number;
    /**
     * 设置路线细分面，越大路线顶点细分越多越平滑
     * @type {Number}
     */
    cornerSplit: number;
}
