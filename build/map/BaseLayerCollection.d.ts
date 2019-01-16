import { LayerCollection } from "./LayerCollection";
import { Layer } from "./Layer";
export declare class BaseLayerCollection extends LayerCollection {
    constructor();
    /**
     * 重写add方法,把layer放到selector中
     * @param obj 层
     */
    add(obj: Layer): void;
    /**
     * 移除单个Layer
     */
    remove(): void;
}
