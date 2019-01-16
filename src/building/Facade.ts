import { BaseObject } from '../base-object/BaseObject';
import { Building } from './Building';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:11:26
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:47:13
 * @Description: 外立面
 */
export class Facade extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 获取建筑
     * @type {THING.Building}
     */
    public get building(): Building {
        throw new Error('未实现！');
    }

}