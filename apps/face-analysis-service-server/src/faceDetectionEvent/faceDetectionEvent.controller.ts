import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceDetectionEventService } from "./faceDetectionEvent.service";
import { FaceDetectionEventControllerBase } from "./base/faceDetectionEvent.controller.base";

@swagger.ApiTags("faceDetectionEvents")
@common.Controller("faceDetectionEvents")
export class FaceDetectionEventController extends FaceDetectionEventControllerBase {
  constructor(protected readonly service: FaceDetectionEventService) {
    super(service);
  }
}
