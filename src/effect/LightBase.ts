import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 16:23:46
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:53:13
 * @Description: 光线基类
 */
export class LightBase extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

}