export declare class BaseStyle {
    constructor();
    /**
     * 反转(设置\清空)勾边颜色
     * @param {Number|String} color 颜色值
     */
    flipOutlineColor(color: number | string): void;
    /**
     * 设置光线图
     * @param {Object} params 参数列表
     * @param {Number} params.intensity? 反射光照强度
     * @param {Number|String} params.color? 颜色
     * @param {String} params.image? 光照贴图
     */
    setLightMap(params: {
        "intensity?": number;
        "color?": number | string;
        "image?": string;
    }): void;
    /**
     * 设置材质
     * @param {Object} params 材质参数
     */
    setMaterial(params: any): void;
    /**
     * 设置多边形偏移量修正
     * @param {Object} params 参数列表
     * @param {Boolean} params.polygonOffset 是否开启多边形偏移
     * @param {Number} params.polygonOffsetFactor 多边形偏移因子
     * @param {Number} params.polygonOffsetUnits 多边形偏移单位
     */
    setPolygonOffset(params: {
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
    }): void;
    /**
     * 设置/获取渲染排序值
     * @type {Number}
     */
    renderOrder: number;
    /**
     * 开启/关闭线框模式
     * @type {Boolean}
     */
    wireframe: boolean;
    /**
     * 设置透明度(0~1)
     * @type {number}
     */
    opacity: number;
    /**
     * 设置颜色
     * @type {String|Number}
     */
    color: string | number;
    /**
     * 忽略/禁用勾边
     * @type {Boolean}
     */
    skipOutline: boolean;
    /**
     * 设置勾边颜色
     * @type {Number|String}
     */
    outlineColor(value: number | string): void;
    /**
     * 显示/隐藏自身坐标系
     * @type {Boolean}
     */
    axisHelper: boolean;
    /**
     * 显示/隐藏包围盒
     * @type {Boolean}
     */
    boundingBox: boolean;
    /**
     * 设置包围盒颜色
     * @type {Number|String}
     */
    boundingBoxColor: number | string;
    /**
     * 设置始终在最后渲染
     * @type {Boolean}
     */
    alwaysOnTop: boolean;
}
