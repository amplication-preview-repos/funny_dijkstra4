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
import { Camera } from "./Camera";
import { CameraCountArgs } from "./CameraCountArgs";
import { CameraFindManyArgs } from "./CameraFindManyArgs";
import { CameraFindUniqueArgs } from "./CameraFindUniqueArgs";
import { CreateCameraArgs } from "./CreateCameraArgs";
import { UpdateCameraArgs } from "./UpdateCameraArgs";
import { DeleteCameraArgs } from "./DeleteCameraArgs";
import { FaceDetectionEventFindManyArgs } from "../../faceDetectionEvent/base/FaceDetectionEventFindManyArgs";
import { FaceDetectionEvent } from "../../faceDetectionEvent/base/FaceDetectionEvent";
import { CameraService } from "../camera.service";
@graphql.Resolver(() => Camera)
export class CameraResolverBase {
  constructor(protected readonly service: CameraService) {}

  async _camerasMeta(
    @graphql.Args() args: CameraCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Camera])
  async cameras(@graphql.Args() args: CameraFindManyArgs): Promise<Camera[]> {
    return this.service.cameras(args);
  }

  @graphql.Query(() => Camera, { nullable: true })
  async camera(
    @graphql.Args() args: CameraFindUniqueArgs
  ): Promise<Camera | null> {
    const result = await this.service.camera(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Camera)
  async createCamera(@graphql.Args() args: CreateCameraArgs): Promise<Camera> {
    return await this.service.createCamera({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Camera)
  async updateCamera(
    @graphql.Args() args: UpdateCameraArgs
  ): Promise<Camera | null> {
    try {
      return await this.service.updateCamera({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Camera)
  async deleteCamera(
    @graphql.Args() args: DeleteCameraArgs
  ): Promise<Camera | null> {
    try {
      return await this.service.deleteCamera(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [FaceDetectionEvent], {
    name: "faceDetectionEvents",
  })
  async findFaceDetectionEvents(
    @graphql.Parent() parent: Camera,
    @graphql.Args() args: FaceDetectionEventFindManyArgs
  ): Promise<FaceDetectionEvent[]> {
    const results = await this.service.findFaceDetectionEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
