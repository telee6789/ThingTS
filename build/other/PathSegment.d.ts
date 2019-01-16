import { Floor } from '../building/Floor';
import { BaseObject } from '../base-object/BaseObject';
export declare type PathSegment = {
    floor: Floor;
    points: (number[])[];
    entry: BaseObject;
};
