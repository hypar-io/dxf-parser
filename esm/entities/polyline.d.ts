import { IVertexEntity } from './vertex.js';
import IGeometry, { IEntity, IPoint } from './geomtry.js';
import DxfArrayScanner, { IGroup } from '../DxfArrayScanner.js';
export interface IPolylineEntity extends IEntity {
    vertices: IVertexEntity[];
    thickness: number;
    shape: boolean;
    includesCurveFitVertices: boolean;
    includesSplineFitVertices: boolean;
    is3dPolyline: boolean;
    is3dPolygonMesh: boolean;
    is3dPolygonMeshClosed: boolean;
    isPolyfaceMesh: boolean;
    hasContinuousLinetypePattern: boolean;
    extrusionDirection: IPoint;
}
export default class Polyline implements IGeometry {
    ForEntityName: "POLYLINE";
    parseEntity(scanner: DxfArrayScanner, curr: IGroup): IPolylineEntity;
}
