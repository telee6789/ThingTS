export class BaseStyle {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 反转(设置\清空)勾边颜色
     * @param {Number|String} color 颜色值
     */
    public flipOutlineColor(color: number | string): void {
        throw new Error('未实现！');
    }

    /**
     * 设置光线图
     * @param {Object} params 参数列表
     * @param {Number} params.intensity? 反射光照强度
     * @param {Number|String} params.color? 颜色
     * @param {String} params.image? 光照贴图
     */
    public setLightMap(params: {
        "intensity?": number;
        "color?": number | string;
        "image?": string;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 设置材质
     * @param {Object} params 材质参数
     */
    public setMaterial(params: any): void {
        throw new Error('未实现！');
    }

    /**
     * 设置多边形偏移量修正
     * @param {Object} params 参数列表
     * @param {Boolean} params.polygonOffset 是否开启多边形偏移
     * @param {Number} params.polygonOffsetFactor 多边形偏移因子
     * @param {Number} params.polygonOffsetUnits 多边形偏移单位
     */
    public setPolygonOffset(params: {
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 设置/获取渲染排序值
     * @type {Number}
     */
    public get renderOrder(): number {
        throw new Error('未实现！');
    }
    public set renderOrder(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 开启/关闭线框模式
     * @type {Boolean}
     */
    public set wireframe(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置透明度(0~1)
     * @type {number}
     */
    public set opacity(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置颜色
     * @type {String|Number}
     */
    public set color(value: string | number) {
        throw new Error('未实现！');
    }

    /**
     * 忽略/禁用勾边
     * @type {Boolean}
     */
    public set skipOutline(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置勾边颜色
     * @type {Number|String}
     */
    public outlineColor(value: number | string) {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏自身坐标系
     * @type {Boolean}
     */
    public set axisHelper(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏包围盒
     * @type {Boolean}
     */
    public set boundingBox(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置包围盒颜色
     * @type {Number|String}
     */
    public set boundingBoxColor(value: number | string) {
        throw new Error('未实现！');
    }

    /**
     * 设置始终在最后渲染
     * @type {Boolean}
     */
    public set alwaysOnTop(value: boolean) {
        throw new Error('未实现！');
    }

}