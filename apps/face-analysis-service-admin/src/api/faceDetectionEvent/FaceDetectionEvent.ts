import { Camera } from "../camera/Camera";
import { FaceAnalysis } from "../faceAnalysis/FaceAnalysis";

export type FaceDetectionEvent = {
  camera?: Camera | null;
  createdAt: Date;
  faceAnalysis?: FaceAnalysis | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
