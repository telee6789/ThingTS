import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 15:00:07
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:56:34
 * @Description: 基础Layer能够添加各种对象
 */
export class ThingLayer extends BaseObject {
    public constructor(app: App, param: {
        /**
         * 名称
         */
        name: string
        /**
         * 渲染级别，order越大图层越靠上,默认为0
         */
        order: number
    }) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 显示或隐藏着个Layer
     * @param isShow 是否显示，true||false
     */
    public show(isShow: boolean): void {
        throw new Error('未实现！');
    }
}