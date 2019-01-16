import { LineBase } from '../base-object/LineBase';
import { App } from '../core-object/App';
export declare class PolygonLine extends LineBase {
    constructor(app: App);
    /**
     * 设置宽度
     * @type {number}
     */
    width: number;
    /**
     * 设置进度, 范围在[0, 1]之间
     * @type {number}
     */
    progress: number;
}
