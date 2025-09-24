import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface IEllipseEntity extends IEntity {
    center: IPoint;
    majorAxisEndPoint: IPoint;
    axisRatio: number;
    startAngle: number;
    endAngle: number;
    name: string;
    extrusionDirectionX: number;
    extrusionDirectionY: number;
    extrusionDirectionZ: number;
}
export default class Ellipse implements IGeometry {
    ForEntityName: "ELLIPSE";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IEllipseEntity;
}
