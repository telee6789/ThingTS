import { BaseObject } from "../base-object/BaseObject";
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:06:17
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:55:35
 * @Description: 层
 */
export class Layer extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }
}