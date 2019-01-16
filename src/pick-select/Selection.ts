import { Selector } from '../query/Selector';
import { BaseObject } from '../base-object/BaseObject';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 15:56:34
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-10 16:05:16
 * @Description: 物体选择集合
 */
export class Selection {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 获取当前帧选择物体集合
     */
    public get objects(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取上一帧选择物体集合
     */
    public get previousObjects(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 清空选择物体
     */
    public clear(): void {
        throw new Error('未实现！');
    }

    /**
     * 取消选择物体
     * @param object 物体
     */
    public deselect(object: BaseObject): void {
        throw new Error('未实现！');
    }

    /**
     * 查询物体是否被选择
     * @param object 物体
     */
    public has(object: BaseObject): boolean {
        throw new Error('未实现！');
    }

    /**
     * 查询当前帧物体选择集合是否发生过改变
     */
    public isChanged(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 选择物体
     * @param object 物体
     */
    public select(object): void {
        throw new Error('未实现！');
    }
}