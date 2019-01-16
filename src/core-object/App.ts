import { CameraController } from '../camera/CameraController';
import { BaseObject } from '../base-object/BaseObject';
import { Marker } from '../ui/Marker';
import { WebView } from '../ui/WebView';
import { UIAnchor } from '../ui/UIAnchor';
import { SceneLevel } from '../scene-level/SceneLevel';
import { SceneRoot } from '../scene-level/SceneRoot';
import { Engine } from '../three/Engine';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 17:41:31
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-13 13:13:03
 * @Description: ThingTS库入口对象，提供加载场景、搜索、事件绑定、摄像机控制等
 */
export class App {
    /** 引擎封装对象 */
    public readonly engine: Engine;
    /** DOM容器 */
    public readonly domElement: HTMLElement;
    /** 摄像机 */
    public readonly camera: CameraController;
    public constructor(options?: {
        container?: HTMLElement;
        url?: string;
        complete?: () => any;
        success?: () => any;
        error?: () => any;
        progress?: () => any;
        background?: number;
        skyBox?: string;
        gamma?: number;
    }) {
        //传入参数初始化
        if (options) {
            options.container ? this.domElement = options.container : document.body;
        }
        else {
            this.domElement = document.body;
        }

        this.engine = new Engine(this);
        this.camera = new CameraController(this);
    }

    /** 从启动到现在的流逝时间(秒) */
    public get elapsedTime(): number {
        return this.engine.clock.getElapsedTime();
    }

    /** 距离上一帧的流逝时间(秒) */
    public get deltaTime(): number {
        return this.engine.clock.getDelta();
    }

    /** 当前帧计数器 */
    public get currentFrame(): number {
        return this.engine.currentFrame;
    }

    /**
     * 创建物体
     * @param {String} type 物体类型
     * @param {String} name 物体名称
     * @param {String} url 物体模型链接
     * @param {Array} position 物体生成位置
     * @param {Function} complete 物体生成后的回调
     * @return {THING.BaseObject|THING.Marker|THING.WebView|THING.UIAnchor}
     * @example
     * // type:'Thing'
     * var truck = app.create({
     * 		type: 'Thing',
     * 		name: 'truck',
     * 		url: 'https://speech.uinnova.com/static/models/truck/',
     * 		position: [-5, 0, 0],
     * 		complete: function() {
     * 			console.log('truck created!');
     *      }
     * });
     * // type:'UI';
     * var ui = app.create({
     * 		type: 'UI',
     * 		el: element, // 界面的dom元素
     * 		parent: parent, // 界面的父节点(位置跟随父节点更新)
     * 		localPosition:[0,0,0], //相对parent的偏移
     * 		pivot:[0,0.5],  // 界面的重心
     * });
     * // type:'Marker';
     * var marker = app.create({
     * 		type: "Marker",
     * 		localPosition: [0, 5, 0], // 相对于包围盒的最高点偏移量
     * 		size: 4,
     * 		url: "https://speech.uinnova.com/static/images/warning1.png",
     * 		parent: app.query('car01')[0]
     * });
     * // type:'WebView';
     *  var webView = app.create({
     * 		type: 'WebView',
     * 		url: 'http://www.baidu.com/',
     * 		position: [0, 0, 0],
     * 		width: 16,
     * 		height: 16
     * });
     * // type:'Box';
     * var box = app.create({
     * 		type: 'Box',
     * 		width: 1.0, // 宽度
     * 		height: 1.0, // 高度
     * 		depth: 1.0, // 深度
     * 		widthSegments: 1.0, //宽度上的节数
     * 		heightSegments: 1.0, // 高度上的节数
     * 		depthSegments: 1.0, // 深度上的节数
     * 	center:'Bottom', // 中心点
     * 	style: {
     *     		color: '#ffffff',
     *     		opacity: 0.8,
     *     		image: 'images/uv.jpg'
     * 	}
     * });
     * // type:'Sphere';
     * var sphere = app.create({
     * 		type: 'Sphere',
     * 		radius: 1,
     * 		widthSegments: 12,
     * 		heightSegments: 12,
     * 		position: [2, 0, 0],
     * 	style: {
     * 			image: 'images/perlin-512.png'
     * 		}
     * });
     * // type:'Plane';
     * var plane = app.create({
     * 		type: 'Plane',
     * 		width: 2,
     * 		height: 1,
     * 		position: [4, 0, 0],
     * 		style: {
     * 			doubleSide: true,
     * 			image: 'images/perlin-512.png'
     * 		}
     * });
     * // type:'Cylinder';
     * var plane = app.create({
     * 		type: 'Cylinder',
     * 		radius: 0.4,
     * 		height: 1.6,
     * 		position: [0, 0, 2]
     * });
     * // type:'Tetrahedron';
     * var t = app.create({
     * 		type: 'Tetrahedron',
     * 		radius: 1,
     * 		position: [2, 0, 2]
     * });
     * // 另外,可以通过 t3d.factory.registerClass(类名, '物体类型名') 来扩展物体类型
     */
    public create(type: string, name: string, url: string, position: any[], complete: () => any): BaseObject | Marker | WebView | UIAnchor {
        throw new Error('未实现！');
    }

