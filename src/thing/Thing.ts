import { BaseObject } from '../base-object/BaseObject';
import { Floor } from '../building/Floor';
import { Building } from '../building/Building';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:23:25
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:48:13
 * @Description: 物体
 */
export class Thing extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 获取动画
     * @type {Array}
     */
    public get animationNames(): any[] {
        throw new Error('未实现！');
    }

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
    public playAnimation(params: {
        name: string;
        "frames?": any[];
        "speed?": number;
        "loop?": boolean;
        "loopType?": number;
        "reverse?": boolean;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止动画
     */
    public stopAnimation(): void {
        throw new Error('未实现！');
    }

    /**
     * 获取楼层
     * @type {THING.Floor}
     */
    public get floor(): Floor {
        throw new Error('未实现！');
    }

    /**
     * 获取建筑
     * @type {THING.Building}
     */
    public get building(): Building {
        throw new Error('未实现！');
    }

}