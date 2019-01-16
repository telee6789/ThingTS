import { BaseObject } from '../base-object/BaseObject';
import { Campus } from '../building/Campus';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';
export declare class SceneRoot extends BaseObject {
    constructor(app: App);
    /**
     * 显示/隐藏场景
     * @type {boolean}
     */
    visible: boolean;
    /**
     * 获取默认园区
     * @type {THING.Campus}
     */
    readonly defaultCampus: Campus;
    /**
     * 获取园区数据
     * @type {THING.Selector}
     */
    readonly campuses: Selector;
    /**
     * 开启/取消线框渲染方式
     * @type {string|Number} 颜色值, null 表示关闭线框渲染模式
     */
    wireframeColor: string | number;
}
