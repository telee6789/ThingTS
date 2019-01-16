import { Thing } from './Thing';
import { Floor } from '../building/Floor';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:27:54
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:50:41
 * @Description: 门
 */
export class Door extends Thing {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 开门
     */
    public open(): void {
        throw new Error('未实现！');
    }

    /**
     * 关门
     */
    public close(): void {
        throw new Error('未实现！');
    }

    /**
     * 获取所在楼层
     * @type {THING.Floor}
     */
    public get floor(): Floor {
        throw new Error('未实现！');
    }

}