import { BaseObject } from '../base-object/BaseObject';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';
export declare class Campus extends BaseObject {
    constructor(app: App);
    /**
     * 获取场景加载数据
     * @type {Object}
     */
    readonly sceneJSONData: any;
    /**
     * 获取园区建筑集合
     * @type {THING.Selector}
     */
    readonly buildings: Selector;
    /**
     * 获取园区物体集合
     * @type {THING.Selector}
     */
    readonly things: Selector;
}
