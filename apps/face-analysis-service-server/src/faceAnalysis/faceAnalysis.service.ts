import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceAnalysisServiceBase } from "./base/faceAnalysis.service.base";

@Injectable()
export class FaceAnalysisService extends FaceAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
