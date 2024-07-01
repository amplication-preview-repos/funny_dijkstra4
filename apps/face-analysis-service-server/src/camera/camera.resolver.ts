import * as graphql from "@nestjs/graphql";
import { CameraResolverBase } from "./base/camera.resolver.base";
import { Camera } from "./base/Camera";
import { CameraService } from "./camera.service";

@graphql.Resolver(() => Camera)
export class CameraResolver extends CameraResolverBase {
  constructor(protected readonly service: CameraService) {
    super(service);
  }
}
