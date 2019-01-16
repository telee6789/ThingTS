import { CompassControl } from './CompassControl';
import { CornerType } from '../other/CornerType';
import { App } from '../core-object/App';
export declare class EarthCompass extends CompassControl {
    constructor(app: App, option: {
        image: string;
        offset?: number[];
        position?: CornerType;
    });
}
