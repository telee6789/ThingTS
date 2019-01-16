import { BaseObject } from '../base-object/BaseObject';
import { Floor } from '../building/Floor';
import { Building } from '../building/Building';
import { App } from '../core-object/App';
export declare class Thing extends BaseObject {
    constructor(app: App);
    /**
     * 获取动画
     * @type {Array}
     */
    readonly animationNames: any[];
    /**
     * 播放动画
     * @param {Object} params
     * @param {String} params.name 动画名
     * @param {Array} params.frames? 帧播放比例范围
     * @param {Number} params.speed? 播放速度
     * @param {Boolean} params.loop? 是否循环
     * @param {number} params.loopType? 循环类型
     * @param {Boolean} params.reverse? 是否倒播
     * @example
     * obj.playAnimation('open1');
     * obj.playAnimation({
     *      name: 'open1',
     *      reverse: true,
     * });
     * obj.playAnimation({
     *      name: 'open1',
     *      loop: true
     * });
     * obj.playAnimation({
     *      name: ['open1', 'open2'],
     *      loop: true,
     *      loopType: THING.LoopType.PingPong,
     *      speed: 0.4
     * });
     * obj.playAnimation({
     *      name: ['open1'],
     *      frames: [0.25, 0.5], // 动画序列从 25% 播放到 50% (时间)
     *      loop: true,
     *      loopType: THING.LoopType.PingPong,
     *      speed: 0.4
     * });
     */
    playAnimation(params: {
        name: string;
        "frames?": any[];
        "speed?": number;
        "loop?": boolean;
        "loopType?": number;
        "reverse?": boolean;
    }): void;
    /**
     * 停止动画
     */
    stopAnimation(): void;
    /**
     * 获取楼层
     * @type {THING.Floor}
     */
    readonly floor: Floor;
    /**
     * 获取建筑
     * @type {THING.Building}
     */
    readonly building: Building;
}
