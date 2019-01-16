import { Clock, AmbientLight, HemisphereLight, DirectionalLight, Scene, WebGLRenderer, PCFSoftShadowMap, MeshStandardMaterial, GLTFLoader, Mesh, Vector3, OrthographicCamera, PerspectiveCamera, Object3D, AnimationMixer, AnimationClip, LoopOnce, ArrayCamera, Camera, Vector4, Color, CubeTexture, CubeTextureLoader, BoxHelper, Box3, Sphere, Math, Euler, SpriteMaterial } from 'three';
import { App } from '../core-object/App';
import { CombinedCamera } from './CombinedCamera';
import * as TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';

/*
 * @Author: kekeqy
 * @Date: 2018-12-12 12:59:36
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-16 14:06:26
 * @Description: 对three引擎的封装
 */
export class Engine {
    private _currentFrame: number = 0;
    public readonly app: App;
    /** 定时器 */
    public readonly clock: Clock = new Clock();
    /** 场景 */
    public readonly scene: Scene = new Scene();
    /** 渲染器 */
    public readonly renderer: WebGLRenderer;
    public readonly camera: CombinedCamera;
    /** 天空盒子 */
    public readonly skyBox: CubeTexture;
    public readonly cameraP: PerspectiveCamera;
    public readonly cameraO: OrthographicCamera;

