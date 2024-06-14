import * as helpers from "../ParseHelpers.js";
export default class MLeader {
    ForEntityName = "MULTILEADER";
    parseEntity(scanner, curr) {
        const entity = { type: curr.value };
        entity.contextData = {
            leaders: [],
        };
        curr = scanner.next();
        function parseCommonData() {
            while (!scanner.isEOF()) {
                switch (curr.code) {
                    case 0: // END
                        return;
                    case 340:
                        entity.leaderStyleId = curr.value;
                        break;
                    case 170:
                        entity.leaderLineType = curr.value;
                        break;
                    case 91:
                        entity.leaderLineColor = curr.value;
                        break;
                    case 341:
                        entity.leaderLineTypeId = curr.value;
                        break;
                    case 171:
                        entity.leaderLineWeight = curr.value;
                        break;
                    case 41:
                        entity.doglegLength = curr.value;
                        break;
                    case 290:
                        entity.enableLanding = curr.value;
                        break;
                    case 291:
                        entity.enableDogLeg = curr.value;
                        break;
                    case 342:
                        entity.arrowHeadId = curr.value;
                        break;
                    case 42:
                        entity.arrowHeadSize = curr.value;
                        break;
                    case 172:
                        entity.contentType = curr.value;
                        break;
                    case 173:
                        entity.textLeftAttachmentType = curr.value;
                        break;
                    case 95:
                        entity.textLeftAttachmentType = curr.value;
                        break;
                    case 174:
                        entity.textAngleType = curr.value;
                        break;
                    case 175:
                        entity.textAlignmentType = curr.value;
                        break;
                    case 343:
                        entity.textStyleId = curr.value;
                        break;
                    case 92:
                        entity.textColor = curr.value;
                        break;
                    case 292:
                        entity.enableFrameText = curr.value;
                        break;
                    case 344:
                        entity.blockContentId = curr.value;
                        break;
                    case 93:
                        entity.blockContentColor = curr.value;
                        break;
                    case 10:
                        entity.blockContentScale = helpers.parsePoint(scanner);
                        break;
                    case 43:
                        entity.blockContentRotation = curr.value;
                        break;
                    case 176:
                        entity.blockContentConnectionType =
                            curr.value;
                        break;
                    case 293:
                        entity.enableAnotationScale = curr.value;
                        break;
                    case 94:
                        entity.arrowHeadIndex = curr.value;
                        break;
                    case 330:
                        entity.blockAttributeId = curr.value;
                        break;
                    case 177:
                        entity.blockAttributeIndex = curr.value;
                        break;
                    case 44:
                        entity.blockAttributeWidth = curr.value;
                        break;
                    case 302:
                        entity.blockAttributeTextString = curr.value;
                        break;
                    case 294:
                        entity.textDirectionNegative = curr.value;
                        break;
                    case 178:
                        entity.textAlignInIPE = curr.value;
                        break;
                    case 179:
                        entity.textAttachmentPoint = curr.value;
                        break;
                    case 271:
                        entity.textAttachmentDirectionMText =
                            curr.value;
                        break;
                    case 272:
                        entity.textAttachmentDirectionBottom =
                            curr.value;
                        break;
                    case 273:
                        entity.textAttachmentDirectionTop =
                            curr.value;
                        break;
                    case 300: // START CONTEXT_DATA
                        parseContextData();
                        break;
                    default:
                        helpers.checkCommonEntityProperties(entity, curr, scanner);
                        break;
                }
                curr = scanner.next();
            }
        }
        function parseContextData() {
            while (!scanner.isEOF()) {
                switch (curr.code) {
                    case 40:
                        entity.contextData.contentScale = curr.value;
                        break;
                    case 10:
                        entity.contextData.contentBasePosition =
                            helpers.parsePoint(scanner);
                        break;
                    case 145:
                        entity.contextData.landingGap = curr.value;
                        break;
                    case 290:
                        entity.contextData.hasMText = curr.value;
                        break;
                    case 304:
                        entity.contextData.defaultTextContents =
                            curr.value;
                        break;
                    case 11:
                        entity.contextData.textNormalDirection =
                            helpers.parsePoint(scanner);
                        break;
                    case 12:
                        entity.contextData.textLocation =
                            helpers.parsePoint(scanner);
                        break;
                    case 13:
                        entity.contextData.textDirection =
                            helpers.parsePoint(scanner);
                        break;
                    case 140:
                        entity.contextData.arrowHeadSize = curr.value;
                        break;
                    case 41:
                        entity.contextData.textHeight = curr.value;
                        break;
                    case 42:
                        entity.contextData.textRotation = curr.value;
                        break;
                    case 43:
                        entity.contextData.textWidth = curr.value;
                        break;
                    case 44:
                        entity.contextData.textHeight = curr.value;
                        break;
                    case 45:
                        entity.contextData.textLineSpacingFactor =
                            curr.value;
                        break;
                    case 90:
                        entity.contextData.textColor = curr.value;
                        break;
                    case 170:
                        entity.contextData.textLineSpacingStyle =
                            curr.value;
                        break;
                    case 171:
                        entity.contextData.textAttachment =
                            curr.value;
                        break;
                    case 172:
                        entity.contextData.textFlowDirection =
                            curr.value;
                        break;
                    case 141:
                        entity.contextData.textBackgroundScaleFactor =
                            curr.value;
                        break;
                    case 92:
                        entity.contextData.textBackgroundTransparency =
                            curr.value;
                        break;
                    case 291:
                        entity.contextData.textBackgroundColorOn =
                            curr.value;
                        break;
                    case 292:
                        entity.contextData.textBackgroundFillOn =
                            curr.value;
                        break;
                    case 293:
                        entity.contextData.textUseAutoHeight =
                            curr.value;
                        break;
                    case 173:
                        entity.contextData.textColumnType =
                            curr.value;
                        break;
                    case 142:
                        entity.contextData.textColumnWidth =
                            curr.value;
                        break;
                    case 143:
                        entity.contextData.textColumnGutterWidth =
                            curr.value;
                        break;
                    case 144:
                        entity.contextData.textColumnHeight =
                            curr.value;
                        break;
                    case 295:
                        entity.contextData.textUseWordBreak =
                            curr.value;
                        break;
                    case 296:
                        entity.contextData.hasBlock = curr.value;
                        break;
                    case 341:
                        entity.contextData.blockContentId =
                            curr.value;
                        break;
                    case 14:
                        entity.contextData.blockContentNormalDirection =
                            helpers.parsePoint(scanner);
                        break;
                    case 15:
                        entity.contextData.blockContentPosition =
                            helpers.parsePoint(scanner);
                        break;
                    case 16:
                        entity.contextData.blockContentScale =
                            curr.value;
                        break;
                    case 46:
                        entity.contextData.blockContentRotation =
                            curr.value;
                        break;
                    case 93:
                        entity.contextData.blockContentColor =
                            curr.value;
                        break;
                    case 47:
                        entity.contextData.blockTransformationMatrix = helpers.parseMatrix(scanner, 47);
                        break;
                    case 110:
                        entity.contextData.planeOriginPoint =
                            helpers.parsePoint(scanner);
                        break;
                    case 111:
                        entity.contextData.planeXAxisDirection =
                            helpers.parsePoint(scanner);
                        break;
                    case 112:
                        entity.contextData.planeYAxisDirection =
                            helpers.parsePoint(scanner);
                        break;
                    case 297:
                        entity.contextData.planeNormalReversed =
                            curr.value;
                        break;
                    case 301: // END CONTEXT_DATA
                        return;
                    case 302: // START LEADER
                        parseLeaderData();
                        break;
                    default:
                        break;
                }
                curr = scanner.next();
            }
        }
        function parseLeaderData() {
            const leader = {
                leaderLines: [],
            };
            entity.contextData.leaders.push(leader);
            while (!scanner.isEOF()) {
                switch (curr.code) {
                    case 290:
                        leader.hasSetLastLeaderLinePoint =
                            curr.value;
                        break;
                    case 291:
                        leader.hasSetDoglegVector = curr.value;
                        break;
                    case 10:
                        leader.lastLeaderLinePoint =
                            helpers.parsePoint(scanner);
                        break;
                    case 11:
                        leader.doglegVector = helpers.parsePoint(scanner);
                        break;
                    case 90:
                        leader.leaderBranchIndex = curr.value;
                        break;
                    case 40:
                        leader.doglegLength = curr.value;
                        break;
                    case 303: // END LEADER
                        return;
                    case 304: // START LEADER_LINE
                        parseLeaderLineData();
                        break;
                    default:
                        break;
                }
                curr = scanner.next();
            }
        }
        function parseLeaderLineData() {
            const leader = entity.contextData.leaders[entity.contextData.leaders.length - 1];
            const line = {
                vertices: [[]],
            };
            leader.leaderLines.push(line);
            while (!scanner.isEOF()) {
                switch (curr.code) {
                    case 10:
                        line.vertices[0].push(helpers.parsePoint(scanner));
                        break;
                    case 305: // END LEADER_LINE
                        return;
                    default:
                        break;
                }
                curr = scanner.next();
            }
        }
        parseCommonData();
        return entity;
    }
}
