/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:17:31
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 13:24:20
 * @Description: 框选功能选项
 */
export enum AreaPickType {
    /**
     * 默认方式，从左上角触发的框选为实时选择(速度慢), 其他方式为鼠标抬起后选择(速度快)
     */
    Auto,
    /**
     * 实时状态选择
     */
    RealTime,
    /**
     * 非实时状态选择
     */
    NotRealTime,
}