import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class TextRegion extends BaseObject {
    constructor(app: App);
    /**
     * 设置文本
     * @type {String}
     */
    text: string;
    /**
     * 设置文本颜色
     * @type {String|Number}
     */
    textColor(value: string | number): void;
    /**
     * 设置文本大小
     * @type {Number}
     */
    textSize(value: number): void;
    /**
     * 设置文本行宽度，如果文本小于行宽度会进行换行
     * @type {Number}
     */
    textLineWidth(value: number): void;
    /**
     * 设置文本行行距
     * @type {Number}
     */
    textLineHeight(value: number): void;
}
