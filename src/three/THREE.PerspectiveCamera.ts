import { PerspectiveCamera, Vector3 } from 'three';

(PerspectiveCamera.prototype as any).orthoSize = function (x: Vector3, c: Vector3) {
    let distance: number = x.distanceTo(c);
    let depth: number = 2 * Math.tan(this.fov / 2 * Math.PI / 180);
    let width: number = depth * distance;
    return {
        x: width * this.aspect,
        y: width,
        depth: depth,
        z: distance
    };
}