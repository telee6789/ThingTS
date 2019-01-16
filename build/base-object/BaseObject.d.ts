import { Selector } from '../query/Selector';
import { BaseStyle } from '../effect/BaseStyle';
import { CameraController } from '../camera/CameraController';
import { LerpType } from '../other/LerpType';
import { App } from '../core-object/App';
import { Object3D } from 'three';
export declare class BaseObject {
    readonly app: App;
    readonly node: Object3D;
    private _parent;
    constructor(app: App, node?: Object3D, parent?: BaseObject);
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
    add(params: {
        object: BaseObject;
        "localPosition?": number[];
        "angles?": number[];
        "basePoint?": string;
        "keepNode?": boolean;
    }, index?: number): void;
    /**
     * 移除子物体
     * @param {BaseObject} object 物体
     */
    remove(object: BaseObject): void;
    /**
     * 检测是否拥有此子物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    hasChild(object: BaseObject): boolean;
    /**
     * 销毁自身
     */
    destroy(): void;
    /**
     * 是否能被拾取
     * @type {Boolean}
     */
    readonly pickable: boolean;
    /**
     * 从世界坐标位置转换成自身的坐标系坐标位置
     * @param {Array<number>} worldPos 世界坐标
     * @return {Array<number>} 相对于自身坐标系偏移量
     */
    worldToSelf(worldPos: number[]): number[];
    /**
     * 从自身的坐标系坐标位置转换成世界坐标位置
     * @param {Array<number>} localPos 相对于自身坐标系偏移量
     * @return {Array<number>} 世界坐标
     */
    selfToWorld(localPos: number[]): number[];
    /**
     * 计算距离
     * @param {Array<number>|BaseObject} position 世界坐标位置或者物体(取物体的世界坐标)
     * @return {Number} 距离
     */
    distanceTo(position: number[] | BaseObject): number;
    /**
     * 设置观察朝向
     * @param {Array<Number>|BaseObject|CameraController} target 世界坐标、物体或者摄像机(null 表示取消观察朝向)
     * @param {Array<Number>} angles? 叠加的修正值
     */
    lookAt(target: number[] | BaseObject | CameraController, angles?: number[]): void;
    /**
     * 让物体按照指定轴旋转(默认Y轴)
     * @param {Number} angle 角度值
     * @param {Array<number>} axis 方向轴，默认使用up朝向
     */
    rotate(angle: number, axis: number[]): void;
    /**
     * 沿x轴转
     * @param {Number} value x轴角度
     */
    rotateX(value: number): void;
    /**
     * 沿y轴转
     * @param {Number} value y轴角度
     */
    rotateY(value: number): void;
    /**
     * 沿z轴转
     * @param {Number} value z轴角度
     */
    rotateZ(value: number): void;
    /**
     * 绕点旋转
     * @param {Object} params 参数列表
     * @param {Array<number>} params.target 围绕点的世界坐标
     * @param {number} params.speed 转速
     * @param {number} params.distance? 距离
     * @see https://en.wikipedia.org/wiki/Spherical_coordinate_system
     */
    rotateAround(params: {
        target: number[];
        speed: number;
        "distance?": number;
    }): void;
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
    rotateTo(params: {
        angles: number[];
        "time?": number;
        "speed?": number;
        "delayTime?": number;
        "complete?": () => any;
        "lerpType?": LerpType;
    }): void;
    /**
     * 停止旋转处理
     */
    stopRotating(): void;
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
    scaleTo(params: {
        scale: number[];
        "time?": number;
        "speed?": number;
        "delayTime?": number;
        "complete?": () => any;
        "lerpType?": LerpType;
    }): void;
    /**
     * 停止缩放处理
     */
    stopScaling(): void;
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
    on(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void;
    /**
     * 解绑事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Function} callback 事件触发的回调函数
     */
    off(eventType: string, selector: string, callback: () => any): void;
    /**
     * 绑定事件(只触发一次)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} userData 事件绑定自定义数据, 如果是 Function 类型，也表示回调函数参数
     * @param {Function} callback 事件触发的回调函数
     * @param {String} tag? 事件名字标记
     * @param {Number} priority ? 优先级，数值越大优先级越高
     */
    one(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void;
    /**
     * 查询是否绑定了某个事件
     * @param {String} eventType 事件名称
     * @param {String|Function} tag 标识名字或者回调函数
     * @return {Boolean} 是否已经成功绑定
     */
    hasEvent(eventType: string, tag: string | (() => any)): boolean;
    /**
     * 发送事件
     * @param {String} eventType 事件名称
     * @param {Object} ev 事件信息
     * @param {String} tag? 事件名字标记
     */
    trigger(eventType: string, ev: any, tag?: string): void;
    /**
     * 暂停事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    pauseEvent(eventType: string, selector: string, tag?: string): void;
    /**
     * 暂停事件响应(当前帧，下一帧恢复响应)
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    pauseEventInFrame(eventType: string, selector: string, tag?: string): void;
    /**
     * 恢复事件响应
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {String} tag? 事件名字标记
     */
    resumeEvent(eventType: string, selector: string, tag?: string): void;
    /**
     * 获取子部件
     * @type {Selector}
     */
    readonly subNodes: Selector;
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
    query(param: any): (BaseObject)[];
    /**
     * 判断是否为其子物体
     * @param {BaseObject} parent 物体
     * @return {Boolean}
     */
    isChildOf(parent: BaseObject): boolean;
    /**
     * 判断是否为其兄弟物体
     * @param {BaseObject} object 物体
     * @return {Boolean}
     */
    isBrotherOf(object: BaseObject): boolean;
    /**
     * 获取连接点
     * @type {Array}
     */
    attachPoints: any[];
    /**
     * 根据自身坐标系移动
     * @param {Array<Number>} localPosition 偏移量
     */
    translate(localPosition: number[]): void;
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
    moveTo(params: {
        path: any[];
        position: number[] | BaseObject;
        "orientToPath?": boolean;
        "lerp?": boolean;
        "time?": number;
        "complete?": () => any;
        "localPosition?": any[];
        "delayTime?": number;
    }): void;
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
    movePath(params: {
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
    }): void;
    /**
     * 停止移动
     */
    stopMoving(): void;
    /**
     * 判断属性是否存在
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     */
    hasAttribute(key: string): void;
    /**
     * 获取属性值
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     * @return {*} 属性值
     */
    getAttribute(key: string): any;
    /**
     * 设置属性值
     * @param {String} key 属性名字，可以使用 a/b/c 的路径方式
     * @param {*} value 属性值
     */
    setAttribute(key: string, value: any): void;
    /**
     * 批量设置属性值
     * @param {Object} attributes 属性列表
     * @param {Boolean} overwrite 是否覆盖现有属性(默认覆盖)
     */
    setAttributes(attributes: any, overwrite?: boolean): void;
    /**
     * 获取/设置物体名字
     * @type {String}
     */
    readonly name: string;
    /**
     * 获取/设置用户自定义属性
     * @type {Object}
     */
    readonly userData: any;
    /**
     * 显示/隐藏网格
     * @param {Number} size 平面大小
     * @param {Number} divisions 细分面数量
     * @param {Number|String} color1 坐标轴颜色
     * @param {Number|String} color2 网格颜色
     * @param {Number} pickGroundSize? 拾取平面大小
     * @param {Number} distance? 平面偏移距离，默认值为 0.1 以方便拾取
     */
    showGrid(size: number, divisions: number, color1: number | string, color2: number | string, pickGroundSize?: number, distance?: number): void;
    /**
     * 获取网格大小
     * @type {Number}
     */
    readonly gridSize: number;
    /**
     * 淡入/淡出
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    fade(param: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 淡入
     * @param {Object} param
     * @param {Number} param.time 淡入时间
     * @param {Function} param.complete 完成回调
     */
    fadeIn(param: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 淡出
     * @param {Object} param
     * @param {Number} param.time 淡出时间
     * @param {Function} param.complete 完成回调
     */
    fadeOut(param: {
        time: number;
        complete: () => any;
    }): void;
    /**
     * 序列化
     * @return {Object} JSON 数据
     */
    toJSON(): any;
    /**
     * 添加控件
     * @param {Object} type 内核控件类型或者用户自定义控件类型
     * @param {Object} params 控件初始化参数
     * @return {Object} 控件
     */
    addControl(type: any, params: any): any;
    /**
     * 删除控件
     * @param {Object} control 控件
     */
    removeControl(control: any): void;
    /**
     * 删除所有控件
     */
    removeAllControls(): void;
    /**
     * 查询是否拥有控件
     * @param {Object} control 控件
     * @return {Boolean}
     */
    hasControl(control: any): boolean;
    /**
     * 获取控件列表
     * @type {Array<Object>}
     */
    readonly controls: any[];
    /**
     * 世界坐标位置
     * @type {Array<number>}
     */
    readonly position: number[];
    /**
     * 局部相对位置, 相对于父节点
     * @type {Array<number>}
     */
    readonly localPosition: number[];
    /**
     * 三轴相对角度，相对于自身坐标
     * @type {Array<number>}
     */
    readonly angles: number[];
    /**
     * 相对自身坐标系下的缩放比例
     * @type {Array<number>}
     */
    readonly scale: number[];
    /**
     * 获取样式
     * @type {BaseStyle}
     */
    readonly style: BaseStyle;
    /**
     * 是否可被拖拽
     * @type {Boolean}
     */
    readonly draggable: boolean;
    /**
     * 当前拖拽状态
     * @type {number}
     */
    readonly dragState: number;
    /**
     * 显示/隐藏
     * @type {Boolean}
     */
    readonly visible: boolean;
    /**
     * 获取所有兄弟(排除自己)
     * @type {Selector}
     */
    readonly brothers: Selector;
    /**
     * 获取所有父物体(祖先)
     * @type {Selector}
     */
    readonly parents: Selector;
    /**
     * 获取父物体
     * @type {BaseObject}
     */
    readonly parent: BaseObject;
    /**
     * 获取物体相对父物体的子节点下标值.
     * @return {Number} 子物体所在数组下标, -1 表示不存在于父物体的子物体列表中，或者父物体为空
     */
    indexOfParent(): number;
    /**
     * 物体唯一 ID
     * @type {String}
     */
    readonly id: string;
    /**
     * 位置独立
     * @type {Boolean}
     */
    readonly inheritPosition: boolean;
    /**
     * 角度独立
     * @type {Boolean}
     */
    readonly inheritAngles: boolean;
    /**
     * 缩放独立
     * @type {Boolean}
     */
    readonly inheritScale: boolean;
}
