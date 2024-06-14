import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface ICircleEntity extends IEntity {
    center: IPoint;
    radius: number;
    startAngle: number;
    endAngle: number;
    angleLength: number;
    extrusionDirectionX: number;
    extrusionDirectionY: number;
    extrusionDirectionZ: number;
}
export default class Circle implements IGeometry {
    ForEntityName: "CIRCLE";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): ICircleEntity;
}