    /**
     * 物体查询
     * @param {String} 参数列表
     * @return {Array<THING.BaseObject>} 查询结果，注意是以数组的方式提供，如果什么都没有找到就返回 []
     * @example
     * app.query('car01') 查询名称为 car01 的对象
     * app.query('.Thing') 查询类型为 Thing 的对象
     * app.query('#001') 查询id为 001 的对象
     * app.query('[prop=value]') 查询自定义属性为 [prop=value] 的对象
     * app.query('/car/') 查询名字中包含 car 的对象
     */
    public query(params: string): (BaseObject)[] {
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
     * app.on('click', '.Building', function(ev) {...});
     * app.on('click', '.Thing', {id: 1, hit: false}, function(ev) {...});
     * app.on('update', function(ev) {...});
     */
    public on(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 解绑事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息, 如果是 Function 类型，也表示回调函数参数
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
     * @example
     * app.one('click', '.Building', function(ev) {...});
     * app.one('click', '.Thing', {id: 1, hit: false}, function(ev) {...});
     * app.one('update', function(ev) {...});
     */
    public one(eventType: string, selector: string, userData: any, callback: () => any, tag?: string, priority?: number): void {
        throw new Error('未实现！');
    }

    /**
     * 发送事件
     * @param {String} eventType 事件名称
     * @param {String} selector 物体类型选择信息
     * @param {Object} ev 事件信息
     */
    public trigger(eventType: string, selector: string, ev: any): void {
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
     * 获得园区数据，不会加载场景渲染资源, 信息将以JSON数据的方式返回。
     * 主要用途是查询未加载或者准备加载场景的数据，因为没有渲染信息的加载，所以速度会非常快。
     * @param {String} url 园区路径
     * @param {Object} params 参数列表
     * @return {Object}
     */
    public getCampusJSON(url: string, params: any): any {
        throw new Error('未实现！');
    }

    /**
     * 获取像素比例，在移动设备上，为了渲染效率，我们通常会把这个值设置成比1还要小的数值，从而获得较小的渲染分辨率来提供帧率。
     * 数值越大，渲染效果越清晰(帧率低)，数值越小，渲染效果越模糊(帧率高)
     * @type {Number}
     */
    public get pixelRatio(): number {
        throw new Error('未实现！');
    }

    /**
     * 设置时间线效果
     * @type {Object} options 参数列表
     * @type {Number} options.time 时间
     * @type {Number} options.beta
     * @type {Number} options.turbidity 混浊度
     * @type {Number} options.rayleigh 瑞利散射
     * @type {Number} options.mieCoefficient 散射系数
     * @type {Number} options.mieDirectionalG
     */
    public set skyEffect(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置灯光参数
     * @type {Object} options 参数列表
     * @type {Object} options.ambientLight 环境光
     * @type {Number} options.ambientLight.intensity
     * @type {Number} options.ambientLight.color
     * @type {Object} options.mainLight 主灯光
     * @type {Number} options.mainLight.intensity
     * @type {Number} options.mainLight.color
     * @type {Number} options.mainLight.alpha
     * @type {Number} options.mainLight.beta
     * @type {Object} options.secondaryLight 第二光源
     * @type {Number} options.secondaryLight.intensity
     * @type {Number} options.secondaryLight.color
     * @type {Number} options.secondaryLight.alpha
     * @type {Number} options.secondaryLight.beta
     */
    public set lighting(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置雾参数
     * @type {Object} options
     * @type {String} options.type 目前支持特殊类型 `Exp2`,及默认类型
     * @type {Number} options.color
     * @type {Number} options.far
     * @type {Number} options.near
     * @example
     * // 线性雾
     * app.fog = {color: 0x888888, near: 1, far: 100};
     * // 清除雾
     * app.fog = null;
     */
    public set fog(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置后期处理参数
     * @type {Object} options 参数列表
     * @type {Object} options.temporalSuperSampling 超采样(场景静止时起作用)
     * @type {boolean} options.temporalSuperSampling.enable
     * @type {Number} options.temporalSuperSampling.size 采样的帧数，帧数越多，收敛速度越慢
     * @type {Object} options.postEffect 后期处理
     * @type {boolean} options.postEffect.enable
     * @type {Object} options.bloom 泛光（会影响天空盒）
     * @type {boolean} options.bloom.enable
     * @type {Number} options.bloom.strength 泛光强度
     * @type {Number} options.bloom.radius 泛光半径
     * @type {Number} options.bloom.threshold 泛光阈值
     * @type {Object} options.screenSpaceAmbientOcclusion 屏幕空间环境光遮蔽（相对昂贵的性能开销）
     * @type {boolean} options.screenSpaceAmbientOcclusion.enable
     * @type {Number} options.screenSpaceAmbientOcclusion.radius 采样半径
     * @type {Number} options.screenSpaceAmbientOcclusion.quality 采样等级
     * @type {Number} options.screenSpaceAmbientOcclusion.intensity 环境光遮蔽强度
     * @type {Number} options.screenSpaceAmbientOcclusion.temporalFilter 使用temporal超采样时起作用，柔化采样效果
     * @type {boolean} options.screenSpaceAmbientOcclusion.ignoreTransparent 忽略透明物体
     * @type {Object} options.colorCorrection 颜色调整
     * @type {boolean} options.colorCorrection.enable
     * @type {Number} options.colorCorrection.exposure 曝光
     * @type {Number} options.colorCorrection.brightness 亮度
     * @type {Number} options.colorCorrection.contrast 对比度
     * @type {Number} options.colorCorrection.saturation 饱和度
     * @type {Object} options.FXAA 抗锯齿
     * @type {boolean} options.FXAA.enable
     * @type {boolean} resetOther? 是否重置其它未设置的后期处理配置，默认为false，会保持当前的设置状态
     */
    public postEffect(value: any) {
        throw new Error('未实现！');
    }

    /**
     * 设置Document偏移量。
     * 在页面的嵌套应用中，可能需要设置渲染DIV的位置，所以相对于渲染窗口的[0,0]坐标点可能会出现偏移。
     * 这里就需要设置整个窗体相对于父窗口的偏移量(domOffset)，如果设置不正确的话，拾取会出现位置上的偏移错误。
     * @type {Array<number>}
     */
    public domOffset(value: number[]) {
        throw new Error('未实现！');
    }

    /**
     * 设置背景颜色或者图片
     * @type {String|Number} value 图片路径或者颜色值
     */
    public background(value: string | number) {
        throw new Error('未实现！');
    }

    /**
     * 设置天空盒(THING JS目前提供了几个天空盒,分别是'BlueSky','MilkyWay','Night','SunCloud')
     * @type {String} 天空盒名称
     * @example
     * var app = new THING.App({ skyBox: "BlueSky" });
     */
    public set skyBox(value: string) {
        throw new Error('未实现！');
    }

    /**
     * 显示/隐藏进度条
     * @type {boolean}
     */
    public set loadingProgressBarVisible(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 判断某按键是否按下
     * @param {number} key 键值
     * @return {Boolean}
     */
    public isKeyPressed(key: number): boolean {
        throw new Error('未实现！');
    }

    /**
     * 判断是否移动端设备
     * @type {boolean}
     */
    public get isMobileDevice(): boolean {
        throw new Error('未实现！');
    }

    /**
     * 暂停程序
     * @type {boolean}
     */
    public set pause(value: boolean) {
        throw new Error('未实现！');
    }

    /**
     * 获取场景层次管理器
     * @type {THING.SceneLevel}
     */
    public get level(): SceneLevel {
        throw new Error('未实现！');
    }

    /**
     * 获取场景根节点
     * @type {THING.SceneRoot}
     */
    public get root(): SceneRoot {
        throw new Error('未实现！');
    }

    /**
     * 将当前截屏保存到缓冲区中
     * @param {String} extension 文件类型
     * @param {number} quality 质量
     * @param {Boolean} allowDownload 是否允许被下载
     */
    public captureScreenshotToImage(extension?: string, quality?: number, allowDownload?: boolean): void {
        throw new Error('未实现！');
    }

    /**
     * 将当前截屏保存到指定文件中
     * @param {String} fileName 文件路径
     */
    public captureScreenshot(fileName: string): void {
        throw new Error('未实现！');
    }

    /**
     * 保存文件
     * @param {String} fileName 文件路径
     * @param {String} data 文件数据
     */
    public saveFile(fileName: string, data: string): void {
        throw new Error('未实现！');
    }

}