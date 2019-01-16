import { BaseObject } from '../base-object/BaseObject';
import { LerpType } from '../other/LerpType';
import { App } from '../core-object/App';
import { CameraView } from './CameraView';
import { Camera } from 'three';
import { OrbitControls } from '../three/OrbitControls';
export declare class CameraController {
    private _flyGroup;
    readonly app: App;
    readonly controller: OrbitControls;
    view: CameraView;
    constructor(app: App);
    private animate;
    /** 获取当前相机 */
    readonly currentCamera: Camera;
    /**
     * 世界坐标转换成屏幕坐标
     * @param {Array<Number>} position 世界坐标
     * @return {Array<Number>} 屏幕坐标
     */
    worldToScreen(position: number[]): number[];
    /**
     * 屏幕坐标转世界坐标
     * @param {Number} x 屏幕x坐标
     * @param {Number} y 屏幕y坐标
     * @return {Array<Number>} 世界坐标
     */
    screenToWorld(x: number, y: number): number[];
    /**
     * 摄像机自适应
     * @param {Object|BaseObject} param 参数列表或者物体
     * @param {BaseObject} param.object? 目标物体
     * @param {Array} param.offset? 离目标点的偏移量
     */
    fit(param: {
        "object?": BaseObject;
        "offset?": any[];
    }): void;
    /**
     * 停止飞行
     */
    stopFlying(): void;
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
    flyTo(param: {
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
    }): void;
    /**
     * 看物体或位置
     * @param {Array|BaseObject} param 物体或者坐标
     * @example
     * // 跳转到物体
     * app.camera.lookAt(app.query('car01')[0]);
     * app.camera.lookAt([20, 5.6, -6.6]);
     */
    lookAt(param: number[] | BaseObject): void;
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
    rotateAround(params: {
        "target?": number[] | BaseObject;
        "position?": any[];
        angle: number;
        "time?": number;
        "speed?": number;
        "up?": boolean;
        "complete?": () => any;
    }): void;
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
    followObject(params: {
        object: BaseObject;
        alpha: number;
        beta: number;
        distance: number;
        "offset?": number[];
        "speed?": number;
        "breakableAnyTime?": boolean;
        "complete?": () => any;
    }): void;
    /**
     * 停止跟随物体
     */
    stopFollowingObject(): void;
    /**
     * 向前/向后移动摄像机
     * @param {Number} distance 移动距离(+: 向前, -: 向后)
     * @param {Number} time 移动时间(毫秒)
     */
    dolly(distance: number, time?: number): void;
    /**
     * 设置垂直方向上与z轴的夹角增量
     * @param {Number} angle 角度值 (+/-)
     * @param {Number} time 插值时间(毫秒)
     */
    theta(angle: number, time?: number): void;
    /**
     * 设置x-y平面上的夹角增量
     * @param {Number} angle 角度值 (+/-)
     * @param {Number} time 插值时间(毫秒)
     */
    phi(angle: number, time?: number): void;
    /**
     * 移动摄像机
     * @param {Number} deltaX 水平移动距离
     * @param {Number} deltaY 垂直移动距离
     */
    move(deltaX: number, deltaY: number): void;
    /**
     * 根据物体包围盒检测是否在摄相机视锥内
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    isInView(object: BaseObject): boolean;
    /** 获取摄像机插值因子，数值越小插值效果越明显 */
    /** 设置摄像机插值因子，数值越小插值效果越明显 */
    dampingFactor: number;
    /** 获取摄像机FOV */
    /** 设置摄像机FOV */
    fov: number;
    /** 获取近裁剪面的距离 */
    /** 设置近裁剪面的距离，比这个距离近的物体将不会被看到 */
    near: number;
    /** 获取远裁剪面的距离 */
    /** 设置远裁剪面的距离，超过这个距离的物体将不会被看到 */
    far: number;
    /** 获取摄像机缩放系数范围[最小值, 最大值] */
    /** 设置摄像机缩放系数范围[最小值, 最大值] */
    zoomLimited: number[];
    /** 获取摄像机距离范围[最小值, 最大值] */
    /** 设置摄像机距离范围[最小值, 最大值] */
    distanceLimited: number[];
    /** 获取摄像机垂直角度范围[最小值, 最大值] */
    /** 设置摄像机垂直角度范围[最小值, 最大值] */
    verticalAngleLimited: number[];
    /** 获取摄像机水平角度范围[最小值, 最大值] */
    /** 设置摄像机水平角度范围[最小值, 最大值] */
    horizontalAngleLimited: number[];
    /** 获取摄像机键盘平移速度 */
    /** 设置摄像机键盘平移速度 */
    panSpeed: number;
    /** 获取摄像机鼠标平移速度 */
    /** 设置摄像机鼠标平移速度 */
    mousePanSpeed: number;
    /** 获取当前和观察点的距离 */
    readonly distance: number;
    /**
     * 设置2D/3D视图
     * @type {number} value 摄像机类型
     */
    viewMode: CameraView;
    /** 获取摄像机 镜头位置（眼睛位置） */
    /** 设置摄像机 镜头位置（眼睛位置） */
    position: number[];
    /** 获取摄像机 看点位置 */
    /** 设置摄像机 看点位置 */
    target: number[];
    /** 开启/关闭摄像机操作 */
    readonly inputEnable: boolean;
    /** 开启/关闭摄像机操作 */
    inputEnabled: boolean;
    /** 获取旋转生效 */
    /** 设置旋转生效 */
    enableRotate: boolean;
    /** 获取平移生效 */
    /** 设置平移生效 */
    enablePan: boolean;
    /**
     * 获取是否在飞行
     * @type {Boolean}
     */
    flying: boolean;
    /** 打印当前镜头位置和看点位置信息 */
    log(): void;
}
