/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:08:52
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:10:37
 * @Description: 标记封装类
 */
export class Flags {
    public constructor() {
        throw new Error('未实现！');
    }

    /**
     * 设置所有刷新标记
     * @param {Number} value 标记位
     */
    public setFlags(value?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 清除所有刷新标记
     */
    public clearFlags(): void {
        throw new Error('未实现！');
    }

    /**
     * 设置/取消标志位
     * @param {Number} flags 标记位
     * @param {Boolean} enable 是否设置标记位
     */
    public enableFlags(flags: number, enable: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 查询刷新标记
     * @param {Number} flags 标记位
     * @return {Boolean} 是否需要刷新
     */
    public hasFlags(flags: number): boolean {
        throw new Error('未实现！');
    }

    /**
     * 是否存在任一标记
     * @return {Boolean}
     */
    public hasAnyFlags(): boolean {
        throw new Error('未实现！');
    }

}