import { BaseObject } from '../base-object/BaseObject';
export declare class SceneLevel {
    constructor();
    /**
     * 改变场景层次
     * @param {THING.BaseObject} object 跳转的物体，以此决定跳转层次
     */
    change(object: BaseObject): void;
    /**
     * 返回父层级
     */
    back(): void;
    /**
     * 返回到指定层级
     * @param {THING.BaseObject} object 层级
     */
    backTo(object: BaseObject): void;
    /**
     * 返回当前层级
     * @type {THING.BaseObject}
     */
    readonly current: BaseObject;
    /**
     * 返回之前的层级
     * @type {THING.BaseObject}
     */
    previous(): BaseObject;
}
