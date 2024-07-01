import * as graphql from "@nestjs/graphql";
import { FaceAnalysisResolverBase } from "./base/faceAnalysis.resolver.base";
import { FaceAnalysis } from "./base/FaceAnalysis";
import { FaceAnalysisService } from "./faceAnalysis.service";

@graphql.Resolver(() => FaceAnalysis)
export class FaceAnalysisResolver extends FaceAnalysisResolverBase {
  constructor(protected readonly service: FaceAnalysisService) {
    super(service);
  }
}
