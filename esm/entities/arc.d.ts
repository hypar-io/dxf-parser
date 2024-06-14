import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface IArcEntity extends IEntity {
    center: IPoint;
    radius: number;
    startAngle: number;
    endAngle: number;
    angleLength: number;
    extrusionDirectionX: number;
    extrusionDirectionY: number;
    extrusionDirectionZ: number;
}
export default class Arc implements IGeometry {
    ForEntityName: "ARC";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IArcEntity;
}
