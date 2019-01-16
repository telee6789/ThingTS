import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 15:09:42
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:57:31
 * @Description: 倾斜摄影图层类
 */
export class Tile3dLayer extends BaseObject {
    public constructor(app: App, param: {
        /**
         * 倾斜摄影图层名称
         */
        name: string,
        /**
         * 倾斜摄影服务url
         */
        url: string,
        /**
         * 倾斜摄影离地高度
         */
        height: Number
    }) {
        super(app);
        throw new Error('未实现！');
    }
}