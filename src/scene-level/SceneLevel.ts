import { BaseObject } from '../base-object/BaseObject';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:42:09
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 13:10:29
 * @Description: 场景层次管理
 */
export class SceneLevel {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 改变场景层次
     * @param {THING.BaseObject} object 跳转的物体，以此决定跳转层次
     */
    public change(object: BaseObject): void {
        throw new Error('未实现！');
    }

    /**
     * 返回父层级
     */
    public back(): void {
        throw new Error('未实现！');
    }

    /**
     * 返回到指定层级
     * @param {THING.BaseObject} object 层级
     */
    public backTo(object: BaseObject): void {
        throw new Error('未实现！');
    }

    /**
     * 返回当前层级
     * @type {THING.BaseObject}
     */
    public get current(): BaseObject {
        throw new Error('未实现！');
    }

    /**
     * 返回之前的层级
     * @type {THING.BaseObject}
     */
    public previous(): BaseObject {
        throw new Error('未实现！');
    }

}