import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface IPointEntity extends IEntity {
    position: IPoint;
    thickness: number;
    extrusionDirection: IPoint;
}
export default class Point implements IGeometry {
    ForEntityName: "POINT";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IPointEntity;
}
