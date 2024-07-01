import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceAnalysisService } from "./faceAnalysis.service";
import { FaceAnalysisControllerBase } from "./base/faceAnalysis.controller.base";

@swagger.ApiTags("faceAnalyses")
@common.Controller("faceAnalyses")
export class FaceAnalysisController extends FaceAnalysisControllerBase {
  constructor(protected readonly service: FaceAnalysisService) {
    super(service);
  }
}
