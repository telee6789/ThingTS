import { Clock, Scene, WebGLRenderer, OrthographicCamera, PerspectiveCamera, CubeTexture } from 'three';
import { App } from '../core-object/App';
import { CombinedCamera } from './CombinedCamera';
export declare class Engine {
    private _currentFrame;
    readonly app: App;
    /** 定时器 */
    readonly clock: Clock;
    /** 场景 */
    readonly scene: Scene;
    /** 渲染器 */
    readonly renderer: WebGLRenderer;
    readonly camera: CombinedCamera;
    /** 天空盒子 */
    readonly skyBox: CubeTexture;
    readonly cameraP: PerspectiveCamera;
    readonly cameraO: OrthographicCamera;
    constructor(app: App);
    private center;
    private size;
    private radius;
    private root;
    private mixer;
    private animations;
    private state;
    private onAniCompelted;
    private onKeyDown;
    /** 当前帧率 */
    readonly currentFrame: number;
    private animate;
    private onResize;
}
