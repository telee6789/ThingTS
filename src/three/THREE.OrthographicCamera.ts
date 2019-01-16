import { OrthographicCamera } from 'three';

(OrthographicCamera.prototype as any).orthoSize = function () {
    return {
        x: (this.right - this.left) / this.zoom,
        y: (this.top - this.bottom) / this.zoom
    }
};

(OrthographicCamera.prototype as any).resize = function (width: number, height: number) {
    if (this.userData !== undefined) {
        let d: number = this.userData.depth * this.userData.z;
        let e: number = d * (width / height);
        this.left = -e / 2;
        this.right = e / 2;
        this.top = d / 2;
        this.bottom = -d / 2;
        this.updateProjectionMatrix();
    }
};