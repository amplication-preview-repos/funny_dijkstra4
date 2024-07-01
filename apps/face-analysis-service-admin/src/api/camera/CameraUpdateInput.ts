import { FaceDetectionEventUpdateManyWithoutCamerasInput } from "./FaceDetectionEventUpdateManyWithoutCamerasInput";

export type CameraUpdateInput = {
  faceDetectionEvents?: FaceDetectionEventUpdateManyWithoutCamerasInput;
  location?: string | null;
  name?: string | null;
  owner?: string | null;
};
