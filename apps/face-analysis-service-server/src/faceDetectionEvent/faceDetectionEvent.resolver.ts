import * as graphql from "@nestjs/graphql";
import { FaceDetectionEventResolverBase } from "./base/faceDetectionEvent.resolver.base";
import { FaceDetectionEvent } from "./base/FaceDetectionEvent";
import { FaceDetectionEventService } from "./faceDetectionEvent.service";

@graphql.Resolver(() => FaceDetectionEvent)
export class FaceDetectionEventResolver extends FaceDetectionEventResolverBase {
  constructor(protected readonly service: FaceDetectionEventService) {
    super(service);
  }
}
