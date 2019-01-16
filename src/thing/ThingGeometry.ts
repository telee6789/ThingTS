import { Thing } from './Thing';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:36:56
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:48:47
 * @Description: 几何物体基类
 */
export class ThingGeometry extends Thing {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

}