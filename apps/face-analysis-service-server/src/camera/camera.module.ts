import { Module } from "@nestjs/common";
import { CameraModuleBase } from "./base/camera.module.base";
import { CameraService } from "./camera.service";
import { CameraController } from "./camera.controller";
import { CameraResolver } from "./camera.resolver";

@Module({
  imports: [CameraModuleBase],
  controllers: [CameraController],
  providers: [CameraService, CameraResolver],
  exports: [CameraService],
})
export class CameraModule {}
