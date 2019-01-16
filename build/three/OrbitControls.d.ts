import * as THREE from 'three';
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
export declare class OrbitControls extends THREE.EventDispatcher {
    object: THREE.Camera;
    domElement: HTMLElement | HTMLDocument;
    window: Window;
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
    keys: {
        LEFT: number;
        UP: number;
        RIGHT: number;
        BOTTOM: number;
    };
    mouseButtons: {
        ORBIT: THREE.MOUSE;
        ZOOM: THREE.MOUSE;
        PAN: THREE.MOUSE;
    };
    enableDamping: boolean;
    dampingFactor: number;
    private spherical;
    private sphericalDelta;
    private scale;
    private target0;
    private position0;
    private zoom0;
    private state;
    private panOffset;
    private zoomChanged;
    private rotateStart;
    private rotateEnd;
    private rotateDelta;
    private panStart;
    private panEnd;
    private panDelta;
    private dollyStart;
    private dollyEnd;
    private dollyDelta;
    private updateLastPosition;
    private updateOffset;
    private updateQuat;
    private updateLastQuaternion;
    private updateQuatInverse;
    private panLeftV;
    private panUpV;
    private panInternalOffset;
    private onContextMenu;
    private onMouseUp;
    private onMouseDown;
    private onMouseMove;
    private onMouseWheel;
    private onTouchStart;
    private onTouchEnd;
    private onTouchMove;
    private onKeyDown;
    constructor(object: THREE.Camera, domElement?: HTMLElement, domWindow?: Window);
    update(): boolean;
    panLeft(distance: number, objectMatrix: any): void;
    panUp(distance: number, objectMatrix: any): void;
    pan(deltaX: number, deltaY: number): void;
    dollyIn(dollyScale: number): void;
    dollyOut(dollyScale: number): void;
    getAutoRotationAngle(): number;
    getZoomScale(): number;
    rotateLeft(angle: number): void;
    rotateUp(angle: number): void;
    getPolarAngle(): number;
    getAzimuthalAngle(): number;
    dispose(): void;
    reset(): void;
    saveState(): void;
    readonly center: THREE.Vector3;
    noZoom: boolean;
    /**
     * TS typeguard。检查所提供的摄像头是否透视摄像头。
     * 如果检查通过(返回true)，通过的相机将具有类型 THREE.PerspectiveCamera 在执行检查的if分支中.
     * @param camera 对象进行检查。
     */
    private _checkPerspectiveCamera;
    /**
     * TS typeguard。检查所提供的摄像机是否为正位摄像机。
     * 如果检查通过(返回true)，通过的相机将具有类型 THREE.OrthographicCamera 在执行检查的if分支中.
     * @param camera 对象进行检查。
     */
    private _checkOrthographicCamera;
}
