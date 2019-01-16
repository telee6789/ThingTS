/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:14:58
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:15:39
 * @Description: 拖拽状态
 */
export enum DragState {
    /**
     * 非拖拽模式
     */
    No,
    /**
     * 拖拽中
     */
    Dragging,
    /**
     * 拖拽结束
     */
    DragEnd,
}