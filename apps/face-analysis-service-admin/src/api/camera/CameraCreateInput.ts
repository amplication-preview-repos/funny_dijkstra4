import { FaceDetectionEventCreateNestedManyWithoutCamerasInput } from "./FaceDetectionEventCreateNestedManyWithoutCamerasInput";

export type CameraCreateInput = {
  faceDetectionEvents?: FaceDetectionEventCreateNestedManyWithoutCamerasInput;
  location?: string | null;
  name?: string | null;
  owner?: string | null;
};
