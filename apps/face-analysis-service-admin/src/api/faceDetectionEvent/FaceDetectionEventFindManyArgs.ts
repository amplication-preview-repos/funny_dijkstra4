import { FaceDetectionEventWhereInput } from "./FaceDetectionEventWhereInput";
import { FaceDetectionEventOrderByInput } from "./FaceDetectionEventOrderByInput";

export type FaceDetectionEventFindManyArgs = {
  where?: FaceDetectionEventWhereInput;
  orderBy?: Array<FaceDetectionEventOrderByInput>;
  skip?: number;
  take?: number;
};
