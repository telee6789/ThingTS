import { BaseObject } from '../base-object/BaseObject';
import { Campus } from '../building/Campus';
import { Selector } from '../query/Selector';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:47:33
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:58:01
 * @Description: 场景根节点
 */
export class SceneRoot extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏场景
     * @type {boolean}
     */
    public set visible(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获取默认园区
     * @type {THING.Campus}
     */
    public get defaultCampus(): Campus {
        throw new Error('未实现！');
    }

    /**
     * 获取园区数据
     * @type {THING.Selector}
     */
    public get campuses(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 开启/取消线框渲染方式
     * @type {string|Number} 颜色值, null 表示关闭线框渲染模式
     */
    public set wireframeColor(value: string | number) {
        throw new Error('未实现！');
    }

}