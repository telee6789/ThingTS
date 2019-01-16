import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:33:55
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:58:24
 * @Description: 负责区域文本绘制
 */
export class TextRegion extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 设置文本
     * @type {String}
     */
    public set text(value: string) {
        throw new Error('未实现！');
    }

    /**
     * 设置文本颜色
     * @type {String|Number}
     */
    public textColor(value: string | number) {
        throw new Error('未实现！');
    }

    /**
     * 设置文本大小
     * @type {Number}
     */
    public textSize(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置文本行宽度，如果文本小于行宽度会进行换行
     * @type {Number}
     */
    public textLineWidth(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置文本行行距
     * @type {Number}
     */
    public textLineHeight(value: number) {
        throw new Error('未实现！');
    }

}