import { Module } from "@nestjs/common";
import { FaceAnalysisModuleBase } from "./base/faceAnalysis.module.base";
import { FaceAnalysisService } from "./faceAnalysis.service";
import { FaceAnalysisController } from "./faceAnalysis.controller";
import { FaceAnalysisResolver } from "./faceAnalysis.resolver";

@Module({
  imports: [FaceAnalysisModuleBase],
  controllers: [FaceAnalysisController],
  providers: [FaceAnalysisService, FaceAnalysisResolver],
  exports: [FaceAnalysisService],
})
export class FaceAnalysisModule {}
