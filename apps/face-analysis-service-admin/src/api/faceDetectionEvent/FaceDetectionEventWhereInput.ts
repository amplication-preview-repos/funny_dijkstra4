import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { FaceAnalysisWhereUniqueInput } from "../faceAnalysis/FaceAnalysisWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FaceDetectionEventWhereInput = {
  camera?: CameraWhereUniqueInput;
  faceAnalysis?: FaceAnalysisWhereUniqueInput;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
