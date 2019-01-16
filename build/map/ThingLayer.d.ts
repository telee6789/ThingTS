import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class ThingLayer extends BaseObject {
    constructor(app: App, param: {
        /**
         * 名称
         */
        name: string;
        /**
         * 渲染级别，order越大图层越靠上,默认为0
         */
        order: number;
    });
    /**
     * 显示或隐藏着个Layer
     * @param isShow 是否显示，true||false
     */
    show(isShow: boolean): void;
}
