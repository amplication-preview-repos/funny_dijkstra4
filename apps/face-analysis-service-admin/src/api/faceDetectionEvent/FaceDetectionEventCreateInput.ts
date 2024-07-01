import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { FaceAnalysisWhereUniqueInput } from "../faceAnalysis/FaceAnalysisWhereUniqueInput";

export type FaceDetectionEventCreateInput = {
  camera?: CameraWhereUniqueInput | null;
  faceAnalysis?: FaceAnalysisWhereUniqueInput | null;
  timestamp?: Date | null;
};
