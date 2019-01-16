/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:13:20
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:14:12
 * @Description: 摄像机类型，用于摄像机2D/3D视角切换
 */
export enum CameraView {
    /**
     * 正常视角
     */
    Normal,
    /**
     * 顶部视角
     */
    TopView,
    /**
     * 左边视角(未实现)
     */
    LeftView,
    /**
     * 右边视角(未实现)
     */
    RightView,
    /**
     * 前视角(未实现)
     */
    FrontView,
    /**
     * 后视角(未实现)
     */
    BackView,
    /**
     * @ignore
     */
    Perspective,
}