    public constructor(app: App) {
        this.app = app;
        //渲染器设置
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(0x909090, 1);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        this.renderer.gammaOutput = true;
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.app.domElement.appendChild(this.renderer.domElement);
        this.renderer.setSize(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight, false);

        //灯光初始化
        let ambient_light: AmbientLight = new AmbientLight(0x626262, 1);//环境光
        ambient_light.name = 'ambient_light';
        this.scene.add(ambient_light);
        let hemishpere_light: HemisphereLight = new HemisphereLight(0x3284ff, 0xffc87f, 0.1);//半球光
        hemishpere_light.name = 'hemishpere_light';
        this.scene.add(hemishpere_light);
        let main_light: DirectionalLight = new DirectionalLight(0xffeedd, 0.8);//主光源
        main_light.name = 'main_light';
        this.scene.add(main_light);
        let secondary_light: DirectionalLight = new DirectionalLight(0xffeedd, 0.9);//第二光源
        secondary_light.name = 'secondary_light';
        this.scene.add(secondary_light);

        //相机初始化
        this.camera = new CombinedCamera(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight, 60, 0.1, 10000, 0.1, 10000);
        this.camera.position.set(0, 10, 0);
        this.camera.lookAt(0, 0, 0);
        this.cameraP = new PerspectiveCamera(60, this.renderer.domElement.clientWidth / this.renderer.domElement.clientHeight, 0.1, 10000);
        this.cameraP.position.set(0, 1, 0);
        this.cameraP.lookAt(0, 0, 0);

        this.cameraO = new OrthographicCamera(-this.renderer.domElement.clientWidth / 2, this.renderer.domElement.clientWidth / 2, this.renderer.domElement.clientHeight / 2, -this.renderer.domElement.clientHeight / 2, 0.1, 1000);
        this.cameraO.position.set(0, 1, 0);
        this.cameraO.lookAt(0, 0, 0);
        this.cameraO.zoom = 124;
        this.cameraO.updateProjectionMatrix();

        let loader: GLTFLoader = new GLTFLoader();
        loader.load('asset/model/jigui.glb', gltf => {
            gltf.scene.traverse(child => {
                if (child instanceof Mesh) {
                    (child.material as MeshStandardMaterial).envMap = this.skyBox;
                }
            })
            this.root = gltf.scene.children[0];
            this.scene.add(this.root);

            let box: Box3 = new Box3();
            box.setFromObject(this.root);
            box.getCenter(this.center);
            box.getSize(this.size);
            this.radius = box.getBoundingSphere(new Sphere()).radius;
            let pos: Vector3 = this.center.clone();
            pos.y += this.radius * 2;
            pos.z += this.radius * 2;
            let xyz: Vector3 = new Vector3(1, 1, 0);
            xyz.applyEuler(new Euler(45 * Math.DEG2RAD, -45 * Math.DEG2RAD, 0, 'XYZ'));
            pos.add(xyz);
            this.app.camera.position = [pos.x, pos.y, pos.z];
            this.app.camera.target = [this.center.x, this.center.y, this.center.z];
        });



        let path: string = 'asset/skybox/';
        let format: string = '.jpg';
        this.skyBox = new CubeTextureLoader().load([
            path + 'posx' + format, path + 'negx' + format,
            path + 'posy' + format, path + 'negy' + format,
            path + 'posz' + format, path + 'negz' + format
        ]);

        window.addEventListener('resize', () => this.onResize(), false);
        window.addEventListener('keydown', e => this.onKeyDown(e), false);
        window.addEventListener('click', () => console.log(this.camera));
        this.animate();
    }
    private center: Vector3 = new Vector3();
    private size: Vector3 = new Vector3();
    private radius: number;
    private root: Object3D;
    private mixer: AnimationMixer;
    private animations: AnimationClip[];
    private state: boolean = false;
    private onAniCompelted(e: any): void {
        e.action.getClip().name === 'close' && e.action.stop();
    }
    private onKeyDown(e: KeyboardEvent) {
        // if (this.camera.isPerspectiveCamera) {
        //     let cam = this.camera.toOrthoCamera(this.camera.position, this.app.camera.controller.target);
        //     this.camera.orthoSize = cam.orthoSize;
        //     this.camera.left = cam.left;
        //     this.camera.right = cam.right;
        //     this.camera.top = cam.top;
        //     this.camera.bottom = cam.bottom;
        //     this.camera.near = cam.near;
        //     this.camera.far = cam.far;
        //     this.camera.toOrthographic();
        // }
        // else {
        //     let cam = this.camera.toPerspectiveCamera();
        //     this.camera.fov = cam.fov;
        //     this.camera.near = cam.near;
        //     this.camera.far = cam.far;
        //     this.camera.toPerspective();
        // }
        if (this.camera.isPerspectiveCamera) {
            //缓动到正交相机
            let pos: Vector3 = this.center.clone();
            pos.y += this.radius * 2;
            let target: Vector3 = this.center.clone();
            this.camera.lerpToOrthographic(pos, target, 1000);
            new TWEEN.Tween(this.camera.position).to(pos, 1000).easing(TWEEN.Easing.Quintic.Out).onUpdate(object => {
                this.camera.position.copy(object);
            }).start();
            new TWEEN.Tween(this.app.camera.controller.target).to(this.center,1000).easing(TWEEN.Easing.Quintic.Out).onUpdate(object=>{
                this.app.camera.controller.target.copy(object);
            }).start();
        }
        else {
            let pos: Vector3 = this.center.clone();
            pos.y += this.radius * 2;
            pos.z += this.radius * 2;
            let xyz: Vector3 = new Vector3(1, 1, 0);
            xyz.applyEuler(new Euler(45 * Math.DEG2RAD, -45 * Math.DEG2RAD, 0, 'XYZ'));
            pos.add(xyz);
            this.camera.lerpToPerspective(1000);
        }
    }
    /** 当前帧率 */
    public get currentFrame(): number {
        return this._currentFrame;
    }
    private animate(): void {
        this._currentFrame++;
        // if (this.app.camera && this.app.camera.currentCamera) {
        //     this.renderer.render(this.scene, this.app.camera.currentCamera);
        // }
        // this.renderer.render(this.scene, this.cameraO);
        this.renderer.render(this.scene, this.camera);
        if (this.mixer) this.mixer.update(this.clock.getDelta());
        TWEEN.update();
        requestAnimationFrame(() => this.animate());
    }
    private onResize(): void {
        this.camera.aspect = this.renderer.domElement.clientWidth / this.renderer.domElement.clientHeight;
        this.camera.cameraP.aspect = this.renderer.domElement.clientWidth / this.renderer.domElement.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight, false);
    }
}