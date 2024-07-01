import { FaceDetectionEvent } from "../faceDetectionEvent/FaceDetectionEvent";

export type Camera = {
  createdAt: Date;
  faceDetectionEvents?: Array<FaceDetectionEvent>;
  id: string;
  location: string | null;
  name: string | null;
  owner: string | null;
  updatedAt: Date;
};
