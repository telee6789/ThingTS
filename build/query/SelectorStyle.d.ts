export declare class SelectorStyle {
    constructor();
    /**
     * 设置渲染排序值
     * @type {Number}
     */
    renderOrder: number;
    /**
     * 设置颜色
     * @type {Number|String}
     */
    color: number | string;
    /**
     * 设置透明度(0~1)
     * @type {Number}
     */
    opacity: number;
    /**
     * 设置勾边颜色
     * @type {Number|String}
     */
    outlineColor: number | string;
    /**
     * 设置默认勾边颜色
     * @type {Number|String}
     */
    defaultOutlineColor: number | string;
    /**
     * 开启/关闭线框模式
     * @type {Boolean}
     */
    wireframe: boolean;
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
    boundingBoxColor(value: number | string): void;
    /**
     * 设置始终在最后渲染
     * @type {Boolean}
     */
    alwaysOnTop: boolean;
    /**
     * 设置材质
     * @param {Object} params 材质参数
     */
    setMaterial(params: any): void;
}
