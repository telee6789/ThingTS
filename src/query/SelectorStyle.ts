/*
 * @Author: kekeqy
 * @Date: 2018-12-10 13:28:13
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-10 13:32:39
 * @Description: 物体效果处理集合
 */
export class SelectorStyle {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 设置渲染排序值
     * @type {Number}
     */
    public set renderOrder(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置颜色
     * @type {Number|String}
     */
    public set color(value: number | string) {
        throw new Error('未实现！');
    }

    /**
     * 设置透明度(0~1)
     * @type {Number}
     */
    public set opacity(value: number) {
        throw new Error('未实现！');
    }

    /**
     * 设置勾边颜色
     * @type {Number|String}
     */
    public set outlineColor(value: number | string) {
        throw new Error('未实现！');
    }

    /**
     * 设置默认勾边颜色
     * @type {Number|String}
     */
    public set defaultOutlineColor(value: number | string) {
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
    public boundingBoxColor(value: number | string) {
        throw new Error('未实现！');
    }

    /**
     * 设置始终在最后渲染
     * @type {Boolean}
     */
    public set alwaysOnTop(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 设置材质
     * @param {Object} params 材质参数
     */
    public setMaterial(params: any): void {
        throw new Error('未实现！');
    }

}