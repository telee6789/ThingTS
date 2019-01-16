import { BaseObject } from '../base-object/BaseObject';
import { Building } from './Building';
import { App } from '../core-object/App';
export declare class Facade extends BaseObject {
    constructor(app: App);
    /**
     * 获取建筑
     * @type {THING.Building}
     */
    readonly building: Building;
}
