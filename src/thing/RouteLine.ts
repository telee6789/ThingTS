import { LineBase } from '../base-object/LineBase';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 14:48:36
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:49:22
 * @Description: 路线
 */
export class RouteLine extends LineBase {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 设置宽度
     * @type {number}
     */
    public set width(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置进度, 范围在[0, 1]之间
     * @type {number}
     */
    public progress(value: number) {
        throw new Error('未实现！');
    }

}