/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FaceDetectionEvent } from "./FaceDetectionEvent";
import { FaceDetectionEventCountArgs } from "./FaceDetectionEventCountArgs";
import { FaceDetectionEventFindManyArgs } from "./FaceDetectionEventFindManyArgs";
import { FaceDetectionEventFindUniqueArgs } from "./FaceDetectionEventFindUniqueArgs";
import { CreateFaceDetectionEventArgs } from "./CreateFaceDetectionEventArgs";
import { UpdateFaceDetectionEventArgs } from "./UpdateFaceDetectionEventArgs";
import { DeleteFaceDetectionEventArgs } from "./DeleteFaceDetectionEventArgs";
import { Camera } from "../../camera/base/Camera";
import { FaceAnalysis } from "../../faceAnalysis/base/FaceAnalysis";
import { FaceDetectionEventService } from "../faceDetectionEvent.service";
@graphql.Resolver(() => FaceDetectionEvent)
export class FaceDetectionEventResolverBase {
  constructor(protected readonly service: FaceDetectionEventService) {}

  async _faceDetectionEventsMeta(
    @graphql.Args() args: FaceDetectionEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FaceDetectionEvent])
  async faceDetectionEvents(
    @graphql.Args() args: FaceDetectionEventFindManyArgs
  ): Promise<FaceDetectionEvent[]> {
    return this.service.faceDetectionEvents(args);
  }

  @graphql.Query(() => FaceDetectionEvent, { nullable: true })
  async faceDetectionEvent(
    @graphql.Args() args: FaceDetectionEventFindUniqueArgs
  ): Promise<FaceDetectionEvent | null> {
    const result = await this.service.faceDetectionEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FaceDetectionEvent)
  async createFaceDetectionEvent(
    @graphql.Args() args: CreateFaceDetectionEventArgs
  ): Promise<FaceDetectionEvent> {
    return await this.service.createFaceDetectionEvent({
      ...args,
      data: {
        ...args.data,

        camera: args.data.camera
          ? {
              connect: args.data.camera,
            }
          : undefined,

        faceAnalysis: args.data.faceAnalysis
          ? {
              connect: args.data.faceAnalysis,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FaceDetectionEvent)
  async updateFaceDetectionEvent(
    @graphql.Args() args: UpdateFaceDetectionEventArgs
  ): Promise<FaceDetectionEvent | null> {
    try {
      return await this.service.updateFaceDetectionEvent({
        ...args,
        data: {
          ...args.data,

          camera: args.data.camera
            ? {
                connect: args.data.camera,
              }
            : undefined,

          faceAnalysis: args.data.faceAnalysis
            ? {
                connect: args.data.faceAnalysis,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FaceDetectionEvent)
  async deleteFaceDetectionEvent(
    @graphql.Args() args: DeleteFaceDetectionEventArgs
  ): Promise<FaceDetectionEvent | null> {
    try {
      return await this.service.deleteFaceDetectionEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Camera, {
    nullable: true,
    name: "camera",
  })
  async getCamera(
    @graphql.Parent() parent: FaceDetectionEvent
  ): Promise<Camera | null> {
    const result = await this.service.getCamera(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => FaceAnalysis, {
    nullable: true,
    name: "faceAnalysis",
  })
  async getFaceAnalysis(
    @graphql.Parent() parent: FaceDetectionEvent
  ): Promise<FaceAnalysis | null> {
    const result = await this.service.getFaceAnalysis(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
