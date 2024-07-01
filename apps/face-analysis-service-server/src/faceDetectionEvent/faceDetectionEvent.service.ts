import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceDetectionEventServiceBase } from "./base/faceDetectionEvent.service.base";

@Injectable()
export class FaceDetectionEventService extends FaceDetectionEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
