/// <reference types="tween.js" />
import { Camera, OrthographicCamera, PerspectiveCamera, Matrix4, Box3, Vector3 } from 'three';
import * as TWEEN from '@tweenjs/tween.js';
export declare class CombinedCamera extends Camera {
    fov: number;
    near: number;
    far: number;
    aspect: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    zoom: number;
    view: any;
    matrixTween: TWEEN.Tween;
    projectionMatrix: Matrix4;
    cameraO: OrthographicCamera;
    cameraP: PerspectiveCamera;
    inPerspectiveMode: boolean;
    inOrthographicMode: boolean;
    orthoSize: {
        x?: number;
        y?: number;
        z?: number;
        depth?: number;
    };
    rotationAutoUpdate: boolean;
    constructor(width: number, height: number, fov: number, near: number, far: number, orthoNear: number, orthoFar: number);
    /** 切换到透视相机 */
    toPerspective(): void;
    /** 切换到正交相机 */
    toOrthographic(): void;
    setSize(width: number, height: number): void;
    setFov(fov: number): void;
    setViewOffset(fullWidth: number, fullHeight: number, offsetX: number, offsetY: number, width: number, height: number): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
    setLens(focalLength: number, filmGauge?: number): number;
    setZoom(zoom: number): void;
    toFrontView(): void;
    toBackView(): void;
    toLeftView(): void;
    toRightView(): void;
    toTopView(): void;
    toBottomView(): void;
    readonly isPerspectiveCamera: boolean;
    readonly isOrthographicCamera: boolean;
    setNear(near: number): void;
    setFar(far: number): void;
    toPerspectiveCamera(): CombinedCamera;
    toOrthoCamera(pos: Vector3, target: Vector3): CombinedCamera;
    lerpMatrix(currentProjectionMatrix: Matrix4, targetProjectionMatrix: Matrix4, time: number, callback?: Function): void;
    lerpToOrthographic(pos: Vector3, target: Vector3, time: number, callback?: Function): void;
    lerpToPerspective(time: number, callback?: Function): void;
    getEffectiveFOV(): number;
    isInView(box: Box3): boolean;
}
