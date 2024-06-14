import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
export interface ILineEntity extends IEntity {
    vertices: IPoint[];
    extrusionDirection: IPoint;
}
export default class Line implements IGeometry {
    ForEntityName: "LINE";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): ILineEntity;
}
