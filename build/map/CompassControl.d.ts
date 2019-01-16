import { CornerType } from '../other/CornerType';
import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';
export declare class CompassControl extends BaseObject {
    constructor(app: App, option: {
        offset?: number[];
        position?: CornerType;
    });
}
