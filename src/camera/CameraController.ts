import { BaseObject } from '../base-object/BaseObject';
import { LerpType } from '../other/LerpType';
import { App } from '../core-object/App';
import { CameraView } from './CameraView';
import { Camera } from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from '../three/OrbitControls';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 13:34:25
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-10 14:03:28
 * @Description: 摄像机类，就是 app.camera 对象
 */
export class CameraController {
    private _flyGroup: TWEEN.Group = new TWEEN.Group();
    public readonly app: App;
    public readonly controller: OrbitControls;
    public view: CameraView;
    public constructor(app: App) {
        this.app = app;
        this.view = CameraView.Normal;
        this.controller = new OrbitControls(app.engine.camera, app.engine.renderer.domElement);
        // this.controller.enableRotate = false;
        this.animate();
    }
    private animate(): void {
        this.controller.update();
        requestAnimationFrame(() => this.animate());
    }
    /** 获取当前相机 */
    public get currentCamera(): Camera {
        return this.controller.object;
    }

    /**
     * 世界坐标转换成屏幕坐标
     * @param {Array<Number>} position 世界坐标
     * @return {Array<Number>} 屏幕坐标
     */
    public worldToScreen(position: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 屏幕坐标转世界坐标
     * @param {Number} x 屏幕x坐标
     * @param {Number} y 屏幕y坐标
     * @return {Array<Number>} 世界坐标
     */
    public screenToWorld(x: number, y: number): number[] {
        throw new Error('未实现！');
    }

    /**
     * 摄像机自适应
     * @param {Object|BaseObject} param 参数列表或者物体
     * @param {BaseObject} param.object? 目标物体
     * @param {Array} param.offset? 离目标点的偏移量
     */
    public fit(param: {
        "object?": BaseObject;
        "offset?": any[];
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止飞行
     */
    public stopFlying(): void {
        throw new Error('未实现！');
    }

    /**
     * 摄像机飞行到某位置
     * @param {Object} param 参数列表
     * @param {Number} param.time? 飞行过程的时间
     * @param {BaseObject|Array<Number>} param.target 观察的目标点位置
     * @param {Array} param.position? 摄像机位置
     * @param {Array} param.up? 摄像机up朝向
     * @param {Array} param.offset? 离目标点的偏移量
     * @param {Number} param.radius? 目标点半径
     * @param {LerpType} param.lerp? 插值方式
     * @param {LerpType} param.positionLerp? 摄像机坐标插值方式
     * @param {LerpType} param.targetLerp? 观察点插值方式
     * @param {LerpType} param.upLerp? up朝向插值方式
     * @param {Function} param.complete? 飞行结束回调函数
     * @example
     * // 跳转到物体
     * app.camera.flyTo({
     *   	'time': 1500,
     *   	'target': obj,
     * 		'position':[0, 0, 0]
     *   	'complete': function() {
     *   	}
     * });
     * // 跳转到位置
     * app.camera.flyTo({
     * 		'time': 1500,
     *   	'position': [3.6, 4.8, -6.5],
     * 		'target': [-4.2, -3.2, -20.6],
     * 		'complete': function() {
     *   	}
     * });
     */
    public flyTo(param: {
        time?: number;
        target: BaseObject | number[];
        "position?": any[];
        "up?": any[];
        "offset?": any[];
        "radius?": number;
        "lerp?": LerpType;
        "positionLerp?": LerpType;
        "targetLerp?": LerpType;
        "upLerp?": LerpType;
        "complete?": () => any;
    }): void {
        let target: number[];
        if (param.target instanceof BaseObject) target = param.target.position;
        else target = param.target;
        let time: number = param.time ? param.time : 1500;

    }

    /**
     * 看物体或位置
     * @param {Array|BaseObject} param 物体或者坐标
     * @example
     * // 跳转到物体
     * app.camera.lookAt(app.query('car01')[0]);
     * app.camera.lookAt([20, 5.6, -6.6]);
     */
    public lookAt(param: number[] | BaseObject): void {
        throw new Error('未实现！');
    }

    /**
     * 环绕旋转
     * @param {Object} params 参数列表
     * @param {Array<Number>|BaseObject} params.target? 围绕的物体或者世界坐标点
     * @param {Array} params.position? 围绕的坐标点
     * @param {Number} params.angle 角度值
     * @param {Number} params.time? 处理时间(毫秒)
     * @param {Number} params.speed? 围绕速度
     * @param {Boolean} params.up? 是否垂直围绕
     * @param {Function} params.complete? 旋转完成回调函数
     * @example
     * app.camera.rotateAround({
     * target: car, // 环绕物体
     * time: 5000, // 环绕时间(毫秒)
     * angle: 180, // 旋转角度
     * });
     */
    public rotateAround(params: {
        "target?": number[] | BaseObject;
        "position?": any[];
        angle: number;
        "time?": number;
        "speed?": number;
        "up?": boolean;
        "complete?": () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 跟随物体
     * @param {Object} params 参数列表
     * @param {BaseObject} params.object 要跟随的物体
     * @param {Number} params.alpha 垂直方向上与z轴的夹角
     * @param {Number} params.beta x-y平面上的夹角
     * @param {Number} params.distance 摄像机和跟随物体的距离
     * @param {Array<Number>} params.offset? 偏移量
     * @param {Number} params.speed? 跟随速度
     * @param {Boolean} params.breakableAnyTime? 是否可以被操作打断
     * @param {Function} params.complete? 到达观察距离回调函数
     */
    public followObject(params: {
        object: BaseObject;
        alpha: number;
        beta: number;
        distance: number;
        "offset?": number[];
        "speed?": number;
        "breakableAnyTime?": boolean;
        "complete?": () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止跟随物体
     */
    public stopFollowingObject(): void {
        throw new Error('未实现！');
    }

    /**
     * 向前/向后移动摄像机
     * @param {Number} distance 移动距离(+: 向前, -: 向后)
     * @param {Number} time 移动时间(毫秒)
     */
    public dolly(distance: number, time?: number): void {

    }

    /**
     * 设置垂直方向上与z轴的夹角增量
     * @param {Number} angle 角度值 (+/-)
     * @param {Number} time 插值时间(毫秒)
     */
    public theta(angle: number, time?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 设置x-y平面上的夹角增量
     * @param {Number} angle 角度值 (+/-)
     * @param {Number} time 插值时间(毫秒)
     */
    public phi(angle: number, time?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 移动摄像机
     * @param {Number} deltaX 水平移动距离
     * @param {Number} deltaY 垂直移动距离
     */
    public move(deltaX: number, deltaY: number): void {
        throw new Error('未实现！');
    }

    /**
     * 根据物体包围盒检测是否在摄相机视锥内
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    public isInView(object: BaseObject): boolean {
        throw new Error('未实现！');
    }
    /** 获取摄像机插值因子，数值越小插值效果越明显 */
    public get dampingFactor(): number {
        return this.controller.dampingFactor;
    }
    /** 设置摄像机插值因子，数值越小插值效果越明显 */
    public set dampingFactor(value: number) {
        this.controller.dampingFactor = value;
    }
    /** 获取摄像机FOV */
    public get fov(): number {
        return this.app.engine.camera.fov;
    }
    /** 设置摄像机FOV */
    public set fov(value: number) {
        this.app.engine.camera.fov = value;
    }
    /** 获取近裁剪面的距离 */
    public get near(): number {
        return this.app.engine.camera.near;
    }
    /** 设置近裁剪面的距离，比这个距离近的物体将不会被看到 */
    public set near(value: number) {
        this.app.engine.camera.near = value;
        this.app.engine.camera.near = value;
    }
    /** 获取远裁剪面的距离 */
    public get far(): number {
        return this.app.engine.camera.far;
    }
    /** 设置远裁剪面的距离，超过这个距离的物体将不会被看到 */
    public set far(value: number) {
        this.app.engine.camera.far = value;
        this.app.engine.camera.far = value;
    }
    /** 获取摄像机缩放系数范围[最小值, 最大值] */
    public get zoomLimited(): number[] {
        return [(this.controller as any).minZoom, (this.controller as any).maxZoom];
    }
    /** 设置摄像机缩放系数范围[最小值, 最大值] */
    public set zoomLimited(value: number[]) {
        if (!value || value.length != 2 || typeof value[0] != 'number' || typeof value[1] != 'number') return;
        (this.controller as any).minZoom = value[0];
        (this.controller as any).maxZoom = value[1];
    }
    /** 获取摄像机距离范围[最小值, 最大值] */
    public get distanceLimited(): number[] {
        return [this.controller.minDistance, this.controller.maxDistance];
    }
    /** 设置摄像机距离范围[最小值, 最大值] */
    public set distanceLimited(value: number[]) {
        if (!value || value.length != 2 || typeof value[0] != 'number' || typeof value[1] != 'number') return;
        this.controller.minDistance = value[0];
        this.controller.maxDistance = value[1];
    }
    /** 获取摄像机垂直角度范围[最小值, 最大值] */
    public get verticalAngleLimited(): number[] {
        return [this.controller.minPolarAngle, this.controller.maxPolarAngle];
    }
    /** 设置摄像机垂直角度范围[最小值, 最大值] */
    public set verticalAngleLimited(value: number[]) {
        if (!value || value.length != 2 || typeof value[0] != 'number' || typeof value[1] != 'number') return;
        this.controller.minPolarAngle = value[0];
        this.controller.maxPolarAngle = value[1];
    }
    /** 获取摄像机水平角度范围[最小值, 最大值] */
    public get horizontalAngleLimited(): number[] {
        return [this.controller.minAzimuthAngle, this.controller.maxAzimuthAngle];
    }
    /** 设置摄像机水平角度范围[最小值, 最大值] */
    public set horizontalAngleLimited(value: number[]) {
        if (!value || value.length != 2 || typeof value[0] != 'number' || typeof value[1] != 'number') return;
        this.controller.minAzimuthAngle = value[0];
        this.controller.maxAzimuthAngle = value[1];
    }
    /** 获取摄像机键盘平移速度 */
    public get panSpeed(): number {
        return this.controller.keyPanSpeed;
    }
    /** 设置摄像机键盘平移速度 */
    public set panSpeed(value: number) {
        this.controller.keyPanSpeed = value;
    }
    /** 获取摄像机鼠标平移速度 */
    public get mousePanSpeed(): number {
        return (this.controller as any).panSpeed;
    }
    /** 设置摄像机鼠标平移速度 */
    public set mousePanSpeed(value: number) {
        (this.controller as any).panSpeed = value;
    }
    /** 获取当前和观察点的距离 */
    public get distance(): number {
        return this.controller.object.position.distanceTo(this.controller.target);
    }

    /**
     * 设置2D/3D视图
     * @type {number} value 摄像机类型
     */
    public set viewMode(value: CameraView) {
        this.view = value;
    }
    /** 获取摄像机 镜头位置（眼睛位置） */
    public get position(): number[] {
        return this.app.engine.camera.position.toArray();
    }
    /** 设置摄像机 镜头位置（眼睛位置） */
    public set position(value: number[]) {
        if (!value || value.length != 3 || typeof value[0] != 'number' || typeof value[1] != 'number' || typeof value[2] != 'number') return;
        this.app.engine.camera.position.set(value[0], value[1], value[2]);
        this.app.engine.camera.position.set(value[0], value[1], value[2]);
    }
    /** 获取摄像机 看点位置 */
    public get target(): number[] {
        return this.controller.target.toArray();
    }
    /** 设置摄像机 看点位置 */
    public set target(value: number[]) {
        if (!value || value.length != 3 || typeof value[0] != 'number' || typeof value[1] != 'number' || typeof value[2] != 'number') return;
        this.controller.target.set(value[0], value[1], value[2]);
    }
    /** 开启/关闭摄像机操作 */
    public get inputEnable(): boolean {
        return this.controller.enabled;
    }
    /** 开启/关闭摄像机操作 */
    public set inputEnabled(value: boolean) {
        this.controller.enabled = value;
    }
    /** 获取旋转生效 */
    public get enableRotate(): boolean {
        return this.controller.enableRotate;
    }
    /** 设置旋转生效 */
    public set enableRotate(value: boolean) {
        this.controller.enableRotate = value;
    }
    /** 获取平移生效 */
    public get enablePan(): boolean {
        return this.controller.enablePan;
    }
    /** 设置平移生效 */
    public set enablePan(value: boolean) {
        this.controller.enablePan = value;
    }
    /**
     * 获取是否在飞行
     * @type {Boolean}
     */
    public set flying(value: boolean) {
        throw new Error('未实现！');
    }
    /** 打印当前镜头位置和看点位置信息 */
    public log(): void {
        console.log(this.position, this.target);
    }
}