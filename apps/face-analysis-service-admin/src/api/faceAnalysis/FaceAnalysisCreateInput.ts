import { InputJsonValue } from "../../types";
import { FaceDetectionEventCreateNestedManyWithoutFaceAnalysesInput } from "./FaceDetectionEventCreateNestedManyWithoutFaceAnalysesInput";

export type FaceAnalysisCreateInput = {
  age?: number | null;
  emotions?: InputJsonValue;
  eyeColor?: "Option1" | null;
  faceDetectionEvents?: FaceDetectionEventCreateNestedManyWithoutFaceAnalysesInput;
  faceShape?: "Option1" | null;
  gender?: "Option1" | null;
  imageUrl?: InputJsonValue;
  skinTone?: "Option1" | null;
  timestamp?: Date | null;
};
