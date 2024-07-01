import { Module } from "@nestjs/common";
import { FaceDetectionEventModuleBase } from "./base/faceDetectionEvent.module.base";
import { FaceDetectionEventService } from "./faceDetectionEvent.service";
import { FaceDetectionEventController } from "./faceDetectionEvent.controller";
import { FaceDetectionEventResolver } from "./faceDetectionEvent.resolver";

@Module({
  imports: [FaceDetectionEventModuleBase],
  controllers: [FaceDetectionEventController],
  providers: [FaceDetectionEventService, FaceDetectionEventResolver],
  exports: [FaceDetectionEventService],
})
export class FaceDetectionEventModule {}
