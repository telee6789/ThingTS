import { CompassControl } from './CompassControl';
import { CornerType } from '../other/CornerType';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:10:03
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:54:27
 * @Description: 指北针控件
 */
export class EarthCompass extends CompassControl {
    public constructor(app: App, option: {
        image: string,
        offset?: number[],
        position?: CornerType
    }) {
        super(app, option);
        throw new Error('未实现！');
    }
}