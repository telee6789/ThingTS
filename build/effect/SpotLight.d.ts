import { LightBase } from './LightBase';
import { App } from '../core-object/App';
export declare class SpotLight extends LightBase {
    constructor(app: App);
    /**
     * 设置灯光角度
     * @type {Number} value 角度
     */
    lightAngle: number;
    /**
     * 设置灯光位置偏移量
     * @type {Array<Number>}
     */
    lightOffset: number[];
    /**
     * 设置灯光目标位置
     * @type {Array<Number>} value 目标位置
     */
    lightTarget: number[];
    /**
     * 设置光源节点名字
     * @type {String}
     */
    centerNodeName: string;
}
