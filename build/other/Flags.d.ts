export declare class Flags {
    constructor();
    /**
     * 设置所有刷新标记
     * @param {Number} value 标记位
     */
    setFlags(value?: number): void;
    /**
     * 清除所有刷新标记
     */
    clearFlags(): void;
    /**
     * 设置/取消标志位
     * @param {Number} flags 标记位
     * @param {Boolean} enable 是否设置标记位
     */
    enableFlags(flags: number, enable: boolean): void;
    /**
     * 查询刷新标记
     * @param {Number} flags 标记位
     * @return {Boolean} 是否需要刷新
     */
    hasFlags(flags: number): boolean;
    /**
     * 是否存在任一标记
     * @return {Boolean}
     */
    hasAnyFlags(): boolean;
}
