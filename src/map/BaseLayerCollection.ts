import { LayerCollection } from "./LayerCollection";
import { Layer } from "./Layer";

/*
 * @Author: kekeqy
 * @Date: 2018-12-11 14:03:43
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 14:09:27
 * @Description: 底图图层的集合
 */
export class BaseLayerCollection extends LayerCollection {
    public constructor() {
        super();
        throw new Error('未实现！');
    }

    /**
     * 重写add方法,把layer放到selector中
     * @param obj 层
     */
    public add(obj: Layer): void {
        throw new Error('未实现！');
    }

    /**
     * 移除单个Layer
     */
    public remove(): void {
        throw new Error('未实现！');
    }
}