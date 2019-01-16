import * as THREE from 'three';

const STATE = {
    NONE: - 1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_DOLLY: 4,
    TOUCH_PAN: 5
};

const CHANGE_EVENT = { type: 'change' };
const START_EVENT = { type: 'start' };
const END_EVENT = { type: 'end' };
const EPS = 0.000001;

/**
* @author qiao / https://github.com/qiao
* @author mrdoob / http://mrdoob.com
* @author alteredq / http://alteredqualia.com/
* @author WestLangley / http://github.com/WestLangley
* @author erich666 / http://erichaines.com
* @author nicolaspanel / http://github.com/nicolaspanel
*
* 这组控件执行轨道、缩放和平移操作。
* 与TrackballControls不同，它维护“向上”的方向对象。向上(默认为+Y)
*    Orbit - 鼠标左键/触摸:移动一个手指
*    Zoom - 鼠标中键，或鼠标滚轮/触摸:两个手指展开或挤压
*    Pan - 鼠标右键，或箭头键/触摸:三指滑动
*/
export class OrbitControls extends THREE.EventDispatcher {
    object: THREE.Camera;
    domElement: HTMLElement | HTMLDocument;
    window: Window;

    // API
    enabled: boolean;
    target: THREE.Vector3;

    enableZoom: boolean;
    zoomSpeed: number;
    minDistance: number;
    maxDistance: number;
    enableRotate: boolean;
    rotateSpeed: number;
    enablePan: boolean;
    keyPanSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    minZoom: number;
    maxZoom: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    enableKeys: boolean;
    keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number; };
    mouseButtons: { ORBIT: THREE.MOUSE; ZOOM: THREE.MOUSE; PAN: THREE.MOUSE; };
    enableDamping: boolean;
    dampingFactor: number;

    private spherical: THREE.Spherical;
    private sphericalDelta: THREE.Spherical;
    private scale: number;
    private target0: THREE.Vector3;
    private position0: THREE.Vector3;
    private zoom0: any;
    private state: number;
    private panOffset: THREE.Vector3;
    private zoomChanged: boolean;

    private rotateStart: THREE.Vector2;
    private rotateEnd: THREE.Vector2;
    private rotateDelta: THREE.Vector2

    private panStart: THREE.Vector2;
    private panEnd: THREE.Vector2;
    private panDelta: THREE.Vector2;

    private dollyStart: THREE.Vector2;
    private dollyEnd: THREE.Vector2;
    private dollyDelta: THREE.Vector2;

    private updateLastPosition: THREE.Vector3;
    private updateOffset: THREE.Vector3;
    private updateQuat: THREE.Quaternion;
    private updateLastQuaternion: THREE.Quaternion;
    private updateQuatInverse: THREE.Quaternion;

    private panLeftV: THREE.Vector3;
    private panUpV: THREE.Vector3;
    private panInternalOffset: THREE.Vector3;

    private onContextMenu: EventListener;
    private onMouseUp: EventListener;
    private onMouseDown: EventListener;
    private onMouseMove: EventListener;
    private onMouseWheel: EventListener;
    private onTouchStart: EventListener;
    private onTouchEnd: EventListener;
    private onTouchMove: EventListener;
    private onKeyDown: EventListener;

    constructor(object: THREE.Camera, domElement?: HTMLElement, domWindow?: Window) {
        super();
        this.object = object;

        this.domElement = (domElement !== undefined) ? domElement : document;
        this.window = (domWindow !== undefined) ? domWindow : window;

        // 设置为false以禁用此控件
        this.enabled = true;

        // “目标”设置焦点的位置，即物体围绕的轨道
        this.target = new THREE.Vector3();

        // 你能移动多远(仅透视摄像机)
        this.minDistance = 0;
        this.maxDistance = Infinity;

        // 你可以放大和缩小多远(仅限正投影相机)
        this.minZoom = 0;
        this.maxZoom = Infinity;

        // 垂直轨道的距离，上限和下限。
        // 范围是0到Math.PI弧度。
        this.minPolarAngle = 0; // 弧度
        this.maxPolarAngle = Math.PI; // 弧度

        // 水平轨道的距离，上限和下限。
        // 如果设置，必须是区间的子区间 [ - Math.PI, Math.PI ].
        this.minAzimuthAngle = - Infinity; // 弧度
        this.maxAzimuthAngle = Infinity; // 弧度

        // 设为真，启用阻尼(惯性)
        // 如果启用阻尼，则必须在动画循环中调用controls.update()
        this.enableDamping = false;
        this.dampingFactor = 0.25;

        // 这个选项实际上可以实现娃娃化;左为“缩放”，向后兼容。
        // 设置为false以禁用缩放
        this.enableZoom = true;
        this.zoomSpeed = 1.0;

        // 设置为false禁用旋转
        this.enableRotate = true;
        this.rotateSpeed = 1.0;

        // 设置为false以禁用平移
        this.enablePan = true;
        this.keyPanSpeed = 7.0;	// 像素移动每箭头键推动

        // 设置为true以自动围绕目标旋转
        // 如果启用了自动旋转，则必须在动画循环中调用controls.update()
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; //fps为60时，每轮30秒

        // 设置为false以禁用键的使用
        this.enableKeys = true;

        // 四个箭头键
        this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

        // 鼠标按钮
        this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

        // 用于重置
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = (this.object as any).zoom;

        // 更新加速
        this.updateOffset = new THREE.Vector3();
        // 所以camera.up是轨道轴
        this.updateQuat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
        this.updateQuatInverse = this.updateQuat.clone().inverse();
        this.updateLastPosition = new THREE.Vector3();
        this.updateLastQuaternion = new THREE.Quaternion();

        this.state = STATE.NONE;
        this.scale = 1;

        // 球坐标下的当前位置
        this.spherical = new THREE.Spherical();
        this.sphericalDelta = new THREE.Spherical();

        this.panOffset = new THREE.Vector3();
        this.zoomChanged = false;

        this.rotateStart = new THREE.Vector2();
        this.rotateEnd = new THREE.Vector2();
        this.rotateDelta = new THREE.Vector2();

        this.panStart = new THREE.Vector2();
        this.panEnd = new THREE.Vector2();
        this.panDelta = new THREE.Vector2();

        this.dollyStart = new THREE.Vector2();
        this.dollyEnd = new THREE.Vector2();
        this.dollyDelta = new THREE.Vector2();

        this.panLeftV = new THREE.Vector3();
        this.panUpV = new THREE.Vector3();
        this.panInternalOffset = new THREE.Vector3();

        // 事件处理程序- FSM:监听事件并重置状态

        this.onMouseDown = (event: ThreeEvent) => {
            if (this.enabled === false) return;
            event.preventDefault();
            if ((event as any).button === this.mouseButtons.ORBIT) {
                if (this.enableRotate === false) return;
                this.rotateStart.set(event.clientX, event.clientY);
                this.state = STATE.ROTATE;
            } else if (event.button === this.mouseButtons.ZOOM) {
                if (this.enableZoom === false) return;
                this.dollyStart.set(event.clientX, event.clientY);
                this.state = STATE.DOLLY;
            } else if (event.button === this.mouseButtons.PAN) {
                if (this.enablePan === false) return;
                this.panStart.set(event.clientX, event.clientY);
                this.state = STATE.PAN;
            }

            if (this.state !== STATE.NONE) {
                document.addEventListener('mousemove', this.onMouseMove, false);
                document.addEventListener('mouseup', this.onMouseUp, false);
                this.dispatchEvent(START_EVENT);
            }
        };

        this.onMouseMove = (event: ThreeEvent) => {

            if (this.enabled === false) return;

            event.preventDefault();

            if (this.state === STATE.ROTATE) {
                if (this.enableRotate === false) return;
                this.rotateEnd.set(event.clientX, event.clientY);
                this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
                const element = this.domElement === document ? this.domElement.body : this.domElement;

                // 在整个屏幕上旋转360度
                this.rotateLeft(2 * Math.PI * this.rotateDelta.x / (element as any).clientWidth * this.rotateSpeed);
                // 在整个屏幕上上下旋转试图达到360度，但仅限于180度
                this.rotateUp(2 * Math.PI * this.rotateDelta.y / (element as any).clientHeight * this.rotateSpeed);
                this.rotateStart.copy(this.rotateEnd);

                this.update();
            } else if (this.state === STATE.DOLLY) {

                if (this.enableZoom === false) return;

                this.dollyEnd.set(event.clientX, event.clientY);
                this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

                if (this.dollyDelta.y > 0) {
                    this.dollyIn(this.getZoomScale());
                } else if (this.dollyDelta.y < 0) {
                    this.dollyOut(this.getZoomScale());
                }

                this.dollyStart.copy(this.dollyEnd);
                this.update();
            } else if (this.state === STATE.PAN) {

                if (this.enablePan === false) return;

                this.panEnd.set(event.clientX, event.clientY);
                this.panDelta.subVectors(this.panEnd, this.panStart);
                this.pan(this.panDelta.x, this.panDelta.y);
                this.panStart.copy(this.panEnd);
                this.update();
            }
        }

        this.onMouseUp = (event: ThreeEvent) => {
            if (this.enabled === false) return;
            document.removeEventListener('mousemove', this.onMouseMove, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);

            this.dispatchEvent(END_EVENT);
            this.state = STATE.NONE;
        };

        this.onMouseWheel = (event: ThreeEvent) => {

            if (this.enabled === false || this.enableZoom === false || (this.state !== STATE.NONE && this.state !== STATE.ROTATE)) return;

            event.preventDefault();
            event.stopPropagation();

            if (event.deltaY < 0) {
                this.dollyOut(this.getZoomScale());
            } else if (event.deltaY > 0) {
                this.dollyIn(this.getZoomScale());
            }

            this.update();

            this.dispatchEvent(START_EVENT); // 不知道为什么会在这里…
            this.dispatchEvent(END_EVENT);
        };

        this.onKeyDown = (event: ThreeEvent) => {

            if (this.enabled === false || this.enableKeys === false || this.enablePan === false) return;

            switch (event.keyCode) {
                case this.keys.UP: {
                    this.pan(0, this.keyPanSpeed);
                    this.update();
                } break;
                case this.keys.BOTTOM: {
                    this.pan(0, - this.keyPanSpeed);
                    this.update();
                } break;
                case this.keys.LEFT: {
                    this.pan(this.keyPanSpeed, 0);
                    this.update();
                } break;
                case this.keys.RIGHT: {
                    this.pan(- this.keyPanSpeed, 0);
                    this.update();
                } break;
            }
        };

        this.onTouchStart = (event: ThreeEvent) => {

            if (this.enabled === false) return;

            switch (event.touches.length) {
                // one-fingered touch: 旋转
                case 1: {
                    if (this.enableRotate === false) return;

                    this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
                    this.state = STATE.TOUCH_ROTATE;
                } break;
                // two-fingered touch: dolly
                case 2: {
                    if (this.enableZoom === false) return;

                    var dx = event.touches[0].pageX - event.touches[1].pageX;
                    var dy = event.touches[0].pageY - event.touches[1].pageY;

                    var distance = Math.sqrt(dx * dx + dy * dy);
                    this.dollyStart.set(0, distance);
                    this.state = STATE.TOUCH_DOLLY;
                } break;
                // three-fingered touch: pan
                case 3: {
                    if (this.enablePan === false) return;

                    this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
                    this.state = STATE.TOUCH_PAN;
                } break;
                default: {
                    this.state = STATE.NONE;
                }
            }

            if (this.state !== STATE.NONE) {
                this.dispatchEvent(START_EVENT);
            }
        };

        this.onTouchMove = (event: ThreeEvent) => {

            if (this.enabled === false) return;
            event.preventDefault();
            event.stopPropagation();

            switch (event.touches.length) {
                // one-fingered touch: rotate
                case 1: {
                    if (this.enableRotate === false) return;
                    if (this.state !== STATE.TOUCH_ROTATE) return; // is this needed?...

                    this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
                    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

                    var element = this.domElement === document ? this.domElement.body : this.domElement;

                    // 在整个屏幕上旋转360度
                    this.rotateLeft(2 * Math.PI * this.rotateDelta.x / (element as any).clientWidth * this.rotateSpeed);

                    // 在整个屏幕上上下旋转试图达到360度，但仅限于180度
                    this.rotateUp(2 * Math.PI * this.rotateDelta.y / (element as any).clientHeight * this.rotateSpeed);

                    this.rotateStart.copy(this.rotateEnd);

                    this.update();
                } break;
                // two-fingered touch: dolly
                case 2: {
                    if (this.enableZoom === false) return;
                    if (this.state !== STATE.TOUCH_DOLLY) return; // is this needed?...

                    //console.log( 'handleTouchMoveDolly' );
                    var dx = event.touches[0].pageX - event.touches[1].pageX;
                    var dy = event.touches[0].pageY - event.touches[1].pageY;

                    var distance = Math.sqrt(dx * dx + dy * dy);

                    this.dollyEnd.set(0, distance);

                    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

                    if (this.dollyDelta.y > 0) {
                        this.dollyOut(this.getZoomScale());
                    } else if (this.dollyDelta.y < 0) {
                        this.dollyIn(this.getZoomScale());
                    }

                    this.dollyStart.copy(this.dollyEnd);
                    this.update();
                } break;
                // three-fingered touch: pan
                case 3: {
                    if (this.enablePan === false) return;
                    if (this.state !== STATE.TOUCH_PAN) return; // is this needed?...
                    this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
                    this.panDelta.subVectors(this.panEnd, this.panStart);
                    this.pan(this.panDelta.x, this.panDelta.y);
                    this.panStart.copy(this.panEnd);
                    this.update();
                } break;
                default: {
                    this.state = STATE.NONE;
                }
            }
        };

        this.onTouchEnd = (event: Event) => {

            if (this.enabled === false) return;
            this.dispatchEvent(END_EVENT);
            this.state = STATE.NONE;
        }

        this.onContextMenu = (event) => {
            event.preventDefault();
        };

        this.domElement.addEventListener('contextmenu', this.onContextMenu, false);

        this.domElement.addEventListener('mousedown', this.onMouseDown, false);
        this.domElement.addEventListener('wheel', this.onMouseWheel, false);

        this.domElement.addEventListener('touchstart', this.onTouchStart, false);
        this.domElement.addEventListener('touchend', this.onTouchEnd, false);
        this.domElement.addEventListener('touchmove', this.onTouchMove, false);

        this.window.addEventListener('keydown', this.onKeyDown, false);

        // 在开始时强制更新
        this.update();
    }

    update() {
        const position = this.object.position;
        this.updateOffset.copy(position).sub(this.target);

        // 旋转偏移到“y轴向上”空间
        this.updateOffset.applyQuaternion(this.updateQuat);

        // 从z轴到y轴的夹角
        this.spherical.setFromVector3(this.updateOffset);

        if (this.autoRotate && this.state === STATE.NONE) {
            this.rotateLeft(this.getAutoRotationAngle());
        }

        (this.spherical as any).theta += (this.sphericalDelta as any).theta;
        (this.spherical as any).phi += (this.sphericalDelta as any).phi;

        // 把theta限制在期望的范围内
        (this.spherical as (any) as any).theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, (this.spherical as any).theta));

        // phi限制在期望的极限之间
        (this.spherical as any).phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, (this.spherical as any).phi));

        this.spherical.makeSafe();

        (this.spherical as any).radius *= this.scale;

        // 将半径限制在期望的范围内
        (this.spherical as any).radius = Math.max(this.minDistance, Math.min(this.maxDistance, (this.spherical as any).radius));

        // 移动目标到平移位置
        this.target.add(this.panOffset);

        this.updateOffset.setFromSpherical(this.spherical);

        // 将偏移量旋转回“camera-up-vector- isup”空间
        this.updateOffset.applyQuaternion(this.updateQuatInverse);

        position.copy(this.target).add(this.updateOffset);

        this.object.lookAt(this.target);

        if (this.enableDamping === true) {

            (this.sphericalDelta as any).theta *= (1 - this.dampingFactor);
            (this.sphericalDelta as any).phi *= (1 - this.dampingFactor);

        } else {

            this.sphericalDelta.set(0, 0, 0);

        }

        this.scale = 1;
        this.panOffset.set(0, 0, 0);

        // 更新的条件是:
        // min(镜头位移, 摄像机以弧度旋转)^2 > EPS
        // 利用小角近似值 cos(x/2) = 1 - x^2 / 8

        if (this.zoomChanged ||
            this.updateLastPosition.distanceToSquared(this.object.position) > EPS ||
            8 * (1 - this.updateLastQuaternion.dot(this.object.quaternion)) > EPS) {

            this.dispatchEvent(CHANGE_EVENT);
            this.updateLastPosition.copy(this.object.position);
            this.updateLastQuaternion.copy(this.object.quaternion);
            this.zoomChanged = false;
            return true;
        }
        return false;
    }

    panLeft(distance: number, objectMatrix) {
        this.panLeftV.setFromMatrixColumn(objectMatrix, 0); // 得到objectMatrix的X列
        this.panLeftV.multiplyScalar(- distance);
        this.panOffset.add(this.panLeftV);
    }

    panUp(distance: number, objectMatrix) {
        this.panUpV.setFromMatrixColumn(objectMatrix, 1); // 得到objectMatrix的Y列
        this.panUpV.multiplyScalar(distance);
        this.panOffset.add(this.panUpV);
    }

    // deltaX和deltaY是像素单位;右和下都是正数
    pan(deltaX: number, deltaY: number) {
        const element = this.domElement === document ? this.domElement.body : this.domElement;

        if (this._checkPerspectiveCamera(this.object)) {
            // 透视
            const position = this.object.position;
            this.panInternalOffset.copy(position).sub(this.target);
            var targetDistance = this.panInternalOffset.length();

            // fov的一半在屏幕的中央到顶部
            targetDistance *= Math.tan((this.object.fov / 2) * Math.PI / 180.0);

            // 我们实际上不使用屏幕宽度，因为透视相机是固定在屏幕高度上的
            this.panLeft(2 * deltaX * targetDistance / (element as any).clientHeight, this.object.matrix);
            this.panUp(2 * deltaY * targetDistance / (element as any).clientHeight, this.object.matrix);
        } else if (this._checkOrthographicCamera(this.object)) {
            // 正交
            this.panLeft(deltaX * (this.object.right - this.object.left) / this.object.zoom / (element as any).clientWidth, this.object.matrix);
            this.panUp(deltaY * (this.object.top - this.object.bottom) / this.object.zoom / (element as any).clientHeight, this.object.matrix);
        } else {
            // 照相机既不正投影也不透视
            console.warn('警告:OrbitControls.js遇到一个未知的摄像头类型- 平移禁用。');
            this.enablePan = false;
        }
    }

    dollyIn(dollyScale: number) {
        if (this._checkPerspectiveCamera(this.object)) {
            this.scale /= dollyScale;
        } else if (this._checkOrthographicCamera(this.object)) {
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * dollyScale));
            this.object.updateProjectionMatrix();
            this.zoomChanged = true;
        } else {
            console.warn('警告:OrbitControls.js遇到一个未知的相机类型-推进/缩放禁用。');
            this.enableZoom = false;
        }
    }

    dollyOut(dollyScale: number) {
        if (this._checkPerspectiveCamera(this.object)) {
            this.scale *= dollyScale;
        } else if (this._checkOrthographicCamera(this.object)) {
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / dollyScale));
            this.object.updateProjectionMatrix();
            this.zoomChanged = true;
        } else {
            console.warn('警告:OrbitControls.js遇到一个未知的相机类型-推进/缩放禁用。');
            this.enableZoom = false;
        }
    }

    getAutoRotationAngle() {
        return 2 * Math.PI / 60 / 60 * this.autoRotateSpeed;
    }

    getZoomScale() {
        return Math.pow(0.95, this.zoomSpeed);
    }

    rotateLeft(angle: number) {
        (this.sphericalDelta as any).theta -= angle;
    }

    rotateUp(angle: number) {
        (this.sphericalDelta as any).phi -= angle;
    }

    getPolarAngle(): number {
        return (this.spherical as any).phi;
    }

    getAzimuthalAngle(): number {
        return (this.spherical as any).theta;
    }

    dispose(): void {
        this.domElement.removeEventListener('contextmenu', this.onContextMenu, false);
        this.domElement.removeEventListener('mousedown', this.onMouseDown, false);
        this.domElement.removeEventListener('wheel', this.onMouseWheel, false);

        this.domElement.removeEventListener('touchstart', this.onTouchStart, false);
        this.domElement.removeEventListener('touchend', this.onTouchEnd, false);
        this.domElement.removeEventListener('touchmove', this.onTouchMove, false);

        document.removeEventListener('mousemove', this.onMouseMove, false);
        document.removeEventListener('mouseup', this.onMouseUp, false);

        this.window.removeEventListener('keydown', this.onKeyDown, false);
        //this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    }

    reset(): void {
        this.target.copy(this.target0);
        this.object.position.copy(this.position0);
        (this.object as any).zoom = this.zoom0;

        (this.object as any).updateProjectionMatrix();
        this.dispatchEvent(CHANGE_EVENT);

        this.update();

        this.state = STATE.NONE;
    }

    saveState(): void {
        this.target0.copy(this.target);
        this.position0.copy(this.object.position);
        // 检查相机是否具有变焦功能
        if (this._checkOrthographicCamera(this.object) || this._checkPerspectiveCamera(this.object)) {
            this.zoom0 = this.object.zoom;
        }
    }

    // 向后兼容
    get center(): THREE.Vector3 {
        console.warn('THREE.OrbitControls: .center 已重命名为 .target');
        return this.target;
    }
    get noZoom(): boolean {
        console.warn('THREE.OrbitControls: .noZoom 已弃用。 使用 .enableZoom 代替.');
        return !this.enableZoom;
    }

    set noZoom(value: boolean) {
        console.warn('THREE.OrbitControls: .noZoom 已弃用。 使用 .enableZoom 代替.');
        this.enableZoom = !value;
    }

    /**
     * TS typeguard。检查所提供的摄像头是否透视摄像头。
     * 如果检查通过(返回true)，通过的相机将具有类型 THREE.PerspectiveCamera 在执行检查的if分支中.
     * @param camera 对象进行检查。
     */
    private _checkPerspectiveCamera(camera: THREE.Camera): camera is THREE.PerspectiveCamera {
        return (camera as THREE.PerspectiveCamera).isPerspectiveCamera;
    }
    /**
     * TS typeguard。检查所提供的摄像机是否为正位摄像机。
     * 如果检查通过(返回true)，通过的相机将具有类型 THREE.OrthographicCamera 在执行检查的if分支中.
     * @param camera 对象进行检查。
     */
    private _checkOrthographicCamera(camera: THREE.Camera): camera is THREE.OrthographicCamera {
        return (camera as THREE.OrthographicCamera).isOrthographicCamera;
    }
}

interface ThreeEvent extends Event {
    clientX: number;
    clientY: number;
    deltaY: number;
    button: THREE.MOUSE;
    touches: Array<any>;
    keyCode: number;
}
