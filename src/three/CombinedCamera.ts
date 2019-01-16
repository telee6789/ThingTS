import { Camera, OrthographicCamera, PerspectiveCamera, Matrix4, Frustum, Box3, Vector3 } from 'three';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { Utils } from '../util/Utils';

/*
 * @Author: kekeqy
 * @Date: 2018-12-18 17:41:12
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-16 14:09:47
 * @Description: 复合相机
 */
export class CombinedCamera extends Camera {
    public fov: number;
    public near: number;
    public far: number;
    public aspect: number;
    public left: number;
    public right: number;
    public top: number;
    public bottom: number;
    public zoom: number;
    public view: any;
    public matrixTween: TWEEN.Tween;
    public projectionMatrix: Matrix4;
    public cameraO: OrthographicCamera;
    public cameraP: PerspectiveCamera;
    public inPerspectiveMode: boolean;
    public inOrthographicMode: boolean;
    public orthoSize: { x?: number, y?: number, z?: number, depth?: number };
    public rotationAutoUpdate: boolean;
    public constructor(width: number, height: number, fov: number, near: number, far: number, orthoNear: number, orthoFar: number) {
        super();
        this.fov = fov;
        this.left = - width / 2;
        this.right = width / 2;
        this.top = height / 2;
        this.bottom = - height / 2;
        this.cameraO = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, orthoNear, orthoFar);
        this.cameraP = new THREE.PerspectiveCamera(fov, width / height, near, far);
        this.zoom = 1;
        this.view = null;
        this.matrixTween = null;
        this.toPerspective();
    }
    /** 切换到透视相机 */
    public toPerspective(): void {
        this.near = this.cameraP.near;
        this.far = this.cameraP.far;
        this.cameraP.updateProjectionMatrix();
        this.projectionMatrix = this.cameraP.projectionMatrix;
        this.inPerspectiveMode = true;
        this.inOrthographicMode = false;
    }
    /** 切换到正交相机 */
    public toOrthographic(): void {
        let aspect: number = this.cameraP.aspect;
        let distance: number = this.orthoSize.z;
        let depth: number = this.orthoSize.depth;
        let halfWidth: number = depth * distance * aspect / 2;
        let halfHeight: number = depth * distance / 2;
        halfHeight /= this.zoom;
        halfWidth /= this.zoom;
        this.cameraO.left = -halfWidth;
        this.cameraO.right = halfWidth;
        this.cameraO.top = halfHeight;
        this.cameraO.bottom = -halfHeight;
        this.cameraO.updateProjectionMatrix();
        this.near = this.cameraO.near;
        this.far = this.cameraO.far;
        this.projectionMatrix = this.cameraO.projectionMatrix;
        this.inPerspectiveMode = false;
        this.inOrthographicMode = true;
    }
    public setSize(width: number, height: number): void {
        this.cameraP.aspect = width / height;
        this.left = -width / 2;
        this.right = width / 2;
        this.top = height / 2;
        this.bottom = -height / 2;
        this.updateProjectionMatrix();
    }
    public setFov(fov: number): void {
        this.fov = fov;
        if (this.inPerspectiveMode) {
            this.cameraP.fov = fov;
            this.toPerspective();
        }
        else {
            this.toOrthographic();
        }
    }
    public setViewOffset(fullWidth: number, fullHeight: number, offsetX: number, offsetY: number, width: number, height: number): void {
        this.cameraP.setViewOffset(fullWidth, fullHeight, offsetX, offsetY, width, height);
        this.cameraO.setViewOffset(fullWidth, fullHeight, offsetX, offsetY, width, height);
    }
    public clearViewOffset(): void {
        this.cameraP.clearViewOffset();
        this.cameraO.clearViewOffset();
    }
    public updateProjectionMatrix(): void {
        if (this.isPerspectiveCamera) {
            this.toPerspective();
        } else {
            this.toPerspective();
            this.toOrthographic();
        }
    }
    public setLens(focalLength: number, filmGauge: number = 35): number {
        var vExtentSlope = 0.5 * filmGauge / (focalLength * Math.max(this.cameraP.aspect, 1));
        var fov = THREE.Math.RAD2DEG * 2 * Math.atan(vExtentSlope);
        this.setFov(fov);
        return fov;
    }
    public setZoom(zoom: number): void {
        this.zoom = zoom;
        if (this.inPerspectiveMode) {
            this.toPerspective();
        }
        else {
            this.toOrthographic();
        }
    }
    public toFrontView(): void {
        this.rotation.x = 0;
        this.rotation.y = 0;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public toBackView(): void {
        this.rotation.x = 0;
        this.rotation.y = Math.PI;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public toLeftView(): void {
        this.rotation.x = 0;
        this.rotation.y = -Math.PI / 2;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public toRightView(): void {
        this.rotation.x = 0;
        this.rotation.y = Math.PI / 2;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public toTopView(): void {
        this.rotation.x = -Math.PI / 2;
        this.rotation.y = 0;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public toBottomView(): void {
        this.rotation.x = Math.PI / 2;
        this.rotation.y = 0;
        this.rotation.z = 0;
        this.rotationAutoUpdate = false;
    }
    public get isPerspectiveCamera(): boolean {
        return this.inPerspectiveMode;
    }
    public get isOrthographicCamera(): boolean {
        return this.inOrthographicMode;
    }
    public setNear(near: number): void {
        this.cameraP.near = near;
        this.cameraO.near = near;
        this.updateProjectionMatrix();
    }
    public setFar(far: number): void {
        this.cameraP.far = far;
        this.cameraO.far = far;
        this.updateProjectionMatrix();
    }
    public toPerspectiveCamera(): CombinedCamera {
        let camera: CombinedCamera = new CombinedCamera(1, 1, 1, 1, 1, 1, 1);
        camera.fov = this.fov;
        camera.left = this.left;
        camera.right = this.right;
        camera.top = this.top;
        camera.bottom = this.bottom;
        camera.cameraO = new OrthographicCamera(1, 1, 1, 1, 1, 1);
        camera.cameraO.copy(this.cameraO);
        camera.cameraP = new PerspectiveCamera(1, 1, 1, 1);
        camera.cameraP.copy(this.cameraP);
        camera.zoom = this.zoom;
        camera.toPerspective();
        return camera;
    }
    public toOrthoCamera(pos: Vector3, target: Vector3): CombinedCamera {
        let orthoSize: { x?: number, y?: number, z?: number, depth?: number } = (this.cameraP as any).orthoSize(pos, target);
        let camera: CombinedCamera = new CombinedCamera(orthoSize.x, orthoSize.y, this.fov, this.near, this.far, this.cameraO.near, this.cameraO.far);
        camera.orthoSize = orthoSize;
        camera.toOrthographic();
        return camera;
    }
    public lerpMatrix(currentProjectionMatrix: Matrix4, targetProjectionMatrix: Matrix4, time: number, callback?: Function) {
        let current = Utils.toMatrixElementsArray(currentProjectionMatrix);
        let target = Utils.toMatrixElementsArray(targetProjectionMatrix);
        this.matrixTween && this.matrixTween.stop();
        this.matrixTween = new TWEEN.Tween(current).to(target, time).easing(TWEEN.Easing.Quintic.Out).onUpdate(object => {
            Utils.elementsArrayToMatrix(currentProjectionMatrix, object);
        }).onComplete(() => {
            callback && callback();
        }).start();
    }
    public lerpToOrthographic(pos: Vector3, target: Vector3, time: number, callback?: Function): void {
        let camera: CombinedCamera = this.toOrthoCamera(pos, target);
        this.orthoSize = camera.orthoSize;
        this.zoom = 1;
        this.lerpMatrix(this.projectionMatrix, camera.projectionMatrix, time, () => {
            this.toOrthographic();
            callback && callback();
        });
    }
    public lerpToPerspective(time: number, callback?: Function): void {
        let camera: CombinedCamera = this.toPerspectiveCamera();
        this.lerpMatrix(this.projectionMatrix, camera.projectionMatrix, time, () => {
            this.toPerspective();
            callback && callback();
        });
    }
    public getEffectiveFOV(): number {
        return this.cameraP.getEffectiveFOV();
    }
    public isInView(box: Box3): boolean {
        let matrix: Matrix4 = new Matrix4();
        matrix.multiplyMatrices(this.projectionMatrix, this.matrixWorldInverse);
        let frustum: Frustum = new Frustum();
        frustum.setFromMatrix(matrix);
        return frustum.intersectsBox(box);
    }
}