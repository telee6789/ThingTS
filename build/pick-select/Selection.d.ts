import { Selector } from '../query/Selector';
import { BaseObject } from '../base-object/BaseObject';
export declare class Selection {
    constructor();
    /**
     * 获取当前帧选择物体集合
     */
    readonly objects: Selector;
    /**
     * 获取上一帧选择物体集合
     */
    readonly previousObjects: Selector;
    /**
     * 清空选择物体
     */
    clear(): void;
    /**
     * 取消选择物体
     * @param object 物体
     */
    deselect(object: BaseObject): void;
    /**
     * 查询物体是否被选择
     * @param object 物体
     */
    has(object: BaseObject): boolean;
    /**
     * 查询当前帧物体选择集合是否发生过改变
     */
    isChanged(): boolean;
    /**
     * 选择物体
     * @param object 物体
     */
    select(object: any): void;
}
