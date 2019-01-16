import { CornerType } from '../other/CornerType';
import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:13:40
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:53:59
 * @Description: 指南针控件
 */
export class CompassControl extends BaseObject {
    public constructor(app: App, option: {
        offset?: number[],
        position?: CornerType
    }) {
        super(app);
        throw new Error('未实现！');
    }
}