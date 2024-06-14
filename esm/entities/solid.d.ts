import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface ISolidEntity extends IEntity {
    points: IPoint[];
    extrusionDirection: IPoint;
}
export default class Solid implements IGeometry {
    ForEntityName: "SOLID";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): ISolidEntity;
}
