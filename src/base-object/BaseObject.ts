import { Selector } from '../query/Selector';
import { BaseStyle } from '../effect/BaseStyle';
import { CameraController } from '../camera/CameraController';
import { LerpType } from '../other/LerpType';
import { App } from '../core-object/App';
import { Object3D } from 'three';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 12:42:00
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:41:54
 * @Description: 基础物体类型
 */
export class BaseObject {
    public readonly app: App;
    public readonly node: Object3D;
    private _parent: BaseObject;
    public constructor(app: App, node: Object3D = null, parent: BaseObject = null) {
        this.app = app;
        this.node = node;
        this._parent = parent;
    }

    /**
     * 添加子物体
     * @param {BaseObject|*} params 物体或者参数列表
     * @param {BaseObject} params.object 物体
     * @param {Number[]} params.localPosition? 偏移量
     * @param {Number[]} params.angles? 旋转角度
     * @param {String} params.basePoint? 基准子节点名字，如果不提供则保持当前位置进行添加
     * @param {Boolean} params.keepNode? 是否保持原有的渲染结构不变
     * @param {Number} index? 插入下标，默认插入到最后位置
     */
    public add(params: {
        object: BaseObject;
        "localPosition?": number[];
        "angles?": number[];
        "basePoint?": string;
        "keepNode?": boolean;
    }, index?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 移除子物体
     * @param {BaseObject} object 物体
     */
    public remove(object: BaseObject): void {
        throw new Error('未实现！');
    }

    /**
     * 检测是否拥有此子物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    public hasChild(object: BaseObject): boolean {
        throw new Error('未实现！');
    }

    /**
     * 销毁自身
     */
    public destroy(): void {
        throw new Error('未实现！');
    }

    /**
     * 是否能被拾取
     * @type {Boolean}
     */
    public get pickable(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 从世界坐标位置转换成自身的坐标系坐标位置
     * @param {Array<number>} worldPos 世界坐标
     * @return {Array<number>} 相对于自身坐标系偏移量
     */
    public worldToSelf(worldPos: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 从自身的坐标系坐标位置转换成世界坐标位置
     * @param {Array<number>} localPos 相对于自身坐标系偏移量
     * @return {Array<number>} 世界坐标
     */
    public selfToWorld(localPos: number[]): number[] {
        throw new Error('未实现！');
    }

    /**
     * 计算距离
     * @param {Array<number>|BaseObject} position 世界坐标位置或者物体(取物体的世界坐标)
     * @return {Number} 距离
     */
    public distanceTo(position: number[] | BaseObject): number {
        throw new Error('未实现！');
    }

    /**
     * 设置观察朝向
     * @param {Array<Number>|BaseObject|CameraController} target 世界坐标、物体或者摄像机(null 表示取消观察朝向)
     * @param {Array<Number>} angles? 叠加的修正值
     */
    public lookAt(target: number[] | BaseObject | CameraController, angles?: number[]): void {
        throw new Error('未实现！');
    }

    /**
     * 让物体按照指定轴旋转(默认Y轴)
     * @param {Number} angle 角度值
     * @param {Array<number>} axis 方向轴，默认使用up朝向
     */
    public rotate(angle: number, axis: number[]): void {
        throw new Error('未实现！');
    }

    /**
     * 沿x轴转
     * @param {Number} value x轴角度
     */
    public rotateX(value: number): void {
        throw new Error('未实现！');
    }

    /**
     * 沿y轴转
     * @param {Number} value y轴角度
     */
    public rotateY(value: number): void {
        throw new Error('未实现！');
    }

    /**
     * 沿z轴转
     * @param {Number} value z轴角度
     */
    public rotateZ(value: number): void {
        throw new Error('未实现！');
    }

    /**
     * 绕点旋转
     * @param {Object} params 参数列表
     * @param {Array<number>} params.target 围绕点的世界坐标
     * @param {number} params.speed 转速
     * @param {number} params.distance? 距离
     * @see https://en.wikipedia.org/wiki/Spherical_coordinate_system
     */
    public rotateAround(params: {
        target: number[];
        speed: number;
        "distance?": number;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 在一段时间内进行旋转处理
     * @param {Object} params 参数列表
     * @param {Array<number>} params.angles 旋转角度
     * @param {Number} params.time? 旋转总时间
     * @param {Number} params.speed? 旋转速度
     * @param {Number} params.delayTime? 延迟旋转
     * @param {Function} params.complete? 完成时的回调
     * @param {LerpType} params.lerpType? 插值类型
     * @example
     * obj.rotateTo({
     *         'angles': [45, 45, 45],     // 旋转角度
     *         'time': 12000,              // 总时间
     *         'delayTime': 500,           // 延迟500毫秒后进行
     *         'complete': function () {
     *             console.log('scale completed');  // 旋转结束回调
     *         }
     *     });
     */
    public rotateTo(params: {
        angles: number[];
        "time?": number;
        "speed?": number;
        "delayTime?": number;
        "complete?": () => any;
        "lerpType?": LerpType;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止旋转处理
     */
    public stopRotating(): void {
        throw new Error('未实现！');
    }

    /**
     * 在一段时间内进行缩放处理
     * @param {Object} params
     * @param {Array<number>} params.scale 缩放值
     * @param {Number} params.time? 缩放总时间
     * @param {Number} params.speed? 缩放速度
     * @param {Number} params.delayTime? 延迟缩放
     * @param {Function} params.complete? 完成时的回调
     * @param {LerpType} params.lerpType? 插值类型
     * @example
     * obj.scaleTo({
     *         'scale': [2, 2, 2],         // 缩放值
     *         'time': 12000,              // 总时间
     *         'delayTime': 500,           // 延迟500毫秒后进行
     *         'complete': function () {
     *             console.log('scale completed');  // 缩放结束回调
     *         }
     *     });
     */
    public scaleTo(params: {
        scale: number[];
        "time?": number;
        "speed?": number;
        "delayTime?": number;
        "complete?": () => any;
        "lerpType?": LerpType;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止缩放处理
     */
    public stopScaling(): void {
        throw new Error('未实现！');
    }

    /**
     * 绑定事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} callback 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     * @param {Number} priority ? 优先级，数值越大优先级越高
     * @example
     * object.on('click', {id: 1, hit: false}, function(ev) {...});
     * object.on('update', function(ev) {...});
     */
    public on(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 解绑事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Function} callback 事件触发的回调函数
     */
    public off(eventType: string, selector: string, callback: () => any): void {
        throw new Error('未实现！');
    }

    /**
     * 绑定事件(只触发一次)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} callback 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     * @param {Number} priority ? 优先级，数值越大优先级越高
     */
    public one(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 查询是否绑定了某个事件
     * @param {String} eventType 事件名称
     * @param {String|Function} tag 标识名字或者回调函数
     * @return {Boolean} 是否已经成功绑定
     */
    public hasEvent(eventType: string, tag: string | (() => any)): boolean {
        throw new Error('未实现！');
    }

    /**
     * 发送事件
     * @param {String} eventType 事件名称
     * @param {Object} ev 事件信息
     * @param {String} tag? 事件名字标记
     */
    public trigger(eventType: string, ev: any, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 暂停事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public pauseEvent(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 暂停事件响应(当前帧，下一帧恢复响应)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public pauseEventInFrame(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 恢复事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    public resumeEvent(eventType: string, selector: string, tag?: string): void {
        throw new Error('未实现！');
    }

    /**
     * 获取子部件
     * @type {Selector}
     */
    public get subNodes(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 在子物体中查询
     * @param {Object} param 参数列表
     * @return {Array<BaseObject>} 查询结果，注意是以数组的方式提供，如果什么都没有找到就返回 []
     * @example
     * app.query('car01') 查询名称为car01的对象
     * app.query('.Thing') 查询类型为Thing的对象
     * app.query('#001') 查询id为001的对象
     * app.query('[prop=value]') 查询id为001的对象
     */
    public query(param: any): (BaseObject)[] {
        throw new Error('未实现！');
    }

    /**
     * 判断是否为其子物体
     * @param {BaseObject} parent 物体
     * @return {Boolean}
     */
    public isChildOf(parent: BaseObject): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否为其兄弟物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    public isBrotherOf(object: BaseObject): boolean {
        throw new Error('未实现！');
    }

    /**
     * 获取连接点
     * @type {Array}
     */
    attachPoints: any[];

    /**
     * 根据自身坐标系移动
     * @param {Array<Number>} localPosition 偏移量
     */
    public translate(localPosition: number[]): void {
        throw new Error('未实现！');
    }

    /**
     * 一段时间内移动到某位置
     * @param {Object} params
     * @param {Array} params.path 路径
     * @param {Array<Number>|BaseObject} params.position 目标位置
     * @param {Boolean} params.orientToPath? 是否朝向移动的方向
     * @param {Boolean} params.lerp? 是否差值，让移动过程平滑
     * @param {Number} params.time? 移动总时间
     * @param {Function} params.complete? 完成时的回调
     * @param {Array} params.localPosition? 偏移位置
     * @param {Number} params.delayTime? 延迟移动
     * @example
     *  obj.moveTo([0, 0, 10]);
     *  obj.moveTo({
     *   "localPosition": Math.randomVector3(10, 0, 10),
     *   "time": 1500,
     *   "orientToPath": true,
     *   "lerp": false,
     *   "complete":function() {
     *       move_to_next();
     *   }
     * });
     */
    public moveTo(params: {
        path: any[];
        position: number[] | BaseObject;
        "orientToPath?": boolean;
        "lerp?": boolean;
        "time?": number;
        "complete?": () => any;
        "localPosition?": any[];
        "delayTime?": number;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 一段时间内移动到某位置
     * @param {Object} params
     * @param {Array<Number>} params.path 路径
     * @param {Boolean} params.orientToPath? 是否朝向移动的方向
     * @param {Number} params.orientToPathDegree? 朝向路径的偏移角度
     * @param {Array} params.lookAt? 移动过程中观察某点
     * @param {Number} params.time? 移动总时间
     * @param {Number} params.speed? 移动速度
     * @param {Number} params.delayTime? 延迟移动
     * @param {Function} params.complete? 完成时的回调
     * @param {Array} params.position? 起始位置
     * @param {Boolean} params.lerp? 是否使用插值, 如果使用插值的话，物体会慢慢转向，反之则离开转向
     * @param {LerpType} params.lerpType? 插值类型
     * @param {number} params.loopType? 循环类型
     * @example
     * obj.movePath({
     *         'position': path[0],        // 运动起点
     *         'orientToPath' : true,      // 物体移动时沿向路径方向
     *         'orientToPathDegree': 90,   // 沿向路径方向偏移一定角度
     *         'path': path,               // 路径点数组
     *         'time': 12000,              // 路径总时间
     *         'delayTime': 500,           // 延迟500毫秒后进行
     *         'loopType': LoopType.No, // 循环状态
     *         'complete': function () {
     *             console.log('move completed');  // 路径结束回调
     *         }
     *     });
     */
    public movePath(params: {
        path: number[];
        "orientToPath?": boolean;
        "orientToPathDegree?": number;
        "lookAt?": any[];
        "time?": number;
        "speed?": number;
        "delayTime?": number;
        "complete?": () => any;
        "position?": any[];
        "lerp?": boolean;
        "lerpType?": LerpType;
        "loopType?": number;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 停止移动
     */
    public stopMoving(): void {
        throw new Error('未实现！');
    }

    /**
     * 判断属性是否存在
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     */
    public hasAttribute(key: string): void {
        throw new Error('未实现！');
    }

    /**
     * 获取属性值
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     * @return {*} 属性值
     */
    public getAttribute(key: string): any {
        throw new Error('未实现！');
    }

    /**
     * 设置属性值
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     * @param {*} value 属性值
     */
    public setAttribute(key: string, value: any): void {
        throw new Error('未实现！');
    }

    /**
     * 批量设置属性值
     * @param {Object} attributes 属性列表
     * @param {Boolean} overwrite 是否覆盖现有属性(默认覆盖)
     */
    public setAttributes(attributes: any, overwrite?: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 获取/设置物体名字
     * @type {String}
     */
    public get name(): string {
        throw new Error('未实现！');
    }

    /**
     * 获取/设置用户自定义属性
     * @type {Object}
     */
    public get userData(): any {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏网格
     * @param {Number} size 平面大小
     * @param {Number} divisions 细分面数量
     * @param {Number|String} color1 坐标轴颜色
     * @param {Number|String} color2 网格颜色
     * @param {Number} pickGroundSize? 拾取平面大小
     * @param {Number} distance? 平面偏移距离，默认值为 0.1 以方便拾取
     */
    public showGrid(size: number, divisions: number, color1: number | string, color2: number | string, pickGroundSize?: number, distance?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 获取网格大小
     * @type {Number}
     */
    public get gridSize(): number {
        throw new Error('未实现！');
    }

    /**
     * 淡入/淡出
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    public fade(param: {
        time: number;
        complete: () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 淡入
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    public fadeIn(param: {
        time: number;
        complete: () => any;
    }): void {

    }

    /**
     * 淡出
     * @param {Object} param
     * @param {Number} param.time 淡出时间
     * @param {Function} param.complete 完成回调
     */
    public fadeOut(param: {
        time: number;
        complete: () => any;
    }): void {
        throw new Error('未实现！');
    }

    /**
     * 序列化
     * @return {Object} JSON 数据
     */
    public toJSON(): any {
        throw new Error('未实现！');
    }

    /**
     * 添加控件
     * @param {Object} type 内核控件类型或者用户自定义控件类型
     * @param {Object} params 控件初始化参数
     * @return {Object} 控件
     */
    public addControl(type: any, params: any): any {
        throw new Error('未实现！');
    }

    /**
     * 删除控件
     * @param {Object} control 控件
     */
    public removeControl(control: any): void {
        throw new Error('未实现！');
    }

    /**
     * 删除所有控件
     */
    public removeAllControls(): void {

    }

    /**
     * 查询是否拥有控件
     * @param {Object} control 控件
     * @return {Boolean}
     */
    public hasControl(control: any): boolean {
        throw new Error('未实现！');
    }

    /**
     * 获取控件列表
     * @type {Array<Object>}
     */
    public get controls(): any[] {
        throw new Error('未实现！');
    }

    /**
     * 世界坐标位置
     * @type {Array<number>}
     */
    public get position(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 局部相对位置, 相对于父节点
     * @type {Array<number>}
     */
    public get localPosition(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 三轴相对角度，相对于自身坐标
     * @type {Array<number>}
     */
    public get angles(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 相对自身坐标系下的缩放比例
     * @type {Array<number>}
     */
    public get scale(): number[] {
        throw new Error('未实现！');
    }

    /**
     * 获取样式
     * @type {BaseStyle}
     */
    public get style(): BaseStyle {
        throw new Error('未实现！');
    }

    /**
     * 是否可被拖拽
     * @type {Boolean}
     */
    public get draggable(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 当前拖拽状态
     * @type {number}
     */
    public get dragState(): number {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏
     * @type {Boolean}
     */
    public get visible(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 获取所有兄弟(排除自己)
     * @type {Selector}
     */
    public get brothers(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取所有父物体(祖先)
     * @type {Selector}
     */
    public get parents(): Selector {
        throw new Error('未实现！');
    }

    /**
     * 获取父物体
     * @type {BaseObject}
     */
    public get parent(): BaseObject {
        return this._parent;
    }

    /**
     * 获取物体相对父物体的子节点下标值.
     * @return {Number} 子物体所在数组下标, -1 表示不存在于父物体的子物体列表中，或者父物体为空
     */
    public indexOfParent(): number {
        throw new Error('未实现！');
    }

    /**
     * 物体唯一 ID
     * @type {String}
     */
    public get id(): string {
        throw new Error('未实现！');
    }

    /**
     * 位置独立
     * @type {Boolean}
     */
    public get inheritPosition(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 角度独立
     * @type {Boolean}
     */
    public get inheritAngles(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 缩放独立
     * @type {Boolean}
     */
    public get inheritScale(): boolean {
        throw new Error('未实现！');
    }

}